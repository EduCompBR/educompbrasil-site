const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

//Engine View
app.engine('handlebars', handlebars({defaultLayout: 'main'}) )

//Sets
app.set('view engine', 'handlebars')

//Uses
app.use(express.static(__dirname + '/public'))
//app.use(methodOverride('_method', {methods: ['GET', 'POST', 'PUT', 'DELETE']} ))
//app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({extended: false}))

//Rota principal
app.get('/', (req, res) => { res.render('index', {layout: null}) })

//Worker do servidor
var porta = process.env.PORT || 3000
app.listen(porta, () => {
    console.log('App rodando na porta: ' + porta)
})