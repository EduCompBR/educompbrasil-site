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

//Educomp 2021
var educomp_2021_main = require('./routes/simposio/2021/pt-BR/main');
var educomp_2021_trabalhos = require('./routes/simposio/2021/pt-BR/trabalhos');
var giec_main = require('./routes/giec/main');
var educomp_2021_programacao = require('./routes/simposio/2021/pt-BR/programacao');
var educomp_2021_trabalhos = require('./routes/simposio/2021/pt-BR/trabalhos');
var educomp_2021_equipe = require('./routes/simposio/2021/pt-BR/equipe');
var educomp_2021_criterios = require('./routes/simposio/2021/pt-BR/criterios');
var educomp_2021_certificados = require('./routes/simposio/2021/pt-BR/certificado/esquenta-1/index');
var educomp_2021_certificados_educomp = require('./routes/simposio/2021/pt-BR/certificado/educomp/index');

var educomp_2021_en_us_main = require('./routes/simposio/2021/en-US/main'); //Routes en-US

//Educomp 2022
var educomp_2022_main = require('./routes/simposio/2022/pt-BR/main');
var educomp_2022_trabalhos = require('./routes/simposio/2022/pt-BR/trabalhos');
var educomp_2022_criterios = require('./routes/simposio/2022/pt-BR/criterios');
var educomp_2022_programacao = require('./routes/simposio/2022/pt-BR/programacao');
var educomp_2022_equipe = require('./routes/simposio/2022/pt-BR/equipe');
var educomp_2022_certificados_educomp = require('./routes/simposio/2022/pt-BR/certificado/educomp');
var educomp_2022_certificados_esquenta_1 = require('./routes/simposio/2022/pt-BR/certificado/esquenta-1');
var educomp_2022_certificados_esquenta_2 = require('./routes/simposio/2022/pt-BR/certificado/esquenta-2');

//Educomp 2023
var educomp_2023_main = require('./routes/simposio/2023/pt-BR/main');
var educomp_2023_equipe = require('./routes/simposio/2023/pt-BR/equipe');
var educomp_2023_trabalhos = require('./routes/simposio/2023/pt-BR/trabalhos');
var educomp_2023_criterios = require('./routes/simposio/2023/pt-BR/criterios');
var educomp_2023_programacao = require('./routes/simposio/2023/pt-BR/programacao');
var educomp_2023_certificados_educomp = require('./routes/simposio/2023/pt-BR/certificado/educomp');
var educomp_2023_certificados_esquenta_1 = require('./routes/simposio/2023/pt-BR/certificado/esquenta-1');
var educomp_2023_certificados_esquenta_2 = require('./routes/simposio/2023/pt-BR/certificado/esquenta-2');

//Educomp 2024
var educomp_2024_main = require('./routes/simposio/2024/pt-BR/main');
var educomp_2024_equipe = require('./routes/simposio/2024/pt-BR/equipe');
var educomp_2024_trabalhos = require('./routes/simposio/2024/pt-BR/trabalhos');
var educomp_2024_criterios = require('./routes/simposio/2024/pt-BR/criterios');
var educomp_2024_programacao = require('./routes/simposio/2024/pt-BR/programacao');
var educomp_2024_certificados_esquenta_1 = require('./routes/simposio/2024/pt-BR/certificado/esquenta-1');
var educomp_2024_certificados_esquenta_2 = require('./routes/simposio/2024/pt-BR/certificado/esquenta-2');
var educomp_2024_certificados_educomp = require('./routes/simposio/2024/pt-BR/certificado/educomp');

//Educomp 2025
var educomp_2025_principal = require('./routes/simposio/2025/educomp/pt-BR/principal');
var educomp_2025_trabalhos = require('./routes/simposio/2025/educomp/pt-BR/trabalhos');
// var educomp_2025_equipe = require('./routes/simposio/2025/pt-BR/equipe');

//sbceb 2025
var eb_2025_principal = require('./routes/simposio/2025/eb/pt-BR/principal');

//Giec

var giec_quem_somos = require('./routes/giec/quem_somos');

//Engine View
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))

//Sets
app.set('view engine', 'handlebars')

//Uses
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))

