const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const emailServer = require('./models/emailServer')
const PDFDocument = require('pdfkit')
const { GoogleSpreadsheet } = require('google-spreadsheet')
//const creds = require('./educomp-novo-certificado.json')
const fs = require('fs')

//Routes
var educomp_2021_main = require('./routes/simposio/2021/pt-BR/main');
var educomp_2021_trabalhos = require('./routes/simposio/2021/pt-BR/trabalhos');
var giec_main = require('./routes/giec/main');
var educomp_2021_programacao = require('./routes/simposio/2021/pt-BR/programacao');
var educomp_2021_trabalhos = require('./routes/simposio/2021/pt-BR/trabalhos');
var educomp_2021_equipe = require('./routes/simposio/2021/pt-BR/equipe');
var educomp_2021_criterios = require('./routes/simposio/2021/pt-BR/criterios');
var educomp_2021_certificados = require('./routes/simposio/2021/pt-BR/certificado/esquenta-1/index');
var educomp_2021_certificados_educomp = require('./routes/simposio/2021/pt-BR/certificado/educomp/index');
var giec_quem_somos = require('./routes/giec/quem_somos');

//Routes en-US
var educomp_2021_en_us_main = require('./routes/simposio/2021/en-US/main');

//Engine View
app.engine('handlebars', handlebars({defaultLayout: 'main'}) )

//Sets
app.set('view engine', 'handlebars')

//Uses
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))

//GIEC
app.get('/', giec_main.index)
app.get('/eventos', giec_main.eventos)
app.get('/quem-somos/comite-gestor', giec_quem_somos.comite_gestor)
app.get('/quem-somos/membros', giec_quem_somos.membros)
app.get('/documentos', giec_main.documentos)

//EduComp 2021 - pt-BR
app.get('/simposio/2021', educomp_2021_main.index)
app.get('/simposio/2021/sobre', educomp_2021_main.sobre)
app.get('/simposio/2021/datas', educomp_2021_main.datas)
app.get('/simposio/2021/contato', educomp_2021_main.contato)
app.get('/simposio/2021/inscricoes', educomp_2021_main.inscricoes)
app.get('/simposio/2021/forlic', educomp_2021_main.forlic)

app.get('/simposio/2021/programacao', educomp_2021_programacao.programacao)
app.get('/simposio/2021/programacao/esquenta/1', educomp_2021_programacao.esquenta_1)
app.get('/simposio/2021/programacao/esquenta/2', educomp_2021_programacao.esquenta_2)

app.get('/simposio/2021/trabalhos', educomp_2021_trabalhos.chamado)
app.get('/simposio/2021/trabalhos/aceitos', educomp_2021_trabalhos.aceitos)
app.get('/simposio/2021/topicos-de-interesse', educomp_2021_trabalhos.topicos)
app.get('/simposio/2021/equipe', educomp_2021_equipe.comissao_organizadora)
app.get('/simposio/2021/comite-programa', educomp_2021_equipe.comite_programa)

//critérios de revisão
app.get('/simposio/2021/trabalhos/criterios/trilha-1/ensaios', educomp_2021_criterios.ensaios)
app.get('/simposio/2021/trabalhos/criterios/trilha-1/artigos', educomp_2021_criterios.artigos)
app.get('/simposio/2021/trabalhos/criterios/trilha-2', educomp_2021_criterios.trilha2)
app.get('/simposio/2021/trabalhos/criterios/trilha-3', educomp_2021_criterios.trilha3)
app.get('/simposio/2021/trabalhos/criterios/trilha-4', educomp_2021_criterios.trilha4)
app.get('/simposio/2021/trabalhos/criterios/lab-ideias', educomp_2021_criterios.labideias)

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

app.get('/en-US/symposium/2021/about', educomp_2021_en_us_main.about)
app.get('/en-US/symposium/2021/topics-of-interest', educomp_2021_en_us_main.topics)
app.get('/en-US/symposium/2021/call-for-contributions', educomp_2021_en_us_main.contributors)
app.get('/en-US/symposium/2021/dates', educomp_2021_en_us_main.dates)
app.get('/en-US/symposium/2021/registrations', educomp_2021_en_us_main.incricoes)
app.get('/en-US/symposium/2021/program', educomp_2021_en_us_main.program)
app.get('/en-US/symposium/2021/team', educomp_2021_en_us_main.team)
app.get('/en-US/symposium/2021/program-committee', educomp_2021_en_us_main.committee)
app.get('/en-US/symposium/2021/contact', educomp_2021_en_us_main.contact)
app.get('/en-US/symposium/2021/forlic', educomp_2021_en_us_main.forlic)

app.get('/simposio/2021/certificados/esquenta/1', educomp_2021_certificados.esquenta1CertificadoOpcoes)
app.get('/simposio/2021/certificados/esquenta/1/obter', educomp_2021_certificados.esquenta1Certificado)
app.post('/simposio/2021/certificados/esquenta/1/obter', educomp_2021_certificados.obterEsquenta1)
app.post('/simposio/2021/certificados/esquenta/1/obter/arquivo', educomp_2021_certificados.obterArquivoEsquenta1)
app.get('/simposio/2021/certificados/esquenta/1/validar', educomp_2021_certificados.esquenta1FormValidar)
app.post('/simposio/2021/certificados/esquenta/1/validar', educomp_2021_certificados.validarEsquenta1)
app.get('/simposio/2021/certificados/esquenta/1/resultado/:result', educomp_2021_certificados.validarEsquenta1Resultado)

// app.get('/simposio/2021/certificados/esquenta/2/:encontrado', educomp_2021_certificados.esquenta2Certificado)
// app.get('/simposio/2021/certificados/educomp/:encontrado', educomp_2021_certificados.educompCertificado)
// app.post('/simposio/2021/certificados/esquenta/2/obter', educomp_2021_certificados.obterEsquenta2)
// app.post('/simposio/2021/certificados/educomp/obter', educomp_2021_certificados.obterEducomp)
// app.post('/simposio/2021/certificados/esquenta/2/validar', educomp_2021_certificados.validarEsquenta2)
// app.post('/simposio/2021/certificados/educomp/validar', educomp_2021_certificados.validarEducomp)

//Certificados educomp
app.get('/simposio/2021/certificados/educomp', educomp_2021_certificados_educomp.educompCertificadoOpcoes)
app.get('/simposio/2021/certificados/educomp/obter', educomp_2021_certificados_educomp.educompCertificado)
app.post('/simposio/2021/certificados/educomp/obter', educomp_2021_certificados_educomp.obterEducomp)
app.post('/simposio/2021/certificados/educomp/obter/arquivo', educomp_2021_certificados_educomp.obterArquivoEducomp)
app.get('/simposio/2021/certificados/educomp/validar', educomp_2021_certificados_educomp.educompFormValidar)
app.post('/simposio/2021/certificados/educomp/validar', educomp_2021_certificados_educomp.validarEducomp)


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