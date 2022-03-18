const PDFDocument = require('pdfkit')
const { GoogleSpreadsheet } = require('google-spreadsheet')
const fs = require('fs')

const nome_evento = "II Esquenta EduComp 2022"
const codigo_planilha = '1I1W-rifpOqJpmmO8p3iZULWG-J9uJ2kBuxnjNBRLsiw'

//Educomp opcoes
exports.opcoes = function (req, res) {

    res.render('simposio/2022/pt-BR/certificados/esquenta-2/opcoes',
        {
            layout: 'simposio/2022/pt-BR/layout',
            certificado: true,
            titulo: 'Certificado',
        }
    )
};

//form obter do educomp
exports.certificado = function (req, res) {
    console.log('vai renderizar o form obter')
    res.render('simposio/2022/pt-BR/certificados/esquenta-2/form-obter',
        {
            layout: 'simposio/2022/pt-BR/layout',
            certificado: true,
            titulo: 'Certificado',
        }
    )
};

//gerar lista de links do educomp
exports.obter = async function (req, res) {
    try{
        console.log(nome_evento)
        const doc = new GoogleSpreadsheet(codigo_planilha)
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()

        let numberOfSheets = await doc.sheetCount;

        //Copiar toda a planilha
        var rows = []
        var headers = []
        for(var i=0; i<numberOfSheets; i++){
            var title = doc.sheetsByIndex[i].title
            rows[title] = await doc.sheetsByTitle[title].getRows()

            //Copiar nomes das colunas
            var not_headers = [
                '_sheet', "_rowNumber", "_rawData",
                "id", "codigo_base", "texto_base", "status"
            ]
            headers[title] = Object.getOwnPropertyNames(rows[title][0])
            headers[title] = headers[title].filter(x => !not_headers.includes(x))
        }

        //Pegar código e descricao
        var codigos_limpos = []
        rows["codigos-limpos"].forEach( (element) => {
            codigos_limpos[element.titulo] = []
            codigos_limpos[element.titulo]["codigo"] = element.codigo
            codigos_limpos[element.titulo]["descricao"] = element.descricao
            codigos_limpos[element.titulo]["campo_destaque"] = element.campo_destaque
        })

        //Buscar registros
        let encontrado = false
        let plans = {}
        for(var i=0; i<numberOfSheets; i++){
            var title = doc.sheetsByIndex[i].title
            if(title != "codigos-limpos"){
                plans[title] = {}
                plans[title]["nome"] = codigos_limpos[title]["descricao"]
                var textoBase = rows[title][0]["texto_base"]
                plans[title]["registros"] = []
                rows[title].forEach( (element) => {
                    if(!!element.id && element.status == "liberado"){
                        if ((element.email.trim()) === req.body.email) {

                            encontrado = true

                            var registro = {}
                            registro["id"] = element.id
                            headers[title].forEach( (h) => {
                                registro[h] = element[h].trim()
                            })
                            registro["texto_base"] = textoBase
                            registro["atividade"] = title

                            registro["descricao"] = element[codigos_limpos[title]["campo_destaque"]]
                            registro["descricao"] =
                              registro["descricao"].charAt(0).toUpperCase() +
                              registro["descricao"].slice(1)

                            registro[title] = true
                            registro["campos"] = headers[title].concat(["atividade", "descricao", title])

                            plans[title]["registros"].push(registro)
                        }
                    }
                })
                if(!Object.keys(plans[title]["registros"]).length){
                    delete plans[title]["registros"]
                }
            }
        }

        console.log(plans)
        //console.log("Participacao: " + /*JSON.stringify(*/plans.participacao.registros.count)

        if (encontrado) {
            res.render('simposio/2022/pt-BR/certificados/esquenta-2/obter-lista',
                {
                    layout: 'simposio/2022/pt-BR/layout',
                    certificado: true,
                    titulo: 'Certificados',
                    email: req.body.email,
                    data: plans,
                }
            )
        } else {
            res.render('simposio/2022/pt-BR/certificados/esquenta-2/form-obter',
                {
                    layout: 'simposio/2022/pt-BR/layout',
                    certificado: true,
                    mensagem: 'Email não encontrado na base de dados. Entre em contato com a organização'
                }
            )
        }
    } catch (error) {
        console.log(error)
        res.render('simposio/2022/pt-BR/certificados/esquenta-2/obter-lista',
                {
                    layout: 'simposio/2022/pt-BR/layout',
                    certificado: true,
                    titulo: 'Certificado',
                    mensagem: 'Erro ao buscar certificado. Entre em contato com a organização'
                }
        )
    }

};