//GIEC
app.get('/', giec_main.index)
app.get('/eventos', giec_main.eventos)
app.get('/simposio', educomp_2024_main.index)
app.get('/quem-somos/comite-gestor', giec_quem_somos.comite_gestor)
app.get('/quem-somos/membros', giec_quem_somos.membros)
app.get('/quem-somos/gts', giec_quem_somos.gts)
app.get('/documentos', giec_main.documentos)
app.get('/documentos/modelos/proposta-sede-educomp', giec_main.documentos_modelo_educomp)

//EduComp 2025 - pt-BR
app.get('/simposio/2025', educomp_2025_principal.index);
app.get('/simposio/2025/educomp', educomp_2025_principal.index)
app.get('/simposio/2025/educomp/principal/sobre-educomp', educomp_2025_principal.sobre_educomp)
app.get('/simposio/2025/educomp/principal/sobre-sbc', educomp_2025_principal.sobre_sbc)
app.get('/simposio/2025/educomp/principal/edicoes-anteriores', educomp_2025_principal.edicoes_anteriores)
app.get('/simposio/2025/educomp/trabalhos/topicos-de-interesse', educomp_2025_trabalhos.topicos_interesse)
app.get('/simposio/2025/educomp/trabalhos/artigos-completos', educomp_2025_trabalhos.artigos_completos)
app.get('/simposio/2025/educomp/trabalhos/criterios/trilha-1', educomp_2025_trabalhos.criterios_trilha1)
app.get('/simposio/2025/educomp/trabalhos/criterios/trilha-2', educomp_2025_trabalhos.criterios_trilha2)
app.get('/simposio/2025/educomp/trabalhos/criterios/trilha-3', educomp_2025_trabalhos.criterios_trilha3)
app.get('/simposio/2025/educomp/trabalhos/criterios/trilha-4', educomp_2025_trabalhos.criterios_trilha4)
app.get('/simposio/2025/educomp/trabalhos/criterios/trilha-5', educomp_2025_trabalhos.criterios_trilha5)

// app.get('/simposio/2025/equipe/comissao-organizadora', educomp_2025_equipe.comissao_organizadora)
// app.get('/simposio/2025/equipe/comite-programa', educomp_2025_equipe.comite_programa)
// app.get('/simposio/2025/equipe/comite-diretivo', educomp_2025_equipe.comite_diretivo)
// app.get('/simposio/2025/equipe/comissao-especial', educomp_2025_equipe.comissao_especial)



//sbc-eb 2025
app.get('/simposio/2025/eb', eb_2025_principal.index);

//EduComp 2024 - pt-BR
app.get('/simposio/2024', educomp_2024_main.index)
app.get('/simposio/2024/sobre', educomp_2024_main.sobre)
app.get('/simposio/2024/sobre-sbc', educomp_2024_main.sobre_sbc)
app.get('/simposio/2024/certificados', educomp_2024_main.certificados)

app.get('/simposio/2024/datas', educomp_2024_main.datas)
app.get('/simposio/2024/programacao/educomp', educomp_2024_programacao.programacao)

app.get('/simposio/2024/programacao/educomp/manha', educomp_2024_programacao.programacao_manha)
app.get('/simposio/2024/programacao/educomp/tarde', educomp_2024_programacao.programacao_tarde)
app.get('/simposio/2024/programacao/esquenta/1', educomp_2024_programacao.esquenta_1)
app.get('/simposio/2024/programacao/esquenta/2', educomp_2024_programacao.esquenta_2)


app.get('/simposio/2024/forlic', educomp_2024_main.forlic)
//app.get('/simposio/2023/inscricoes', educomp_2023_main.inscricoes)

