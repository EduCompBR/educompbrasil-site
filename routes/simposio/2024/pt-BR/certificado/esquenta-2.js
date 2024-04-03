const PDFDocument = require('pdfkit')
const { GoogleSpreadsheet } = require('google-spreadsheet')
const fs = require('fs')

const nome_evento = "Esquenta II - EduComp 2024"
const data_evento = "05/04/2024"
const base_name = "esquenta-2"
const layout = 'simposio/2024/pt-BR/layout'
const base_view = "simposio/2024/pt-BR/certificados/" + base_name + "/"
const template_url = "resources/simposio/2024/pt-BR/modelos/" + base_name + ".png"
const font_url = 'resources/simposio/2024/pt-BR/fonts/trebuc.ttf'
const codigo_planilha = '13y5aQ6ZH2EbGL6kHBm0Br538NxaLneteBPmw5fpH_u8'
const endereco_validacao = "www.educompbrasil.org/simposio/2024/certificados/esquenta/2/validar"

//Educomp opcoes
exports.opcoes = function (req, res) {

    res.render(base_view + 'opcoes',
        {
            layout: layout,
            certificado: true,
            titulo: 'Certificado',
            header: {
                endereco: 'certificados',
                descricao: 'Faixa de título dos certificados.'
            }
        }
    )
};

