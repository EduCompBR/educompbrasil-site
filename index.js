const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const emailServer = require('./models/emailServer')
const PDFDocument = require('pdfkit')
const { GoogleSpreadsheet } = require('google-spreadsheet')
const creds = require('./educomp-novo-certificado.json')
const fs = require('fs')

//Engine View
app.engine('handlebars', handlebars({defaultLayout: 'main'}) )

//Sets
app.set('view engine', 'handlebars')

//Uses
app.use(express.static(__dirname + '/public'))
//app.use(methodOverride('_method', {methods: ['GET', 'POST', 'PUT', 'DELETE']} ))
//app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({extended: false}))

//GIEC
app.get('/', (req, res) => { 
    res.render('giec/index', 
        {
            layout: 'giec/layout',
            principal: true,
            titulo: "Principal"
        }
    ) 
})
app.get('/sobre', (req, res) => { 
    res.render('giec/sobre', 
        {
            layout: 'giec/layout',
            sobre: true,
            titulo: "Sobre"
        }
    ) 
})

//EduComp 2021 - pt-BR
app.get('/simposio/2021', (req, res) => { 
    res.render('simposio/2021/pt-BR/sobre', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            sobre: true, 
            titulo: "Principal"
        }
    ) 
})
app.get('/simposio/2021/topicos-de-interesse', (req, res) => { 
    res.render('simposio/2021/pt-BR/topicos-de-interesse', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            topicos: true,
            titulo: "Tópicos de Interesse"
        }
    ) 
})
app.get('/simposio/2021/sobre', (req, res) => { 
    res.render('simposio/2021/pt-BR/sobre', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            sobre: true,
            titulo: "Principal"
        }
    ) 
})
app.get('/simposio/2021/datas', (req, res) => { 
    res.render('simposio/2021/pt-BR/datas', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            datas: true,
            titulo: 'Datas Importantes'
        }
    ) 
})
app.get('/simposio/2021/contato', (req, res) => { 
    res.render('simposio/2021/pt-BR/contato', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            contato: true,
            titulo: "Contato"
        }
    ) 
})
app.get('/simposio/2021/programacao', (req, res) => { 
    res.render('simposio/2021/pt-BR/programacao/index', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            prog: true,
            titulo: 'Programação'
        }
    ) 
})
app.get('/simposio/2021/programacao/esquenta/1', (req, res) => { 
    res.render('simposio/2021/pt-BR/programacao/esquenta/primeiro', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            prog: true,
            titulo: 'Esquenta'
        }
    ) 
})
app.get('/simposio/2021/forlic', (req, res) => { 
    res.render('simposio/2021/pt-BR/forlic', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            forlic: true,
            titulo: 'ForLic'
        }
    ) 
})
app.get('/simposio/2021/trabalhos', (req, res) => { 
    res.render('simposio/2021/pt-BR/trabalhos/chamada', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Chamada de Trabalhos'
        }
    ) 
})
app.get('/simposio/2021/trabalhos/aceitos', (req, res) => { 
    res.render('simposio/2021/pt-BR/trabalhos/aceitos', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Trabalhos Aceitos'
        }
    ) 
})
app.get('/simposio/2021/inscricoes', (req, res) => { 
    res.render('simposio/2021/pt-BR/inscricoes', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            inscricoes: true,
            titulo: 'Inscrições'
        }
    ) 
})
app.get('/simposio/2021/equipe', (req, res) => { 
    res.render('simposio/2021/pt-BR/equipe', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            equipe: true,
            titulo: 'Equipe'
        }
    ) 
})
app.get('/simposio/2021/comite-programa', (req, res) => { 
    res.render('simposio/2021/pt-BR/comite-programa', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            equipe: true,
            titulo: 'Comitê de Programa'
        }
    ) 
})
//critérios de revisão
app.get('/simposio/2021/trabalhos/criterios/trilha-1/ensaios', (req, res) => { 
    res.render('simposio/2021/pt-BR/criterios-de-revisao/criterio-trilha1', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 1 - Ensaios)'
        }
    ) 
})
app.get('/simposio/2021/trabalhos/criterios/trilha-1/artigos', (req, res) => { 
    res.render('simposio/2021/pt-BR/criterios-de-revisao/criterio-trilha1-artigos', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 1 - Artigos de Pesquisa)'
        }
    ) 
})
app.get('/simposio/2021/trabalhos/criterios/trilha-2', (req, res) => { 
    res.render('simposio/2021/pt-BR/criterios-de-revisao/criterio-trilha2', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 2)'
        }
    ) 
})
app.get('/simposio/2021/trabalhos/criterios/trilha-3', (req, res) => { 
    res.render('simposio/2021/pt-BR/criterios-de-revisao/criterio-trilha3', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 3)'
        }
    ) 
})
app.get('/simposio/2021/trabalhos/criterios/trilha-4', (req, res) => { 
    res.render('simposio/2021/pt-BR/criterios-de-revisao/criterio-trilha4', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 4)'
        }
    ) 
})