app.get('/simposio/2024/trabalhos/topicos-de-interesse', educomp_2024_trabalhos.topicos)
app.get('/simposio/2024/trabalhos/chamada', educomp_2024_trabalhos.chamado)
app.get('/simposio/2024/trabalhos/minicursos', educomp_2024_trabalhos.minicursos)
app.get('/simposio/2024/trabalhos/lab-ideias', educomp_2024_trabalhos.lab_ideias)
app.get('/simposio/2024/trabalhos/wtd', educomp_2024_trabalhos.wtd)
app.get('/simposio/2024/trabalhos/ctd', educomp_2024_trabalhos.ctd)
app.get('/simposio/2024/trabalhos/mesas', educomp_2024_trabalhos.mesas)
app.get('/simposio/2024/trabalhos/livros', educomp_2024_trabalhos.livros)
app.get('/simposio/2024/trabalhos/aceitos', educomp_2024_trabalhos.aceitos)
app.get('/simposio/2024/trabalhos/orientacoes', educomp_2024_trabalhos.orientacoes)
app.get('/simposio/2024/trabalhos/aceitos-orientacoes', educomp_2024_trabalhos.aceitos_orientacoes)
app.get('/simposio/2024/inscricoes', educomp_2024_main.inscricoes)
app.get('/simposio/2024/trabalhos/criterios/trilha-1', educomp_2024_criterios.artigos)
app.get('/simposio/2024/trabalhos/criterios/trilha-2', educomp_2024_criterios.trilha2)
app.get('/simposio/2024/trabalhos/criterios/trilha-3', educomp_2024_criterios.trilha3)
app.get('/simposio/2024/trabalhos/criterios/trilha-4', educomp_2024_criterios.trilha4)
app.get('/simposio/2024/trabalhos/criterios/trilha-5', educomp_2024_criterios.ensaios)
/*app.get('/simposio/2023/trabalhos/criterios/lab-ideias', educomp_2022_criterios.labideias)
*/
app.get('/simposio/2024/equipe/comissao-organizadora', educomp_2024_equipe.comissao_organizadora)
app.get('/simposio/2024/equipe/comite-programa', educomp_2024_equipe.comite_programa)
app.get('/simposio/2024/equipe/comite-diretivo', educomp_2024_equipe.comite_diretivo)
app.get('/simposio/2024/equipe/comissao-especial', educomp_2024_equipe.comissao_especial)


app.get('/simposio/2024/certificados/esquenta/1', educomp_2024_certificados_esquenta_1.opcoes)
app.get('/simposio/2024/certificados/esquenta/1/obter', educomp_2024_certificados_esquenta_1.certificado)
app.post('/simposio/2024/certificados/esquenta/1/obter', educomp_2024_certificados_esquenta_1.obter)
app.post('/simposio/2024/certificados/esquenta/1/obter/arquivo', educomp_2024_certificados_esquenta_1.obterArquivo)
app.get('/simposio/2024/certificados/esquenta/1/validar', educomp_2024_certificados_esquenta_1.formValidar)
app.post('/simposio/2024/certificados/esquenta/1/validar', educomp_2024_certificados_esquenta_1.validar)

app.get('/simposio/2024/certificados/esquenta/2', educomp_2024_certificados_esquenta_2.opcoes)
app.get('/simposio/2024/certificados/esquenta/2/obter', educomp_2024_certificados_esquenta_2.certificado)
app.post('/simposio/2024/certificados/esquenta/2/obter', educomp_2024_certificados_esquenta_2.obter)
app.post('/simposio/2024/certificados/esquenta/2/obter/arquivo', educomp_2024_certificados_esquenta_2.obterArquivo)
app.get('/simposio/2024/certificados/esquenta/2/validar', educomp_2024_certificados_esquenta_2.formValidar)
app.post('/simposio/2024/certificados/esquenta/2/validar', educomp_2024_certificados_esquenta_2.validar)

app.get('/simposio/2024/certificados/educomp', educomp_2024_certificados_educomp.opcoes)
app.get('/simposio/2024/certificados/educomp/obter', educomp_2024_certificados_educomp.certificado)
app.post('/simposio/2024/certificados/educomp/obter', educomp_2024_certificados_educomp.obter)
app.post('/simposio/2024/certificados/educomp/obter/arquivo', educomp_2024_certificados_educomp.obterArquivo)
app.get('/simposio/2024/certificados/educomp/validar', educomp_2024_certificados_educomp.formValidar)
app.post('/simposio/2024/certificados/educomp/validar', educomp_2024_certificados_educomp.validar)

//EduComp 2023 - pt-BR
app.get('/simposio/2023', educomp_2023_main.index)
app.get('/simposio/2023/sobre', educomp_2023_main.sobre)
app.get('/simposio/2023/sobre-sbc', educomp_2023_main.sobre_sbc)
app.get('/simposio/2023/certificados', educomp_2023_main.certificados)

app.get('/simposio/2023/datas', educomp_2023_main.datas)
app.get('/simposio/2023/programacao/educomp', educomp_2023_programacao.programacao)
app.get('/simposio/2023/programacao/educomp/manha', educomp_2023_programacao.programacao_manha)
app.get('/simposio/2023/programacao/educomp/tarde', educomp_2023_programacao.programacao_tarde)
app.get('/simposio/2023/programacao/esquenta/1', educomp_2023_programacao.esquenta_1)
app.get('/simposio/2023/programacao/esquenta/2', educomp_2023_programacao.esquenta_2)

