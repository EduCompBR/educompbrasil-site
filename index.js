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
app.get('/', (req, res) => { res.render('home', {layout: null}) })

//EduComp 2021
app.get('/simposio/2021', (req, res) => { res.render('sobre', {layout: null, sobre: true}) })
app.get('/simposio/2021/topicos-de-interesse', (req, res) => { res.render('topicos-de-interesse', {layout: null, topicos: true}) })
app.get('/simposio/2021/sobre', (req, res) => { res.render('sobre', {layout: null, sobre: true}) })
app.get('/simposio/2021/datas', (req, res) => { res.render('datas', {layout: null, datas: true}) })
app.get('/simposio/2021/contato', (req, res) => { res.render('contato', {layout: null, contato: true}) })
app.get('/simposio/2021/programacao', (req, res) => { res.render('programacao', {layout: null, prog: true}) })
app.get('/simposio/2021/wlic', (req, res) => { res.render('wlic', {layout: null, wlic: true}) })
app.get('/simposio/2021/trabalhos', (req, res) => { res.render('trabalhos', {layout: null, trabalhos: true}) })
app.get('/simposio/2021/inscricoes', (req, res) => { res.render('inscricoes', {layout: null, inscricoes: true}) })
app.get('/simposio/2021/equipe', (req, res) => { res.render('equipe', {layout: null, equipe: true}) })
app.post('/simposio/2021/contato/email', async (req, res) => { 
    await emailServer.enviarEmail(req.body.email1, req.body.assunto1, req.body.mensagem1)
    res.redirect('/simposio/2021/contato')
})


//Worker do servidor
var porta = process.env.PORT || 3000
app.listen(porta, () => {
    console.log('App rodando na porta: ' + porta)
})