//EduComp 2021 - en-US
app.get('/en-US/symposium/2021/', (req, res) => { 
    res.render('simposio/2021/en-US/sobre', 
        {
            layout: 'simposio/2021/en-US/layout', 
            about: true, 
            titulo: "Home"
        }
    ) 
})
app.get('/en-US/symposium/2021/about', (req, res) => { 
    res.render('simposio/2021/en-US/sobre', 
        {
            layout: 'simposio/2021/en-US/layout', 
            about: true, 
            titulo: "Home"
        }
    ) 
})
app.get('/en-US/symposium/2021/topics-of-interest', (req, res) => { 
    res.render('simposio/2021/en-US/topicos-de-interesse', 
        {
            layout: 'simposio/2021/en-US/layout', 
            topics: true, 
            titulo: "Topics of Interest"
        }
    ) 
})
app.get('/en-US/symposium/2021/call-for-contributions', (req, res) => { 
    res.render('simposio/2021/en-US/trabalhos', 
        {
            layout: 'simposio/2021/en-US/layout', 
            papers: true, 
            titulo: "Call for Contributions"
        }
    ) 
})
app.get('/en-US/symposium/2021/dates', (req, res) => { 
    res.render('simposio/2021/en-US/datas', 
        {
            layout: 'simposio/2021/en-US/layout', 
            dates: true,
            titulo: 'Dates'
        }
    ) 
})
app.get('/en-US/symposium/2021/registrations', (req, res) => { 
    res.render('simposio/2021/en-US/inscricoes', 
        {
            layout: 'simposio/2021/en-US/layout', 
            registrations: true,
            titulo: 'Registrations'
        }
    ) 
})
app.get('/en-US/symposium/2021/program', (req, res) => { 
    res.render('simposio/2021/en-US/programacao', 
        {
            layout: 'simposio/2021/en-US/layout', 
            shedule: true,
            titulo: 'Program'
        }
    ) 
})
app.get('/en-US/symposium/2021/team', (req, res) => { 
    res.render('simposio/2021/en-US/equipe', 
        {
            layout: 'simposio/2021/en-US/layout', 
            team: true,
            titulo: 'Team'
        }
    ) 
})
app.get('/en-US/symposium/2021/program-committee', (req, res) => { 
    res.render('simposio/2021/en-US/comite-programa', 
        {
            layout: 'simposio/2021/en-US/layout', 
            team: true,
            titulo: 'Program Committee'
        }
    ) 
})
app.get('/en-US/symposium/2021/contact', (req, res) => { 
    res.render('simposio/2021/en-US/contato', 
        {
            layout: 'simposio/2021/en-US/layout', 
            contact: true,
            titulo: 'Contact'
        }
    ) 
})
app.get('/en-US/symposium/2021/forlic', (req, res) => { 
    res.render('simposio/2021/en-US/forlic', 
        {
            layout: 'simposio/2021/en-US/layout', 
            forlic: true,
            titulo: 'ForLic'
        }
    ) 
})

app.get('/simposio/2021/certificado', (req, res) => { 
    res.render('simposio/2021/pt-BR/certificado', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado'
        }
    ) 
})

app.post('/simposio/2021/certificado/obter', async (req, res) => {
    try{
        console.log('Teste certificado')
        const doc = new GoogleSpreadsheet('1xiq7o8bwgiXzkBQR3Vdja8vcFDvSRBe1cFY1FAiTiPQ')
        await doc.useServiceAccountAuth({
            client_email: creds.client_email,
            private_key: creds.private_key.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        const rows = await sheet.getRows()
        let encontrado = -1
        let posicao = -1
        rows.forEach( (element, index) => {
            if (element.Email === req.body.email){
                encontrado = 1
                posicao = index
            }
        })
        console.log(req.body.email)
        console.log(encontrado)
        console.log(rows[posicao].Nome)
        if (posicao !== -1) {
            const doc = new PDFDocument()
            doc.text('Some text with an embedded font!', 100, 100)
            doc.end()
            doc.pipe(fs.createWriteStream('certificado.pdf')).on('finish', () => {
                res.download('./certificado.pdf')
            })    
        } else {
            res.redirect('/simposio/2021/contato')
        }
    } catch (error) {
        console.log(error)
    }

})




//Envio de email
app.post('/simposio/2021/contato/email', async (req, res) => { 
    await emailServer.enviarEmail(req.body.email1, req.body.assunto1, req.body.mensagem1)
    res.redirect('/simposio/2021/contato')
})


//Worker do servidor
var porta = process.env.PORT || 3000
app.listen(porta, () => {
    console.log('App rodando na porta: ' + porta)
})