app.get('/simposio/2023/forlic', educomp_2023_main.forlic)
app.get('/simposio/2023/inscricoes', educomp_2023_main.inscricoes)

app.get('/simposio/2023/trabalhos/topicos-de-interesse', educomp_2023_trabalhos.topicos)
app.get('/simposio/2023/trabalhos/chamada', educomp_2023_trabalhos.chamado)
app.get('/simposio/2023/trabalhos/minicursos', educomp_2023_trabalhos.minicursos)
app.get('/simposio/2023/trabalhos/lab-ideias', educomp_2023_trabalhos.lab_ideias)
app.get('/simposio/2023/trabalhos/wtd', educomp_2023_trabalhos.wtd)
app.get('/simposio/2023/trabalhos/paineis', educomp_2023_trabalhos.paineis)
app.get('/simposio/2023/trabalhos/livros', educomp_2023_trabalhos.livros)
app.get('/simposio/2023/trabalhos/aceitos', educomp_2023_trabalhos.aceitos)
app.get('/simposio/2023/trabalhos/orientacoes', educomp_2023_trabalhos.orientacoes)

app.get('/simposio/2023/trabalhos/criterios/trilha-1', educomp_2023_criterios.artigos)
app.get('/simposio/2023/trabalhos/criterios/trilha-2', educomp_2023_criterios.trilha2)
app.get('/simposio/2023/trabalhos/criterios/trilha-3', educomp_2023_criterios.trilha3)
app.get('/simposio/2023/trabalhos/criterios/trilha-4', educomp_2023_criterios.trilha4)
app.get('/simposio/2023/trabalhos/criterios/trilha-5', educomp_2023_criterios.ensaios)
/*app.get('/simposio/2023/trabalhos/criterios/lab-ideias', educomp_2022_criterios.labideias)*/

app.get('/simposio/2023/equipe/comissao-organizadora', educomp_2023_equipe.comissao_organizadora)
app.get('/simposio/2023/equipe/comite-programa', educomp_2023_equipe.comite_programa)


app.get('/simposio/2023/certificados/esquenta/1', educomp_2023_certificados_esquenta_1.opcoes)
app.get('/simposio/2023/certificados/esquenta/1/obter', educomp_2023_certificados_esquenta_1.certificado)
app.post('/simposio/2023/certificados/esquenta/1/obter', educomp_2023_certificados_esquenta_1.obter)
app.post('/simposio/2023/certificados/esquenta/1/obter/arquivo', educomp_2023_certificados_esquenta_1.obterArquivo)
app.get('/simposio/2023/certificados/esquenta/1/validar', educomp_2023_certificados_esquenta_1.formValidar)
app.post('/simposio/2023/certificados/esquenta/1/validar', educomp_2023_certificados_esquenta_1.validar)

app.get('/simposio/2023/certificados/esquenta/2', educomp_2023_certificados_esquenta_2.opcoes)
app.get('/simposio/2023/certificados/esquenta/2/obter', educomp_2023_certificados_esquenta_2.certificado)
app.post('/simposio/2023/certificados/esquenta/2/obter', educomp_2023_certificados_esquenta_2.obter)
app.post('/simposio/2023/certificados/esquenta/2/obter/arquivo', educomp_2023_certificados_esquenta_2.obterArquivo)
app.get('/simposio/2023/certificados/esquenta/2/validar', educomp_2023_certificados_esquenta_2.formValidar)
app.post('/simposio/2023/certificados/esquenta/2/validar', educomp_2023_certificados_esquenta_2.validar)

app.get('/simposio/2023/certificados/educomp', educomp_2023_certificados_educomp.opcoes)
app.get('/simposio/2023/certificados/educomp/obter', educomp_2023_certificados_educomp.certificado)
app.post('/simposio/2023/certificados/educomp/obter', educomp_2023_certificados_educomp.obter)
app.post('/simposio/2023/certificados/educomp/obter/arquivo', educomp_2023_certificados_educomp.obterArquivo)
app.get('/simposio/2023/certificados/educomp/validar', educomp_2023_certificados_educomp.formValidar)
app.post('/simposio/2023/certificados/educomp/validar', educomp_2023_certificados_educomp.validar)

