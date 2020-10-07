const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const emailServer = require('./models/emailServer')

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
app.get('/', (req, res) => { res.render('giec/index', {layout: 'giec/layout'}) })

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
    res.render('simposio/2021/pt-BR/programacao', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            prog: true,
            titulo: 'Programação'
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
    res.render('simposio/2021/pt-BR/trabalhos', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Chamada de Trabalhos'
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
            sobre: true, 
            titulo: "Home"
        }
    ) 
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