//obter arquivo específico de certificado do educomp
exports.obterArquivo = async function (req, res) {
    try{
      const doc = new PDFDocument({
          layout: 'landscape',
          size: [594.96, 841.92],
      })
      doc.image('resources/simposio/2022/pt-BR/modelos/esquenta-2.png', 0, 0,{
          fit: [841.92, 594.96],
      })
      doc.fontSize(18)
      doc.font('resources/simposio/2022/pt-BR/fonts/trebuc.ttf')

      var nome_completo = req.body.nome_completo
      var novoTextoBase = req.body.texto_base
      var codigo = req.body.codigo

      nome_completo = nome_completo.toUpperCase()

      var indice_atual = 0
      while(indice_atual != -1){
        var indice_inicio = novoTextoBase.indexOf("${", indice_atual)
        if(indice_inicio === -1) break
        var indice_fim = novoTextoBase.indexOf("}", indice_atual)

        var tag = novoTextoBase.slice(indice_inicio, indice_fim + 1)
        var campo = novoTextoBase.slice(indice_inicio + 2, indice_fim)

        novoTextoBase = novoTextoBase.replace(tag, req.body[campo])
        indice_atual = indice_fim
      }
      novoTextoBase = novoTextoBase.replace(req.body.nome_completo, nome_completo)

      if(novoTextoBase.length > 400)
          doc.fontSize(16)
      doc.text(novoTextoBase, 165, 195, {width: 600, align: 'justify'})
      doc.fontSize(9.5)
      doc.text(`Use o código ${codigo} para validar o certificado em: \nwww.educompbrasil.org/simposio/2022/certificados/esquenta/2/validar`, 280, 500, {width:600, align: 'left'})
      doc.end()
      doc.pipe(fs.createWriteStream(`resources/certificados/gerados/certificado-${codigo}.pdf`)).on('finish', () => {
          res.download(`resources/certificados/gerados/certificado-${codigo}.pdf`, () => {
              fs.unlinkSync(`resources/certificados/gerados/certificado-${codigo}.pdf`)
          })

      })

    }
    catch(error) {
        console.log('Erro ao gerar arquivo pdf' + error)
        res.render('simposio/2022/pt-BR/certificados/esquenta-2/obter-lista',
            {
                layout: 'simposio/2022/pt-BR/layout',
                certificado: true,
                titulo: 'Certificado',
                mensagem: 'Erro ao buscar certificado. Entre em contato com a organização'
            }
        )
    }
}

//form validar educomp
exports.formValidar = function (req, res) {
    res.render('simposio/2022/pt-BR/certificados/esquenta-1/form-validar',
        {
            layout: 'simposio/2022/pt-BR/layout',
            certificado: true,
            titulo: 'Certificado',
        }
    )
};

//Validação educomp
exports.validar = async function (req, res) {
    try{
        console.log('Teste validacao do I Esquenta EduComp 2022')
        const doc = new GoogleSpreadsheet('1PVmQ0SWG635jevdIQPh8ToUNdzCmwPK6k9MYP_KhxaQ')
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        let codigo = req.body.codigo
        console.log(codigo)
        let finalCodigo = codigo.substring(9, 11)
        console.log(finalCodigo)

        let atividade = ''
        let descricao = ''
        const planCodigos = await doc.sheetsByTitle['codigos-limpos'].getRows()
        planCodigos.forEach( (element) => {
            console.log('Elemento e código: ', element.codigo, finalCodigo)
            if (element.codigo === finalCodigo){
                atividade = element.titulo
                descricao = element.descricao
            }
        })

        console.log(atividade)
        console.log(finalCodigo)
        console.log(descricao)
        const rows = await doc.sheetsByTitle[atividade].getRows()
        //const rows = await sheet.getRows()
        var encontrado = -1
        let posicao = -1
        rows.forEach( (element, index) => {
            //console.log(element.Email)
            if(!!element.id && element.status == "liberado")
            if (element.codigo === codigo){
                encontrado = 1
                posicao = index
            }
        })
        if (posicao !== -1) {
            console.log('Usuário encontrado, validando...')
            let nome = rows[posicao].nome_completo
            //res.redirect('/simposio/2021/certificados/esquenta/1/resultado/valido')
            let dadosMensagem = []
            dadosMensagem.push(`CÓDIGO: ${codigo}`)
            dadosMensagem.push("EVENTO: I Esquenta EduComp 2022")
            dadosMensagem.push("DATA: 21/02/2022")
            dadosMensagem.push(`ATIVIDADE: ${descricao}`)
            if (rows[posicao].revisor){
                dadosMensagem.push(`REVISOR: ${rows[posicao].revisor}`)
            } else {
                dadosMensagem.push(`PARTICIPANTE: ${nome}`)
            }
            if (rows[posicao].funcao){
                dadosMensagem.push(`FUNÇÃO: ${rows[posicao].funcao} `)
            }
            if (rows[posicao].titulo){
                dadosMensagem.push(`TÍTULO: ${rows[posicao].titulo} `)
            }
            if (rows[posicao].tipo){
                dadosMensagem.push(`TIPO: ${rows[posicao].tipo} `)
            }
            if (rows[posicao].trilha){
                dadosMensagem.push(`TRILHA: ${rows[posicao].trilha} `)
            }

            res.render('simposio/2022/pt-BR/certificados/esquenta-1/validar-resultado', {
                layout: 'simposio/2022/pt-BR/layout',
                certificado: true,
                titulo: 'Certificado',
                dadosMensagem: dadosMensagem,
            })
        } else {
            res.render('simposio/2022/pt-BR/certificados/esquenta-1/validar-resultado', {
                layout: 'simposio/2022/pt-BR/layout',
                certificado: true,
                titulo: 'Certificado',
                dadosMensagem: false,
            })
        }
    } catch (error) {
        res.render('simposio/2022/pt-BR/certificados/esquenta-1/form-validar',
        {
            layout: 'simposio/2022/pt-BR/layout',
            certificado: true,
            titulo: 'Certificado',
        }
    )
    }

};