//EduComp 2022 - pt-BR
app.get('/simposio/2022', educomp_2022_main.index)
app.get('/simposio/2022/sobre', educomp_2022_main.sobre)
app.get('/simposio/2022/datas', educomp_2022_main.datas)

app.get('/simposio/2022/programacao', educomp_2022_programacao.programacao)
app.get('/simposio/2022/programacao/esquenta/1', educomp_2022_programacao.esquenta_1)
app.get('/simposio/2022/programacao/esquenta/2', educomp_2022_programacao.esquenta_2)

app.get('/simposio/2022/forlic', educomp_2022_main.forlic)
app.get('/simposio/2022/inscricoes', educomp_2022_main.inscricoes)

app.get('/simposio/2022/trabalhos/topicos-de-interesse', educomp_2022_trabalhos.topicos)
app.get('/simposio/2022/trabalhos/chamada', educomp_2022_trabalhos.chamado)
app.get('/simposio/2022/trabalhos/lab-ideias', educomp_2022_trabalhos.lab_ideias)
app.get('/simposio/2022/trabalhos/wtd', educomp_2022_trabalhos.wtd)
app.get('/simposio/2022/trabalhos/aceitos', educomp_2022_trabalhos.aceitos)

app.get('/simposio/2022/trabalhos/criterios/trilha-1', educomp_2022_criterios.artigos)
app.get('/simposio/2022/trabalhos/criterios/trilha-2', educomp_2022_criterios.trilha2)
app.get('/simposio/2022/trabalhos/criterios/trilha-3', educomp_2022_criterios.trilha3)
app.get('/simposio/2022/trabalhos/criterios/trilha-4', educomp_2022_criterios.trilha4)
app.get('/simposio/2022/trabalhos/criterios/trilha-5', educomp_2022_criterios.ensaios)
app.get('/simposio/2022/trabalhos/criterios/lab-ideias', educomp_2022_criterios.labideias)

app.get('/simposio/2022/equipe/comissao-organizadora', educomp_2022_equipe.comissao_organizadora)
app.get('/simposio/2022/equipe/comite-programa', educomp_2022_equipe.comite_programa)

app.get('/simposio/2022/certificados/esquenta/1', educomp_2022_certificados_esquenta_1.opcoes)
app.get('/simposio/2022/certificados/esquenta/1/obter', educomp_2022_certificados_esquenta_1.certificado)
app.post('/simposio/2022/certificados/esquenta/1/obter', educomp_2022_certificados_esquenta_1.obter)
app.post('/simposio/2022/certificados/esquenta/1/obter/arquivo', educomp_2022_certificados_esquenta_1.obterArquivo)
app.get('/simposio/2022/certificados/esquenta/1/validar', educomp_2022_certificados_esquenta_1.formValidar)
app.post('/simposio/2022/certificados/esquenta/1/validar', educomp_2022_certificados_esquenta_1.validar)

app.get('/simposio/2022/certificados/esquenta/2', educomp_2022_certificados_esquenta_2.opcoes)
app.get('/simposio/2022/certificados/esquenta/2/obter', educomp_2022_certificados_esquenta_2.certificado)
app.post('/simposio/2022/certificados/esquenta/2/obter', educomp_2022_certificados_esquenta_2.obter)
app.post('/simposio/2022/certificados/esquenta/2/obter/arquivo', educomp_2022_certificados_esquenta_2.obterArquivo)
app.get('/simposio/2022/certificados/esquenta/2/validar', educomp_2022_certificados_esquenta_2.formValidar)
app.post('/simposio/2022/certificados/esquenta/2/validar', educomp_2022_certificados_esquenta_2.validar)

app.get('/simposio/2022/certificados/educomp', educomp_2022_certificados_educomp.opcoes)
app.get('/simposio/2022/certificados/educomp/obter', educomp_2022_certificados_educomp.certificado)
app.post('/simposio/2022/certificados/educomp/obter', educomp_2022_certificados_educomp.obter)
app.post('/simposio/2022/certificados/educomp/obter/arquivo', educomp_2022_certificados_educomp.obterArquivo)
app.get('/simposio/2022/certificados/educomp/validar', educomp_2022_certificados_educomp.formValidar)
app.post('/simposio/2022/certificados/educomp/validar', educomp_2022_certificados_educomp.validar)

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
