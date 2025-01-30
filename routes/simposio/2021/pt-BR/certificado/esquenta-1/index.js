const PDFDocument = require('pdfkit')
const { GoogleSpreadsheet } = require('google-spreadsheet')
const fs = require('fs')

//Esquenta 1 opcoes
exports.esquenta1CertificadoOpcoes = function (req, res) { 

    res.render('simposio/2021/pt-BR/certificados/esquenta-1-opcoes', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado',            
        }
    ) 
};

//form obter do esquenta 1
exports.esquenta1Certificado = function (req, res) { 
    res.render('simposio/2021/pt-BR/certificados/esquenta-1-form-obter', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado',
        }
    ) 
};

//gerar lista de links do esquenta 1
exports.obterEsquenta1 = async function (req, res) {
    try{
        console.log('Teste certificado')
        const doc = new GoogleSpreadsheet('1bOIjyqdNo2x5TkhNPNPid2FFD1JkQeb24R1izWilh2E')
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        let rowsParticipacao = await doc.sheetsByTitle['participacao'].getRows()
        let rowsOrganizacao = await doc.sheetsByTitle['organizacao'].getRows()
        let rowsComitePrograma = await doc.sheetsByTitle['comite_programa'].getRows()
        let rowsPalestra = await doc.sheetsByTitle['palestra'].getRows()
        let rowsSessaoTecnicaApres = await doc.sheetsByTitle['sessao-tecnica-apres'].getRows()
        let rowsSessaoTecnicaCoord = await doc.sheetsByTitle['sessao-tecnica-coord'].getRows()
        let rowsAberturaEncerramento = await doc.sheetsByTitle['abertura-encerramento'].getRows()

        let plans = []

        let participacao = {}
        let organizacao = {}
        let comite_programa = {}
        let palestra = {}
        let sessao_tecnica_apres = {}
        let sessao_tecnica_coord = {}
        let abertura_encerramento = {}

        participacao.nome = 'Participação'
        participacao.registros = []
        rowsParticipacao.forEach( (element) => {
            if (element.email === req.body.email) {
                participacao.registros.push(
                    { 
                        'email': element.email,                        
                        'atividade': 'participacao',
                        'participacao': true,
                    }
                )
            }
        })
        plans.push( participacao )
        
        organizacao.nome = 'Organização'
        organizacao.registros = []
        rowsOrganizacao.forEach( (element) => {
            if (element.email === req.body.email) {
                organizacao.registros.push(
                    { 
                        'email': element.email,
                        'funcao': element.funcao,                
                        'atividade': 'organizacao',
                        'organizacao': true,
                    }
                )
            }
        })
        plans.push( organizacao )

        comite_programa.nome = 'Comitê de Programa'
        comite_programa.registros = []
        rowsComitePrograma.forEach( (element) => {
            if (element.email === req.body.email) {
                comite_programa.registros.push(
                    { 
                        'email': element.email,                        
                        'funcao': element.funcao,                        
                        'atividade': 'comite_programa',
                        'comite_programa': true,
                    }
                )
            }
        })
        plans.push(comite_programa)

        palestra.nome = 'Palestra'
        palestra.registros = []
        rowsPalestra.forEach( (element) => {
            if (element.email === req.body.email) {
                palestra.registros.push(
                    { 
                        'email': element.email,
                        'funcao': element.funcao,
                        'titulo': element.titulo,
                        'atividade': 'palestra',
                        'palestra': true,
                    }
                )
            }
        })
        plans.push(palestra)

        sessao_tecnica_apres.nome = 'Sessão técnica - apresentação'        
        sessao_tecnica_apres.registros = []
        rowsSessaoTecnicaApres.forEach( (element) => {
            if (element.email === req.body.email) {
                sessao_tecnica_apres.registros.push(
                    { 
                        'email': element.email,                        
                        'titulo': element.titulo,                        
                        'atividade': 'sessao-tecnica-apres',
                        'sessao-tecnica-apres': true,
                    }
                )
            }
        })
        plans.push(sessao_tecnica_apres)

        sessao_tecnica_coord.nome = 'Sessão técnica - coordenação'
        sessao_tecnica_coord.registros = []
        rowsSessaoTecnicaCoord.forEach( (element) => {
            if (element.email === req.body.email) {
                sessao_tecnica_coord.registros.push(
                    { 
                        'email': element.email,                                                
                        'atividade': 'sessao-tecnica-coord',
                        'sessao-tecnica-coord': true,
                    }
                )
            }
        })
        plans.push(sessao_tecnica_coord)

        abertura_encerramento.nome = 'Abertura - Encerramento'
        abertura_encerramento.registros = []
        rowsAberturaEncerramento.forEach( (element) => {
            if (element.email === req.body.email) {
                abertura_encerramento.registros.push(
                    { 
                        'email': element.email,
                        'tipo': element.tipo,
                        'atividade': 'abertura-encerramento',
                        'abertura-encerramento': true,
                    }
                )
            }
        })
        plans.push(abertura_encerramento)

        //console.log(plans)

        res.render('simposio/2021/pt-BR/certificados/esquenta-1-obter-lista',
            {
                layout: 'simposio/2021/pt-BR/layout', 
                certificado: true,
                titulo: 'Certificado', 
                email: req.body.email,
                data: plans,
            }
        )

    } catch (error) {
        console.log(error)
        res.render('simposio/2021/pt-BR/certificados/esquenta-1-obter-lista',
                {
                    layout: 'simposio/2021/pt-BR/layout', 
                    certificado: true,
                    titulo: 'Certificado',            
                }
            )
    }

};

