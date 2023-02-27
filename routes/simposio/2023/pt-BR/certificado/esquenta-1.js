const PDFDocument = require('pdfkit')
const { GoogleSpreadsheet } = require('google-spreadsheet')
const fs = require('fs')

//Educomp opcoes
exports.opcoes = function (req, res) { 

    res.render('simposio/2023/pt-BR/certificados/esquenta-1/opcoes', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
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
    res.render('simposio/2023/pt-BR/certificados/esquenta-1/form-obter', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
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
        console.log('Certificado Esquenta 2023.1')
        const doc = new GoogleSpreadsheet('1CIU_20WZ8J1FpyGHpNlis9NNo7NreBo8F_NZSZOMWco')
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        let rowsParticipacao = await doc.sheetsByTitle['participacao'].getRows()
        let rowsComiteProgramaCoord = await doc.sheetsByTitle['comite-programa-coord'].getRows()
        let rowsComiteProgramaMembro = await doc.sheetsByTitle['comite-programa-membro'].getRows()
        let rowsAberturaEncerramento = await doc.sheetsByTitle['abertura-encerramento'].getRows()
        let rowsApresTrabalho = await doc.sheetsByTitle['apres-trabalho'].getRows()
        let rowsSessaoTecnicaCoord = await doc.sheetsByTitle['sessao-tecnica-coord'].getRows()
        let rowsOrganizacao = await doc.sheetsByTitle['organizacao'].getRows()
        let rowsPalestrante = await doc.sheetsByTitle['palestrante'].getRows()
        let rowsPalestraApoio = await doc.sheetsByTitle['palestra-apoio'].getRows()

        let plans = []

        let participacao = {}
        let comite_programa_coord = {}
        let comite_programa_membro = {}
        let abertura_encerramento = {}
        let apres_trabalho = {}
        let sessao_tecnica_coord = {}
        let organizacao = {}
        let palestrante = {}
        let palestra_apoio = {}

        let encontrado = false
        
        participacao.nome = 'Participação'
        participacao.registros = []
        rowsParticipacao.forEach( (element) => {
            if(!!element.id && element.status == "liberado")
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                participacao.registros.push(
                    { 
                        'email': element.email.trim(),                        
                        'atividade': 'participacao',
                        'participacao': true,
                    }
                )
            }
        })
        plans.push( participacao )

        comite_programa_coord.nome = 'Comitê de Programa (Coordenação)'
        comite_programa_coord.registros = []
        console.log(rowsComiteProgramaCoord)
        rowsComiteProgramaCoord.forEach( (element) => {
            if(!!element.id && element.status == "liberado")
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                comite_programa_coord.registros.push(
                    { 
                        'email': element.email.trim(),               
                        'atividade': 'comite-programa-coord',
                        'trilha': element.trilha, 
                        'trilhaFormat': element.trilha[0].toUpperCase() + element.trilha.substr(1),
                        'comite-programa-coord': true,
                    }
                )
            }
        })
        plans.push( comite_programa_coord )

        comite_programa_membro.nome = 'Comitê de Programa (Membro)'
        comite_programa_membro.registros = []
        rowsComiteProgramaMembro.forEach( (element) => {
            if(!!element.id && element.status == "liberado")
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                comite_programa_membro.registros.push(
                    { 
                        'email': element.email.trim(),          
                        'atividade': 'comite-programa-membro',
                        'comite-programa-membro': true,
                    }
                )
            }
        })
        plans.push( comite_programa_membro )

        abertura_encerramento.nome = 'Abertura - Encerramento'
        abertura_encerramento.registros = []
        rowsAberturaEncerramento.forEach( (element) => {
            if(!!element.id && element.status == "liberado")
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                abertura_encerramento.registros.push(
                    { 
                        'email': element.email.trim(),
                        'tipo': element.tipo,
                        'tipoFormat': element.tipo[0].toUpperCase() + element.tipo.substr(1),
                        'dia': element.dia, 
                        'atividade': 'abertura-encerramento',
                        'abertura-encerramento': true,
                    }
                )
            }
        })
        plans.push(abertura_encerramento)

        apres_trabalho.nome = 'Apresentação de Trabalhos'        
        apres_trabalho.registros = []
        rowsApresTrabalho.forEach( (element) => {
            if(!!element.id && element.status == "liberado")
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                apres_trabalho.registros.push(
                    { 
                        'email': element.email.trim(),                        
                        'titulo': element.titulo,     
                        'tituloFormat': element.titulo[0].toUpperCase() + element.titulo.substr(1),   
                        'tipo': element.tipo,
                        'dia': element.dia,                
                        'atividade': 'apres-trabalho',
                        'apres-trabalho': true,
                    }
                )
            }
        })
        plans.push(apres_trabalho)

        sessao_tecnica_coord.nome = 'Sessão técnica - Coordenação'
        sessao_tecnica_coord.registros = []
        rowsSessaoTecnicaCoord.forEach( (element) => {
            if(!!element.id && element.status == "liberado")
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                sessao_tecnica_coord.registros.push(
                    { 
                        'email': element.email.trim(),                                                
                        'atividade': 'sessao-tecnica-coord',
                        'sessao': element.sessao,
                        'sessaoFormat': element.sessao[0].toUpperCase() + element.sessao.substr(1),
                        'dia': element.dia,
                        'sessao-tecnica-coord': true,
                    }
                )
            }
        })
        plans.push(sessao_tecnica_coord)

        organizacao.nome = 'Organização'
        organizacao.registros = []
        rowsOrganizacao.forEach( (element) => {
            if(!!element.id && element.status == "liberado")
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                organizacao.registros.push(
                    { 
                        'email': element.email.trim(),
                        'funcao': element.funcao,
                        'funcaoFormat': element.funcao[0].toUpperCase() + element.funcao.substr(1),
                        'atividade': 'organizacao',
                        'organizacao': true,
                    }
                )
            }
        })
        plans.push( organizacao )

        palestrante.nome = 'Palestrante'
        palestrante.registros = []
        rowsPalestrante.forEach( (element) => {
            if(!!element.id && element.status == "liberado")
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                palestrante.registros.push(
                    { 
                        'email': element.email.trim(),               
                        'atividade': 'palestrante',
                        'titulo': element.titulo,
                        'tituloFormat': element.titulo[0].toUpperCase() + element.titulo.substr(1),
                        'dia': element.dia,
                        'palestrante': true,
                    }
                )
            }
        })
        plans.push( palestrante )

        palestra_apoio.nome = 'Palestra (Apoio)'
        palestra_apoio.registros = []
        rowsPalestraApoio.forEach( (element) => {
            if(!!element.id && element.status == "liberado")
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                palestra_apoio.registros.push(
                    { 
                        'email': element.email.trim(),               
                        'atividade': 'palestra-apoio',
                        'funcao': element.funcao,
                        'titulo': element.titulo,
                        'tituloFormat': element.titulo[0].toUpperCase() + element.titulo.substr(1),
                        'dia': element.dia, 
                        'palestra-apoio': true,
                    }
                )
            }
        })
        plans.push( palestra_apoio )

        console.log(plans)

        if (encontrado) {
            res.render('simposio/2023/pt-BR/certificados/esquenta-1/obter-lista',
                {
                    layout: 'simposio/2023/pt-BR/layout', 
                    certificado: true,
                    titulo: 'Certificado', 
                    email: req.body.email,
                    data: plans,
                    header: {
                        endereco: 'certificados',
                        descricao: 'Faixa de título dos certificados.'
                    }
                }
            )
        } else {
            res.render('simposio/2023/pt-BR/certificados/esquenta-1/form-obter',
                {
                    layout: 'simposio/2023/pt-BR/layout', 
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
        res.render('simposio/2023/pt-BR/certificados/esquenta-1/obter-lista',
                {
                    layout: 'simposio/2023/pt-BR/layout', 
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
        let atividade = req.body.atividade
        let email = req.body.email
        let nome = ''
        let codigo = req.body.codigo
        let funcao = false
        let tipo = false
        let titulo = false
        let sessao = false
        let dia = false 
        let trilha = false 
        let autores = false
        let revisor = false
        let textoBase = ''

        const sheets = new GoogleSpreadsheet('1CIU_20WZ8J1FpyGHpNlis9NNo7NreBo8F_NZSZOMWco')
        await sheets.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })

        await sheets.loadInfo()
        let posicao = -1

        const rows = await sheets.sheetsByTitle[atividade].getRows()
        rows.forEach( (element, index) => {
            if(!!element.id && element.status == "liberado"){
                if (atividade === 'participacao') {
                    if ((element.email.trim()) === email) {
                        posicao = index
                    }
                } else if (atividade === 'organizacao') {
                    funcao = req.body.funcao
                    //console.log(element.funcao, funcao)
                    if ((element.email.trim()) === email && element.funcao === funcao) {
                        funcao = funcao[0].toUpperCase() + funcao.substr(1)
                        posicao = index
                    }
                } else if (atividade === 'comite-programa-membro') {
                    funcao = req.body.funcao
                    if ((element.email.trim()) === email) {
                        posicao = index
                    }
                } else if (atividade === 'comite-programa-convidado') {
                    if ((element.email.trim()) === email) {
                        posicao = index
                    }
                } else if (atividade === 'comite-programa-coord') {
                    trilha = req.body.trilha 
                    if ((element.email.trim()) === email && element.trilha === trilha) {
                        trilha = trilha[0].toUpperCase() + trilha.substr(1)
                        posicao = index
                    }
                }
                else if (atividade === 'palestrante') {
                    titulo = req.body.titulo 
                    dia = req.body.dia
                    if ((element.email.trim()) === email && element.titulo === titulo) {
                        titulo = titulo[0].toUpperCase() + titulo.substr(1)
                        posicao = index
                    }
                } 
                else if (atividade === 'palestra-apoio') {
                    funcao = req.body.funcao
                    titulo = req.body.titulo 
                    dia = req.body.dia
                    if ((element.email.trim()) === email && element.funcao === funcao && element.titulo === titulo) {
                        funcao = funcao[0].toUpperCase() + funcao.substr(1)
                        titulo = titulo[0].toUpperCase() + titulo.substr(1)
                        posicao = index
                    }
                }
                else if (atividade === 'painel') {
                    funcao = req.body.funcao
                    titulo = req.body.titulo 
                    dia = req.body.dia 
                    if ((element.email.trim()) === email && element.funcao === funcao && element.titulo === titulo) {
                        funcao = funcao[0].toUpperCase() + funcao.substr(1)
                        titulo = titulo[0].toUpperCase() + titulo.substr(1)
                        posicao = index
                    }
                } else if (atividade === 'sessao-tecnica-coord') {
                    sessao = req.body.sessao 
                    dia = req.body.dia 
                    if ((element.email.trim()) === email && element.sessao === sessao) {
                        sessao = sessao[0].toUpperCase() + sessao.substr(1)
                        posicao = index
                    }
                } else if (atividade === 'apres-trabalho') {
                    tipo = req.body.tipo
                    titulo = req.body.titulo
                    dia = req.body.dia 
                    if ((element.email.trim()) === email && element.tipo === tipo && element.titulo === titulo) {
                        tipo = tipo[0].toUpperCase() + tipo.substr(1)
                        titulo = titulo[0].toUpperCase() + titulo.substr(1)
                        posicao = index
                    }
                } else if (atividade === 'abertura-encerramento') {
                    tipo = req.body.tipo
                    dia = req.body.dia 
                    if ((element.email.trim()) === email && element.tipo === tipo) {
                        tipo = tipo[0].toUpperCase() + tipo.substr(1)
                        posicao = index
                    }
                } else if (atividade === 'trabalho-publicado') {
                    tipo = req.body.tipo
                    titulo = req.body.titulo 
                    autores = req.body.autores 
                    if ((element.email.trim()) === email && element.tipo === tipo && element.titulo === titulo) {                    
                        tipo = tipo[0].toUpperCase() + tipo.substr(1)
                        titulo = titulo[0].toUpperCase() + titulo.substr(1)
                        autores = autores[0].toUpperCase() + autores.substr(1)
                        posicao = index
                    }
                } else if (atividade === 'lab-ideias-mesa') {
                    sessao = req.body.sessao
                    dia = req.body.dia
                    tipo = req.body.tipo 
                    if ((element.email.trim()) === email && element.sessao === sessao && element.tipo === tipo) {
                        sessao = sessao[0].toUpperCase() + sessao.substr(1)
                        tipo = tipo[0].toUpperCase() + tipo.substr(1)
                        posicao = index
                    }
                } else if (atividade === 'melhor-trabalho') {
                    tipo = req.body.tipo
                    titulo = req.body.titulo 
                    autores = req.body.autores 
                    if ((element.email.trim()) === email && element.tipo === tipo && element.titulo === titulo) {                    
                        tipo = tipo[0].toUpperCase() + tipo.substr(1)
                        titulo = titulo[0].toUpperCase() + titulo.substr(1)
                        autores = autores[0].toUpperCase() + autores.substr(1)
                        posicao = index
                    }
                } else if (atividade === 'melhor-revisor') {
                    revisor = req.body.revisor
                    trilha = req.body.trilha 
                    posicao = index
                }
            }
        })

        if ( posicao !== -1 ) {
            const doc = new PDFDocument({                
                layout: 'landscape',  
                size: [594.96, 841.92],               
            })
            doc.page.margins.bottom = 0
            doc.image('resources/simposio/2023/pt-BR/modelos/esquenta-1.png', 0, 0,{
                fit: [841.92, 594.96],
            })
            doc.fontSize(18)
            doc.font('resources/simposio/2023/pt-BR/fonts/trebuc.ttf')

            if (rows[posicao].nome_completo) nome = rows[posicao].nome_completo
            if (rows[posicao].codigo) codigo = rows[posicao].codigo
            nome = nome.toUpperCase()
            textoBase = rows[0].texto_base
            let novoTextoBase = textoBase.replace('${nome_completo}', nome)
            novoTextoBase = novoTextoBase.replace('${funcao}', funcao)
            novoTextoBase = novoTextoBase.replace('${titulo}', titulo)
            novoTextoBase = novoTextoBase.replace('${tipo}', tipo)
            novoTextoBase = novoTextoBase.replace('${sessao}', sessao)
            novoTextoBase = novoTextoBase.replace('${dia}', dia)
            novoTextoBase = novoTextoBase.replace('${trilha}', trilha)
            novoTextoBase = novoTextoBase.replace('${autores}', autores)
            novoTextoBase = novoTextoBase.replace('${revisor}', revisor)
            

            //doc.text(novoTextoBase, 150, 265, {width: 600, align: 'justify', continued: true}).fontSize(8).text(`Pode ser validado em: https://www.educompbrasil.org/simposio/2021/certificados/esquenta/1/validar com o código: ${codigo}`, 150, 385, {width:600, align: 'justify'})

            if(novoTextoBase.length > 400)
                doc.fontSize(16)
            doc.text(novoTextoBase, 230, 310, {width: 550, align: 'justify'})
            doc.fontSize(9.5)
            doc.text(`Use o código ${codigo} para validar o certificado em: \nhttps://www.educompbrasil.org/simposio/2023/certificados/esquenta/1/validar`, 200, 560, {width:600, align: 'left'})
            doc.end()
            doc.pipe(fs.createWriteStream(`resources/certificados/gerados/certificado-${codigo}.pdf`)).on('finish', () => {
                res.download(`resources/certificados/gerados/certificado-${codigo}.pdf`, () => {
                    fs.unlinkSync(`resources/certificados/gerados/certificado-${codigo}.pdf`)
                })
                
            })
            
        }  

    }
    catch(error) {
        console.log('Erro ao gerar arquivo pdf' + error)
        res.render('simposio/2023/pt-BR/certificados/esquenta-1/obter-lista',
            {
                layout: 'simposio/2023/pt-BR/layout', 
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
    res.render('simposio/2023/pt-BR/certificados/esquenta-1/form-validar', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
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
        console.log('Teste validacao do I Esquenta EduComp 2023')
        const doc = new GoogleSpreadsheet('1CIU_20WZ8J1FpyGHpNlis9NNo7NreBo8F_NZSZOMWco')
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
            dadosMensagem.push("EVENTO: I Esquenta EduComp 2023")
            dadosMensagem.push("DATA: 21/02/2023")
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

            res.render('simposio/2023/pt-BR/certificados/esquenta-1/validar-resultado', {
                layout: 'simposio/2023/pt-BR/layout', 
                certificado: true,
                titulo: 'Certificado', 
                dadosMensagem: dadosMensagem,
                header: {
                    endereco: 'certificados',
                    descricao: 'Faixa de título dos certificados.'
                } 
            })
        } else {
            res.render('simposio/2023/pt-BR/certificados/esquenta-1/validar-resultado', {
                layout: 'simposio/2023/pt-BR/layout', 
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
        res.render('simposio/2023/pt-BR/certificados/esquenta-1/form-validar', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado',
            header: {
                endereco: 'certificados',
                descricao: 'Faixa de título dos certificados.'
            }            
        }
    ) 
    }

};