//form obter do educomp
exports.certificado = function (req, res) {
    console.log('vai renderizar o form obter')
    res.render(base_view + 'form-obter',
        {
            layout: layout,
            certificado: true,
            titulo: 'Certificado',
            header: {
                endereco: 'certificados',
                descricao: 'Faixa de título dos certificados.'
            }
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
            res.render(base_view + 'obter-lista',
                {
                    layout: layout,
                    certificado: true,
                    titulo: 'Certificados',
                    email: req.body.email,
                    data: plans,
                    header: {
                        endereco: 'certificados',
                        descricao: 'Faixa de título dos certificados.'
                    }
                }
            )
        } else {
            res.render(base_view + 'form-obter',
                {
                    layout: layout,
                    certificado: true,
                    mensagem: 'Email não encontrado na base de dados. Entre em contato com a organização',
                    header: {
                        endereco: 'certificados',
                        descricao: 'Faixa de título dos certificados.'
                    }
                }
            )
        }
    } catch (error) {
        console.log(error)
        res.render(base_view + 'obter-lista',
                {
                    layout: layout,
                    certificado: true,
                    titulo: 'Certificado',
                    mensagem: 'Erro ao buscar certificado. Entre em contato com a organização',
                    header: {
                        endereco: 'certificados',
                        descricao: 'Faixa de título dos certificados.'
                    }
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
      doc.page.margins.bottom = 0
      doc.image(template_url, 0, 0,{
          fit: [841.92, 594.96],
      })
      doc.fontSize(18)
      doc.font(font_url)
      
      var nome_completo = {}
      if(req.body.nome_completo){
        var nome_completo = req.body.nome_completo
        nome_completo = nome_completo.toUpperCase()
      }

      var novoTextoBase = req.body.texto_base
      var codigo = req.body.codigo      

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
      
      if(req.body.nome_completo)
        novoTextoBase = novoTextoBase.replace(req.body.nome_completo, nome_completo)

      if(novoTextoBase.length > 400)
          doc.fontSize(16)
      doc.text(novoTextoBase, (doc.page.width - 550)/2, 250, {width: 550, align: 'justify'})
      doc.fontSize(9.5)

      //Rotacionar para colocar o código
      //doc.rotate(270, { origin: [10,520] })
      doc.text(`Use o código ${codigo} para validar o certificado em: `, 150, 515, {width:doc.page.width, align: 'left'})
      doc.fillColor('blue').text(`${endereco_validacao}`, 397, 515, {link: endereco_validacao, underline: true})
      //doc.rotate(-270, { origin: [10,520] })

      doc.end()
      doc.pipe(fs.createWriteStream(`resources/certificados/gerados/certificado-${codigo}.pdf`)).on('finish', () => {
          res.download(`resources/certificados/gerados/certificado-${codigo}.pdf`, () => {
              fs.unlinkSync(`resources/certificados/gerados/certificado-${codigo}.pdf`)
          })

      })

    }
    catch(error) {
        console.log('Erro ao gerar arquivo pdf' + error)
        res.render(base_view + 'obter-lista',
            {
                layout: layout,
                certificado: true,
                titulo: 'Certificado',
                mensagem: 'Erro ao buscar certificado. Entre em contato com a organização',
                header: {
                    endereco: 'certificados',
                    descricao: 'Faixa de título dos certificados.'
                }
            }
        )
    }
}

//form validar educomp
exports.formValidar = function (req, res) {
    res.render(base_view + 'form-validar',
        {
            layout: layout,
            certificado: true,
            titulo: 'Certificado',
            header: {
                endereco: 'certificados',
                descricao: 'Faixa de título dos certificados.'
            }
        }
    )
};

//Validação educomp
exports.validar = async function (req, res) {
  try{
    console.log('Validação do ' + nome_evento)
    const doc = new GoogleSpreadsheet(codigo_planilha)
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
    })
    await doc.loadInfo()

    var codigo = req.body.codigo
    console.log(codigo)

    var codigoPlan = codigo.substring(9, 11)
    console.log(codigoPlan)

    let numberOfSheets = await doc.sheetCount;
    //console.log(numberOfSheets)

    //Pegar códigos
    var rowsCodigosLimpos = await doc.sheetsByTitle["codigos-limpos"].getRows()

    var tituloPlan = {}
    var campo_destaque = {}
    var descricao = {}
    rowsCodigosLimpos.forEach( (element) => {
      //console.log(element.codigo)
      if(element.codigo === codigoPlan){
        tituloPlan = element.titulo
        campo_destaque = element.campo_destaque
        descricao = element.descricao
      }
    })

    //console.log(tituloPlan)
    //console.log(campo_destaque)
    //console.log(descricao)

    //Buscar na planilha
    var rowsPlan = await doc.sheetsByTitle[tituloPlan].getRows()

    var descricaoCampoDestaque = {}
    var posicao = 0
    var nome_completo = ""
    rowsPlan.forEach( (element) => {
      //console.log(element.codigo)
      if(
        !!element.id &&
        element.codigo === codigo &&
        element.status == "liberado"
      ){
        console.log('Código encontrado')
        nome_completo = element.nome_completo
        descricaoCampoDestaque = element[campo_destaque]
        posicao = 1
      }
    })

    if (posicao !== 0) {

      console.log('Usuário encontrado, validando...')
      var dadosMensagem = []

      dadosMensagem.push(`CÓDIGO: ${codigo}`)
      dadosMensagem.push("EVENTO: " + nome_evento)
      dadosMensagem.push("DATA: " + data_evento)
      dadosMensagem.push(`NOME: ${nome_completo}`)
      dadosMensagem.push(`ATIVIDADE: ${descricao}`)
      if(campo_destaque != "nome_completo")
        dadosMensagem.push(`${campo_destaque.toUpperCase()}: ${descricaoCampoDestaque}`)

      res.render(base_view + 'validar-resultado', {
          layout: layout,
          certificado: true,
          titulo: 'Certificado',
          dadosMensagem: dadosMensagem,
          header: {
              endereco: 'certificados',
              descricao: 'Faixa de título dos certificados.'
          }
      })
      } else {
          res.render(base_view + 'validar-resultado', {
              layout: layout,
              certificado: true,
              titulo: 'Certificado',
              dadosMensagem: false,
              header: {
                  endereco: 'certificados',
                  descricao: 'Faixa de título dos certificados.'
              }
          })
      }
    } catch (error) {
      res.render(base_view + 'form-validar',
      {
          layout: layout,
          certificado: true,
          titulo: 'Certificado',
          header: {
              endereco: 'certificados',
              descricao: 'Faixa de título dos certificados.'
          }
      })
    }
};