//obter arquivo específico de certificado
exports.obterArquivoEsquenta1 = async function (req, res) {
    try{
        console.log('Gerando arquivo específico do certificado')

        let atividade = req.body.atividade
        let email = req.body.email
        let funcao = false
        let tipo = false
        let titulo = false
        let textoBase = ''
        let nome = ''
        let codigo = ''
        //console.log(atividade, email, funcao, tipo, titulo)

        const sheets = new GoogleSpreadsheet('1bOIjyqdNo2x5TkhNPNPid2FFD1JkQeb24R1izWilh2E')
        await sheets.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })

        await sheets.loadInfo()
        let posicao = -1

        const rows = await sheets.sheetsByTitle[atividade].getRows()
        rows.forEach( (element, index) => {
            if (atividade === 'participacao') {
                if (element.email === email) {
                    posicao = index
                }
            } else if (atividade === 'organizacao') {
                funcao = req.body.funcao
                console.log(element.funcao, funcao)
                if (element.email === email && element.funcao === funcao) {
                    posicao = index
                }
            } else if (atividade === 'comite_programa') {
                funcao = req.body.funcao
                if (element.email === email && element.funcao === funcao) {
                    posicao = index
                }
            } else if (atividade === 'palestra') {
                funcao = req.body.funcao
                titulo = req.body.titulo
                if (element.email === email && element.funcao === funcao) {
                    posicao = index
                }
            } else if (atividade === 'sessao-tecnica-apres') {
                titulo = req.body.titulo
                if (element.email === email && element.titulo === titulo) {
                    posicao = index
                }
            } else if (atividade === 'sessao-tecnica-coord') {
                if (element.email === email) {
                    posicao = index
                }
            } else if (atividade === 'abertura-encerramento') {
                tipo = req.body.tipo
                if (element.email === email && element.tipo === tipo) {
                    posicao = index
                }
            }
        })

        if ( posicao !== -1 ) {
            const doc = new PDFDocument({                
                layout: 'landscape',  
                size: [540, 800],               
            })
            doc.image('resources/simposio/2021/pt-BR/modelos/esquenta.png', 0, 0, {
              fit: [800, 600],
            });
            doc.fontSize(18)
            doc.font('resources/simposio/2021/pt-BR/fonts/trebuc.ttf');

            if (rows[posicao].funcao) funcao = rows[posicao].funcao
            if (rows[posicao].titulo) titulo = rows[posicao].titulo
            if (rows[posicao].tipo) tipo = rows[posicao].tipo
            if (rows[posicao].nome_completo) nome = rows[posicao].nome_completo
            if (rows[posicao].codigo) codigo = rows[posicao].codigo
            nome = nome.toUpperCase()
            textoBase = rows[0].texto_base
            let novoTextoBase = textoBase.replace('${nome_completo}', nome)
            novoTextoBase = novoTextoBase.replace('${funcao}', funcao)
            novoTextoBase = novoTextoBase.replace('${titulo}', atividade)
            novoTextoBase = novoTextoBase.replace('${tipo}', tipo)

            //doc.text(novoTextoBase, 150, 265, {width: 600, align: 'justify', continued: true}).fontSize(8).text(`Pode ser validado em: https://www.educompbrasil.org/simposio/2021/certificados/esquenta/1/validar com o código: ${codigo}`, 150, 385, {width:600, align: 'justify'})
            doc.text(novoTextoBase, 150, 265, {width: 500, align: 'justify'})
            doc.fontSize(8)
            doc.text(`Pode ser validado em: https://www.educompbrasil.org/simposio/2021/certificados/esquenta/1/validar com o código: ${codigo}`, 150, 395, {width:500, align: 'left'})
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
        res.render('simposio/2021/pt-BR/certificados/esquenta-1-obter-lista',
            {
                layout: 'simposio/2021/pt-BR/layout', 
                certificado: true,
                titulo: 'Certificado',  
                mensagem: 'Erro ao buscar certificado. Entre em contato com a organização'
            }
        )
    }
}

