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

//gerar pdf esquenta 1
exports.obterEsquenta1 = async function (req, res) {
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
            doc.text(`Certificamos para os devidos fins que ${nome} participou do evento preparatório Esquenta EduComp (Simpósio Brasileiro de Educação em Computação) no dia 27 de fevereiro de 2021 com a carga horária de 03 (três) horas.`, 150, 275, {width: 500, align: 'justify', continued: true}).fontSize(10).text(`Pode ser verificado em: https://www.educompbrasil.org/simposio/2021/certificados/esquenta/1/formvalidar com o código: ${codigo}`, 150, 375, {width: 600, align: 'justify'})
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
            res.redirect('/simposio/2021/certificados/esquenta/1/resultado/valido')
        } else {
            res.redirect('/simposio/2021/certificados/esquenta/1/resultado/naovalido')
        }
    } catch (error) {
        console.log(error)
    }

};

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
        )} else {
        res.render('simposio/2021/pt-BR/certificados/esquenta-1-form-validar', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado',            
            result: false,
        }
        )}
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

