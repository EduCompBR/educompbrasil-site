const { GoogleSpreadsheet } = require('google-spreadsheet')
const codigo_planilha = '17ixkt2jL0pEzojMJmKyQ1tvyX2t-0sCu9Nluk3X4Smk'


exports.comite_gestor = function(req, res) { 
    res.render('giec/quem-somos/comite-gestor', 
        {
            layout: 'giec/layout',
            quem_somos: true,
            titulo: "Comitê Gestor (CG)"
        }
    ) 
};

exports.gts = function(req, res){ 
    res.render('giec/quem-somos/gts', 
        {
            layout: 'giec/layout',
            quem_somos: true,
            titulo: "Grupos de Trabalho (GT)"
        }
    ) 
};

exports.membros = async function(req, res){ 

    const doc = new GoogleSpreadsheet(codigo_planilha)
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
    })
    await doc.loadInfo()

    let numberOfSheets = await doc.sheetCount;

    //Copiar toda a planilha
    var rows = []
    var headers = []
    for(var i=0; i<numberOfSheets; i++){
        var title = doc.sheetsByIndex[i].title
        rows[title] = await doc.sheetsByTitle[title].getRows()

        //Copiar nomes das colunas
        var not_headers = [
            '_sheet', "_rowNumber", "_rawData",
            "id", "codigo_base", "texto_base", "status"
        ]
        headers[title] = Object.getOwnPropertyNames(rows[title][0])
        headers[title] = headers[title].filter(x => !not_headers.includes(x))
    }

    //Criando a lista de membros efetivos
    //a partir dos dados da planilha
    var membros_efetivos_dados = []

    rows["efetivos"].forEach( (element) => {

        var membro = {}

        membro.nome = element.nome
        membro.instituicao = element.instituicao
        membro.inclusao = element.inclusao
        membro.vigencia = element.vigencia

        membros_efetivos_dados.push(membro)

    })

    //Criando a lista de membros da comunidade
    //a partir dos dados da planilha
    var membros_comunidade_dados = []

    rows["comunidade"].forEach( (element) => {

        var membro = {}

        membro.nome = element.nome
        membro.instituicao = element.instituicao
        membro.inclusao = element.inclusao
        membro.vigencia = element.vigencia

        membros_comunidade_dados.push(membro)

    })

    //Criando a lista de membros inativos
    //a partir dos dados da planilha
    membros_inativos_dados = []

    rows["inativos"].forEach( (element) => {

        var membro = {}

        membro.nome = element.nome
        membro.instituicao = element.instituicao
        membro.inclusao = element.inclusao
        membro.vigencia = element.vigencia

        membros_inativos_dados.push(membro)

    })

    res.render('giec/quem-somos/membros', 
        {
            layout: 'giec/layout',
            quem_somos: true,
            titulo: "Membros",
            membros_efetivos_dados: membros_efetivos_dados,
            membros_comunidade_dados: membros_comunidade_dados,
            membros_inativos_dados: membros_inativos_dados
        }
    )    
};