//form validar do esquenta 1
exports.esquenta1FormValidar = function (req, res) { 
    res.render('simposio/2021/pt-BR/certificados/esquenta-1-form-validar', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado',            
        }
    ) 
};

//Validação do esquenta 1
exports.validarEsquenta1 = async function (req, res) {
    try{
        console.log('Teste validacao do esquenta 1')
        const doc = new GoogleSpreadsheet('1bOIjyqdNo2x5TkhNPNPid2FFD1JkQeb24R1izWilh2E')
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        let codigo = req.body.codigo
        console.log(codigo)
        let finalCodigo = codigo.substring(8, 10)
        console.log(finalCodigo)

        let atividade = ''
        const planCodigos = await doc.sheetsByTitle['codigos-limpos'].getRows()
        planCodigos.forEach( (element) => {
            console.log('Elemento e código: ', element.codigo, codigo)
            if (element.codigo === finalCodigo)
                atividade = element.titulo
        })
        
        console.log(atividade)
        console.log(finalCodigo)
        const rows = await doc.sheetsByTitle[atividade].getRows()
        //const rows = await sheet.getRows()
        var encontrado = -1
        let posicao = -1
        rows.forEach( (element, index) => {
            //console.log(element.Email)
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
            dadosMensagem.push("EVENTO: Esquenta EduComp 1")
            dadosMensagem.push("DATA: 27/03/2021")
            dadosMensagem.push(`PARTICIPANTE: ${nome}`)
            if (rows[posicao].funcao){
                dadosMensagem.push(`FUNÇÃO: ${rows[posicao].funcao} `)
            }
            if (rows[posicao].titulo){
                dadosMensagem.push(`TÍTULO: ${rows[posicao].titulo} `)
            }
            if (rows[posicao].tipo){
                dadosMensagem.push(`TIPO: ${rows[posicao].tipo} `)
            }

            res.render('simposio/2021/pt-BR/certificados/esquenta-1-validar-resultado', {
                layout: 'simposio/2021/pt-BR/layout', 
                certificado: true,
                titulo: 'Certificado', 
                dadosMensagem: dadosMensagem, 
            })
        } else {
            res.render('simposio/2021/pt-BR/certificados/esquenta-1-validar-resultado', {
                layout: 'simposio/2021/pt-BR/layout', 
                certificado: true,
                titulo: 'Certificado', 
                dadosMensagem: false,
            })
        }
    } catch (error) {
        res.render('simposio/2021/pt-BR/certificados/esquenta-1-form-validar', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado',            
        }
    ) 
    }

};

