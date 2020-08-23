const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const emailServer = require('./models/emailServer')
const emailSendGrid = require('./models/emailSendGrid')
const emailGmail = require('./models/emailGmail')
const session = require('express-session')


var Recaptcha = require('express-recaptcha').RecaptchaV2;
var recaptcha = new Recaptcha('6LeNA8AZAAAAAJmY-6NdzECm6ZmT1l7HyGDSbIXP', '6LeNA8AZAAAAADLN57e16kUPNaNmKWPPzRaAPE-N');

const fetch = require('node-fetch')
const { stringify } = require('querystring');
const e = require('express')
const { response } = require('express')

//Engine View
app.engine('handlebars', handlebars({defaultLayout: 'main'}) )

//Sets
app.set('view engine', 'handlebars')

//Uses 
app.use(express.static(__dirname + '/public'))
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//GIEC
app.get('/', (req, res) => { res.render('giec/index', {layout: 'giec/layout'}) })

//EduComp 2021
<<<<<<< HEAD
app.get('/simposio/2021', (req, res) => { res.render('sobre', {layout: null, sobre: true}) })
app.get('/simposio/2021/topicos-de-interesse', (req, res) => { res.render('topicos-de-interesse', {layout: null, topicos: true}) })
app.get('/simposio/2021/sobre', (req, res) => { res.render('sobre', {layout: null, sobre: true}) })
app.get('/simposio/2021/datas', (req, res) => { res.render('datas', {layout: null, datas: true}) })
//app.get('/simposio/2021/contato', (req, res) => { res.render('contato', {layout: null, contato: true}) })
app.get('/simposio/2021/programacao', (req, res) => { res.render('programacao', {layout: null, prog: true}) })
app.get('/simposio/2021/wlic', (req, res) => { res.render('wlic', {layout: null, wlic: true}) })
app.get('/simposio/2021/trabalhos', (req, res) => { res.render('trabalhos', {layout: null, trabalhos: true}) })
app.get('/simposio/2021/inscricoes', (req, res) => { res.render('inscricoes', {layout: null, inscricoes: true}) })
app.get('/simposio/2021/equipe', (req, res) => { res.render('equipe', {layout: null, equipe: true}) })
// app.post('/simposio/2021/contato/email', async (req, res) => { 


app.get('/simposio/2021/contato', recaptcha.middleware.renderWith({'hl':'fr'}), function(req, res){
    res.render('contato', { layout: null, contato: true, captcha:res.recaptcha });
});
  
app.post('/email2', recaptcha.middleware.verify, async function(req, res){
  if (!req.recaptcha.error) {
      //return res.json({ success: true, msg: 'Captcha passed' });
      console.log(req.body)
      await emailServer.enviarEmail(req.body.email1, req.body.assunto1, req.body.mensagem1)
      req.session.retorno = 'Email enviado com sucesso!'
      res.redirect('/simposio/2021/contato')
      //res.json({'retorno': 'Email enviado com sucesso', success: true})
      //res.render('contato', { layout: null, contato: true, captcha:res.recaptcha, 'retorno': 'Enviado com sucesso' })
  } else {
      //return res.json({ success: false, msg: 'Failed captcha verification' })
      res.redirect('/simposio/2021/contato')
  }
=======
app.get('/simposio/2021', (req, res) => { 
    res.render('sobre', 
        {
            layout: 'simposio/2021/layout', 
            sobre: true, 
            titulo: "Principal"
        }
    ) 
})
app.get('/simposio/2021/topicos-de-interesse', (req, res) => { 
    res.render('topicos-de-interesse', 
        {
            layout: 'simposio/2021/layout', 
            topicos: true,
            titulo: "Tópicos de Interesse"
        }
    ) 
})
app.get('/simposio/2021/sobre', (req, res) => { 
    res.render('sobre', 
        {
            layout: 'simposio/2021/layout', 
            sobre: true,
            titulo: "Principal"
        }
    ) 
})
app.get('/simposio/2021/datas', (req, res) => { 
    res.render('datas', 
        {
            layout: 'simposio/2021/layout', 
            datas: true,
            titulo: 'Datas Importantes'
        }
    ) 
})
app.get('/simposio/2021/contato', (req, res) => { 
    res.render('contato', 
        {
            layout: 'simposio/2021/layout', 
            contato: true,
            titulo: "Contato"
        }
    ) 
})
app.get('/simposio/2021/programacao', (req, res) => { 
    res.render('programacao', 
        {
            layout: 'simposio/2021/layout', 
            prog: true,
            titulo: 'Programação'
        }
    ) 
})
app.get('/simposio/2021/wlic', (req, res) => { 
    res.render('wlic', 
        {
            layout: 'simposio/2021/layout', 
            wlic: true,
            titulo: 'WLIC'
        }
    ) 
})
app.get('/simposio/2021/trabalhos', (req, res) => { 
    res.render('trabalhos', 
        {
            layout: 'simposio/2021/layout', 
            trabalhos: true,
            titulo: 'Chamada de Trabalhos'
        }
    ) 
})
app.get('/simposio/2021/inscricoes', (req, res) => { 
    res.render('inscricoes', 
        {
            layout: 'simposio/2021/layout', 
            inscricoes: true,
            titulo: 'Inscrições'
        }
    ) 
})
app.get('/simposio/2021/equipe', (req, res) => { 
    res.render('equipe', 
        {
            layout: 'simposio/2021/layout', 
            equipe: true,
            titulo: 'Equipe'
        }
    ) 
})
app.post('/simposio/2021/contato/email', async (req, res) => { 
    await emailServer.enviarEmail(req.body.email1, req.body.assunto1, req.body.mensagem1)
    res.redirect('/simposio/2021/contato')
>>>>>>> 70c653ae72d51273ee4f806bc09f7fd45aaf9373
})


//Worker do servidor
var porta = process.env.PORT || 3000
app.listen(porta, () => {
    console.log('App rodando na porta: ' + porta)
})