//Exibir a mensagem de resultado da validação
exports.validarEsquenta1Resultado = function (req, res) {
    let resultado = req.params.result    
    console.log(req.params.result)
    if (resultado === 'valido' ) {
        res.render('simposio/2021/pt-BR/certificados/esquenta-1-validar-resultado', 
            {
                layout: 'simposio/2021/pt-BR/layout', 
                certificado: true,
                titulo: 'Certificado',            
                result: true,
            }
        )
    } else {
        res.render('simposio/2021/pt-BR/certificados/esquenta-1-validar-resultado', 
            {
                layout: 'simposio/2021/pt-BR/layout', 
                certificado: true,
                titulo: 'Certificado',            
                result: false,
            }
        )
    }
} 

//form do esquenta 2
exports.esquenta2Certificado = function (req, res) { 
    let mensagem = true
    if (req.params.encontrado === 'encontrado') {
        mensagem = false
    }

    res.render('simposio/2021/pt-BR/certificados/esquenta-2', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado',
            encontrado: mensagem
        }
    ) 
};

//form do educomp certificado
exports.educompCertificado = function (req, res) { 
    let mensagem = true
    let validado = false
    if (req.params.encontrado === 'encontrado') {
        mensagem = false
    } else if (req.params.encontrado === 'validado') {
        validado = true
    }

    res.render('simposio/2021/pt-BR/certificados/educomp', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado',
            encontrado: mensagem
        }
    ) 
};

//gerar pdf do certificado do esquenta 2 ou redirecionar para página
exports.obterEsquenta2 = async function (req, res) {
    try{
        console.log('Teste certificado')
        const doc = new GoogleSpreadsheet('1bOIjyqdNo2x5TkhNPNPid2FFD1JkQeb24R1izWilh2E')
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        const rows = await sheet.getRows()
        let encontrado = -1
        let posicao = -1
        console.log(req.body.email)
        rows.forEach( (element, index) => {
            //console.log(element.Email)
            if (element.Email === req.body.email){
                encontrado = 1
                posicao = index
            }
        })
        if (posicao !== -1) {
            console.log('Usuário encontrado, gerando certificado...')
            const doc = new PDFDocument({                
                layout: 'landscape', 
                size: [540, 800],               
            })
            doc.image('./certificado-esquenta.png', 0, 0,{
                fit: [800, 600],

            })
            doc.fontSize(18)
            doc.font('./trebuc.ttf')
            let nome = rows[posicao].Nome_completo
            let codigo = rows[posicao].Codigo
            nome = nome.toUpperCase()
            doc.text(`Certificamos para os devidos fins que ${nome} participou do evento preparatório Esquenta EduComp (Simpósio Brasileiro de Educação em Computação) no dia 27 de fevereiro de 2021 com a carga horária de 03 (três) horas.`, 150, 275, {width: 500, align: 'justify', continued: true}).fontSize(10).text(`Pode ser verificado em: educompbrasil.org/simposio/2021/certificados com o código: ${codigo}`, 150, 375, {width: 600, align: 'justify', fontSize: 10})
            doc.end()
            doc.pipe(fs.createWriteStream('certificado.pdf')).on('finish', () => {
                res.download('./certificado.pdf')
            })    
        } else {
            res.redirect('/simposio/2021/certificados/esquenta/1/nao-encontrado')
            //req.flash('message', 'Email não encontrado na base!')

        }
    } catch (error) {
        console.log(error)
    }

};

//gerar pdf do certificado Educomp ou redirecionar para página
exports.obterEducomp = async function (req, res) {
    try{
        console.log('Teste certificado')
        const doc = new GoogleSpreadsheet('1bOIjyqdNo2x5TkhNPNPid2FFD1JkQeb24R1izWilh2E')
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        const rows = await sheet.getRows()
        let encontrado = -1
        let posicao = -1
        console.log(req.body.email)
        rows.forEach( (element, index) => {
            //console.log(element.Email)
            if (element.Email === req.body.email){
                encontrado = 1
                posicao = index
            }
        })
        if (posicao !== -1) {
            console.log('Usuário encontrado, gerando certificado...')
            const doc = new PDFDocument({                
                layout: 'landscape', 
                size: [540, 800],               
            })
            doc.image('./certificado-esquenta.png', 0, 0,{
                fit: [800, 600],

            })
            doc.fontSize(18)
            doc.font('./trebuc.ttf')
            let nome = rows[posicao].Nome_completo
            let codigo = rows[posicao].Codigo
            nome = nome.toUpperCase()
            doc.text(`Certificamos para os devidos fins que ${nome} participou do evento preparatório Esquenta EduComp (Simpósio Brasileiro de Educação em Computação) no dia 27 de fevereiro de 2021 com a carga horária de 03 (três) horas.`, 150, 275, {width: 500, align: 'justify', continued: true}).fontSize(10).text(`Pode ser verificado em: educompbrasil.org/simposio/2021/certificados com o código: ${codigo}`, 150, 375, {width: 600, align: 'justify', fontSize: 10})
            doc.end()
            doc.pipe(fs.createWriteStream('certificado.pdf')).on('finish', () => {
                res.download('./certificado.pdf')
            })    
        } else {
            res.redirect('/simposio/2021/certificados/esquenta/1/nao-encontrado')
        }
    } catch (error) {
        console.log(error)
    }

};

//Validação do esquenta 2
exports.validarEsquenta2 = async function (req, res) {
    try{
        console.log('Teste validacao')
        const doc = new GoogleSpreadsheet('1bOIjyqdNo2x5TkhNPNPid2FFD1JkQeb24R1izWilh2E')
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        const rows = await sheet.getRows()
        let encontrado = -1
        let posicao = -1
        console.log(req.body.codigo)
        rows.forEach( (element, index) => {
            //console.log(element.Email)
            if (element.Codigo === req.body.codigo){
                encontrado = 1
                posicao = index
            }
        })
        if (posicao !== -1) {
            console.log('Usuário encontrado, validando...')
            let nome = rows[posicao].Nome_completo
            let codigo = rows[posicao].Codigo   
            res.redirect('/simposio/2021/certificados/esquenta/1/validacao/valido')
        } else {
            res.redirect('/simposio/2021/certificados/esquenta/1/nao-encontrado')
            //req.flash('message', 'Email não encontrado na base!')

        }
    } catch (error) {
        console.log(error)
    }

};

exports.validarEducomp = async function (req, res) {
    try{
        console.log('Teste validacao')
        const doc = new GoogleSpreadsheet('1bOIjyqdNo2x5TkhNPNPid2FFD1JkQeb24R1izWilh2E')
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        const rows = await sheet.getRows()
        let encontrado = -1
        let posicao = -1
        console.log(req.body.codigo)
        rows.forEach( (element, index) => {
            //console.log(element.Email)
            if (element.Codigo === req.body.codigo){
                encontrado = 1
                posicao = index
            }
        })
        if (posicao !== -1) {
            console.log('Usuário encontrado, validando...')
            let nome = rows[posicao].Nome_completo
            let codigo = rows[posicao].Codigo   
            res.redirect('/simposio/2021/certificados/esquenta/1/validacao/valido')
        } else {
            res.redirect('/simposio/2021/certificados/esquenta/1/nao-encontrado')
            //req.flash('message', 'Email não encontrado na base!')

        }
    } catch (error) {
        console.log(error)
    }

};

