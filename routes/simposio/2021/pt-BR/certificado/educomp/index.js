const PDFDocument = require('pdfkit')
const { GoogleSpreadsheet } = require('google-spreadsheet')
const fs = require('fs')

//Educomp opcoes
exports.educompCertificadoOpcoes = function (req, res) { 

    res.render('simposio/2021/pt-BR/certificados-educomp/educomp-opcoes', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado',            
        }
    ) 
};

//form obter do educomp
exports.educompCertificado = function (req, res) { 
    console.log('vai renderizar o form obter')
    res.render('simposio/2021/pt-BR/certificados-educomp/educomp-form-obter', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado',
        }
    ) 
};

//gerar lista de links do educomp
exports.obterEducomp = async function (req, res) {
    try{
        console.log('Teste certificado educomp2')
        const doc = new GoogleSpreadsheet('1ShcIedcnFk9oiIwKo2daA6GqKVEYLlgitRNYtu3fjPM')
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        let rowsParticipacao = await doc.sheetsByTitle['participacao'].getRows()
        let rowsOrganizacao = await doc.sheetsByTitle['organizacao'].getRows()
        let rowsComiteProgramaMembro = await doc.sheetsByTitle['comite-programa-membro'].getRows()
        let rowsComiteProgramaConvidado = await doc.sheetsByTitle['comite-programa-convidado'].getRows()
        let rowsComiteProgramaCoord = await doc.sheetsByTitle['comite-programa-coord'].getRows()
        let rowsPalestrante = await doc.sheetsByTitle['palestrante'].getRows()
        let rowsPalestraApoio = await doc.sheetsByTitle['palestra-apoio'].getRows()
        let rowsPainel = await doc.sheetsByTitle['painel'].getRows()
        let rowsSessaoTecnicaCoord = await doc.sheetsByTitle['sessao-tecnica-coord'].getRows()
        let rowsApresTrabalho = await doc.sheetsByTitle['apres-trabalho'].getRows()
        let rowsAberturaEncerramento = await doc.sheetsByTitle['abertura-encerramento'].getRows()
        let rowsTrabalhoPublicado = await doc.sheetsByTitle['trabalho-publicado'].getRows()
        let rowsLabIdeiasMesa = await doc.sheetsByTitle['lab-ideias-mesa'].getRows()
        let rowsMelhorTrabalho = await doc.sheetsByTitle['melhor-trabalho'].getRows()
        let rowsMelhorRevisor = await doc.sheetsByTitle['melhor-revisor'].getRows()

        let plans = []

        let participacao = {}
        let organizacao = {}
        let comite_programa_membro = {}
        let comite_programa_convidado = {}
        let comite_programa_coord = {}
        let palestrante = {}
        let palestra_apoio = {}
        let painel = {}
        let sessao_tecnica_coord = {}
        let apres_trabalho = {}
        let abertura_encerramento = {}
        let trabalho_publicado = {}
        let lab_ideias_mesa = {}
        let melhor_trabalho = {}
        let melhor_revisor = {}

        let encontrado = false
        
        participacao.nome = 'Participação'
        participacao.registros = []
        rowsParticipacao.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                participacao.registros.push(
                    { 
                        'email': element.email.trim(),                        
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
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                organizacao.registros.push(
                    { 
                        'email': element.email.trim(),
                        'funcao': element.funcao,
                        'funcaoFormat': element.funcao[0].toUpperCase() + element.funcao.substr(1),
                        'atividade': 'organizacao',
                        'organizacao': true,
                    }
                )
            }
        })
        plans.push( organizacao )

        comite_programa_membro.nome = 'Comitê de Programa (Membro)'
        comite_programa_membro.registros = []
        rowsComiteProgramaMembro.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                comite_programa_membro.registros.push(
                    { 
                        'email': element.email.trim(),          
                        'atividade': 'comite-programa-membro',
                        'comite-programa-membro': true,
                    }
                )
            }
        })
        plans.push( comite_programa_membro )

        comite_programa_convidado.nome = 'Comitê de Programa (Revisor Convidado)'
        comite_programa_convidado.registros = []
        rowsComiteProgramaConvidado.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                comite_programa_convidado.registros.push(
                    { 
                        'email': element.email.trim(),               
                        'atividade': 'comite-programa-convidado',
                        'comite-programa-convidado': true,
                    }
                )
            }
        })
        plans.push( comite_programa_convidado )

        comite_programa_coord.nome = 'Comitê de Programa (Coordenação)'
        comite_programa_coord.registros = []
        rowsComiteProgramaCoord.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                comite_programa_coord.registros.push(
                    { 
                        'email': element.email.trim(),               
                        'atividade': 'comite-programa-coord',
                        'trilha': element.trilha, 
                        'trilhaFormat': element.trilha[0].toUpperCase() + element.trilha.substr(1),
                        'comite-programa-coord': true,
                    }
                )
            }
        })
        plans.push( comite_programa_coord )

        palestrante.nome = 'Palestrante'
        palestrante.registros = []
        rowsPalestrante.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                palestrante.registros.push(
                    { 
                        'email': element.email.trim(),               
                        'atividade': 'palestrante',
                        'titulo': element.titulo,
                        'tituloFormat': element.titulo[0].toUpperCase() + element.titulo.substr(1),
                        'dia': element.dia,
                        'palestrante': true,
                    }
                )
            }
        })
        plans.push( palestrante )

        palestra_apoio.nome = 'Palestra (Apoio)'
        palestra_apoio.registros = []
        rowsPalestraApoio.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                palestra_apoio.registros.push(
                    { 
                        'email': element.email.trim(),               
                        'atividade': 'palestra-apoio',
                        'funcao': element.funcao,
                        'titulo': element.titulo,
                        'tituloFormat': element.titulo[0].toUpperCase() + element.titulo.substr(1),
                        'dia': element.dia, 
                        'palestra-apoio': true,
                    }
                )
            }
        })
        plans.push( palestra_apoio )

        painel.nome = 'Painel'
        painel.registros = []
        rowsPainel.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                painel.registros.push(
                    { 
                        'email': element.email.trim(),
                        'funcao': element.funcao,
                        'titulo': element.titulo,
                        'tituloFormat': element.titulo[0].toUpperCase() + element.titulo.substr(1),
                        'dia': element.dia,
                        'atividade': 'painel',
                        'painel': true,
                    }
                )
            }
        })
        plans.push(painel)

        sessao_tecnica_coord.nome = 'Sessão técnica - Coordenação'
        sessao_tecnica_coord.registros = []
        rowsSessaoTecnicaCoord.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                sessao_tecnica_coord.registros.push(
                    { 
                        'email': element.email.trim(),                                                
                        'atividade': 'sessao-tecnica-coord',
                        'sessao': element.sessao,
                        'sessaoFormat': element.sessao[0].toUpperCase() + element.sessao.substr(1),
                        'dia': element.dia,
                        'sessao-tecnica-coord': true,
                    }
                )
            }
        })
        plans.push(sessao_tecnica_coord)

        apres_trabalho.nome = 'Apresentação de Trabalhos'        
        apres_trabalho.registros = []
        rowsApresTrabalho.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                apres_trabalho.registros.push(
                    { 
                        'email': element.email.trim(),                        
                        'titulo': element.titulo,     
                        'tituloFormat': element.titulo[0].toUpperCase() + element.titulo.substr(1),   
                        'tipo': element.tipo,
                        'dia': element.dia,                
                        'atividade': 'apres-trabalho',
                        'apres-trabalho': true,
                    }
                )
            }
        })
        plans.push(apres_trabalho)

        abertura_encerramento.nome = 'Abertura - Encerramento'
        abertura_encerramento.registros = []
        rowsAberturaEncerramento.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                abertura_encerramento.registros.push(
                    { 
                        'email': element.email.trim(),
                        'tipo': element.tipo,
                        'tipoFormat': element.tipo[0].toUpperCase() + element.tipo.substr(1),
                        'dia': element.dia, 
                        'atividade': 'abertura-encerramento',
                        'abertura-encerramento': true,
                    }
                )
            }
        })
        plans.push(abertura_encerramento)

        trabalho_publicado.nome = 'Trabalho Publicado'
        trabalho_publicado.registros = []
        rowsTrabalhoPublicado.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                trabalho_publicado.registros.push(
                    { 
                        'email': element.email.trim(),                                                
                        'atividade': 'trabalho-publicado',
                        'autores': element.autores,
                        'tipo': element.tipo,
                        'titulo': element.titulo,
                        'tituloFormat': element.titulo[0].toUpperCase() + element.titulo.substr(1),
                        'trabalho-publicado': true,
                    }
                )
            }
        })
        plans.push(trabalho_publicado)

        lab_ideias_mesa.nome = 'Lab Ideias (Mesa)'        
        lab_ideias_mesa.registros = []
        rowsLabIdeiasMesa.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                lab_ideias_mesa.registros.push(
                    { 
                        'email': element.email.trim(),                        
                        'sessao': element.sessao,
                        'dia': element.dia,
                        'tipo': element.tipo,          
                        'tipoFormat': element.tipo[0].toUpperCase() + element.tipo.substr(1),              
                        'atividade': 'lab-ideias-mesa',
                        'lab-ideias-mesa': true,
                    }
                )
            }
        })
        plans.push(lab_ideias_mesa)

        melhor_trabalho.nome = 'Melhor Trabalho'        
        melhor_trabalho.registros = []
        rowsMelhorTrabalho.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                melhor_trabalho.registros.push(
                    { 
                        'email': element.email.trim(),                        
                        'titulo': element.titulo,
                        'tituloFormat': element.titulo[0].toUpperCase() + element.titulo.substr(1),
                        'tipo': element.tipo,           
                        'autores': element.autores,                       
                        'atividade': 'melhor-trabalho',
                        'melhor-trabalho': true,
                    }
                )
            }
        })
        plans.push(melhor_trabalho)

        melhor_revisor.nome = 'Melhor Revisor'        
        melhor_revisor.registros = []
        rowsMelhorRevisor.forEach( (element) => {
            if ((element.email.trim()) === req.body.email) {
                encontrado = true
                melhor_revisor.registros.push(
                    { 
                        'email': element.email.trim(),                        
                        'revisor': element.revisor,
                        'tituloFormat': "Melhor Revisor",
                        'trilha': element.trilha,                        
                        'atividade': 'melhor-revisor',
                        'melhor-revisor': true
                    }
                )
            }
        })
        plans.push(melhor_revisor)

        console.log(plans)

        if (encontrado) {
            res.render('simposio/2021/pt-BR/certificados-educomp/educomp-obter-lista',
                {
                    layout: 'simposio/2021/pt-BR/layout', 
                    certificado: true,
                    titulo: 'Certificado', 
                    email: req.body.email,
                    data: plans,
                }
            )
        } else {
            res.render('simposio/2021/pt-BR/certificados-educomp/educomp-form-obter',
                {
                    layout: 'simposio/2021/pt-BR/layout', 
                    certificado: true,
                    mensagem: 'Email não encontrado na base de dados. Entre em contato com a organização'
                }
            )
        }

    } catch (error) {
        console.log(error)
        res.render('simposio/2021/pt-BR/certificados-educomp/educomp-obter-lista',
                {
                    layout: 'simposio/2021/pt-BR/layout', 
                    certificado: true,
                    titulo: 'Certificado',    
                    mensagem: 'Erro ao buscar certificado. Entre em contato com a organização'      
                }
        )
    }

};

//obter arquivo específico de certificado do educomp
exports.obterArquivoEducomp = async function (req, res) {
    try{
        let atividade = req.body.atividade
        let email = req.body.email
        let nome = ''
        let codigo = req.body.codigo
        let funcao = false
        let tipo = false
        let titulo = false
        let sessao = false
        let dia = false 
        let trilha = false 
        let autores = false
        let revisor = false
        let textoBase = ''

        const sheets = new GoogleSpreadsheet('1ShcIedcnFk9oiIwKo2daA6GqKVEYLlgitRNYtu3fjPM')
        await sheets.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })

        await sheets.loadInfo()
        let posicao = -1

        const rows = await sheets.sheetsByTitle[atividade].getRows()
        rows.forEach( (element, index) => {
            if (atividade === 'participacao') {
                 if ((element.email.trim()) === email) {
                    posicao = index
                }
            } else if (atividade === 'organizacao') {
                funcao = req.body.funcao
                //console.log(element.funcao, funcao)
                if ((element.email.trim()) === email && element.funcao === funcao) {
                    funcao = funcao[0].toUpperCase() + funcao.substr(1)
                    posicao = index
                }
            } else if (atividade === 'comite-programa-membro') {
                funcao = req.body.funcao
                if ((element.email.trim()) === email) {
                    posicao = index
                }
            } else if (atividade === 'comite-programa-convidado') {
                if ((element.email.trim()) === email) {
                    posicao = index
                }
            } else if (atividade === 'comite-programa-coord') {
                trilha = req.body.trilha 
                if ((element.email.trim()) === email && element.trilha === trilha) {
                    trilha = trilha[0].toUpperCase() + trilha.substr(1)
                    posicao = index
                }
            }
            else if (atividade === 'palestrante') {
                titulo = req.body.titulo 
                dia = req.body.dia
                if ((element.email.trim()) === email && element.titulo === titulo) {
                    titulo = titulo[0].toUpperCase() + titulo.substr(1)
                    posicao = index
                }
            } 
            else if (atividade === 'palestra-apoio') {
                funcao = req.body.funcao
                titulo = req.body.titulo 
                dia = req.body.dia
                if ((element.email.trim()) === email && element.funcao === funcao && element.titulo === titulo) {
                    funcao = funcao[0].toUpperCase() + funcao.substr(1)
                    titulo = titulo[0].toUpperCase() + titulo.substr(1)
                    posicao = index
                }
            }
            else if (atividade === 'painel') {
                funcao = req.body.funcao
                titulo = req.body.titulo 
                dia = req.body.dia 
                if ((element.email.trim()) === email && element.funcao === funcao && element.titulo === titulo) {
                    funcao = funcao[0].toUpperCase() + funcao.substr(1)
                    titulo = titulo[0].toUpperCase() + titulo.substr(1)
                    posicao = index
                }
            } else if (atividade === 'sessao-tecnica-coord') {
                sessao = req.body.sessao 
                dia = req.body.dia 
                if ((element.email.trim()) === email && element.sessao === sessao) {
                    sessao = sessao[0].toUpperCase() + sessao.substr(1)
                    posicao = index
                }
            } else if (atividade === 'apres-trabalho') {
                tipo = req.body.tipo
                titulo = req.body.titulo
                dia = req.body.dia 
                if ((element.email.trim()) === email && element.tipo === tipo && element.titulo === titulo) {
                    tipo = tipo[0].toUpperCase() + tipo.substr(1)
                    titulo = titulo[0].toUpperCase() + titulo.substr(1)
                    posicao = index
                }
            } else if (atividade === 'abertura-encerramento') {
                tipo = req.body.tipo
                dia = req.body.dia 
                if ((element.email.trim()) === email && element.tipo === tipo) {
                    tipo = tipo[0].toUpperCase() + tipo.substr(1)
                    posicao = index
                }
            } else if (atividade === 'trabalho-publicado') {
                tipo = req.body.tipo
                titulo = req.body.titulo 
                autores = req.body.autores 
                if ((element.email.trim()) === email && element.tipo === tipo && element.titulo === titulo) {                    
                    tipo = tipo[0].toUpperCase() + tipo.substr(1)
                    titulo = titulo[0].toUpperCase() + titulo.substr(1)
                    autores = autores[0].toUpperCase() + autores.substr(1)
                    posicao = index
                }
            } else if (atividade === 'lab-ideias-mesa') {
                sessao = req.body.sessao
                dia = req.body.dia
                tipo = req.body.tipo 
                if ((element.email.trim()) === email && element.sessao === sessao && element.tipo === tipo) {
                    sessao = sessao[0].toUpperCase() + sessao.substr(1)
                    tipo = tipo[0].toUpperCase() + tipo.substr(1)
                    posicao = index
                }
            } else if (atividade === 'melhor-trabalho') {
                tipo = req.body.tipo
                titulo = req.body.titulo 
                autores = req.body.autores 
                if ((element.email.trim()) === email && element.tipo === tipo && element.titulo === titulo) {                    
                    tipo = tipo[0].toUpperCase() + tipo.substr(1)
                    titulo = titulo[0].toUpperCase() + titulo.substr(1)
                    autores = autores[0].toUpperCase() + autores.substr(1)
                    posicao = index
                }
            } else if (atividade === 'melhor-revisor') {
                revisor = req.body.revisor
                trilha = req.body.trilha 
                posicao = index
            }
        })

        if ( posicao !== -1 ) {
            const doc = new PDFDocument({                
                layout: 'landscape',  
                size: [540, 800],               
            })
            doc.image('resources/certificados/modelos/certificado-modelo.png', 0, 0,{
                fit: [800, 600],
            })
            doc.fontSize(18)
            doc.font('resources/fonts/trebuc.ttf')

            if (rows[posicao].nome_completo) nome = rows[posicao].nome_completo
            if (rows[posicao].codigo) codigo = rows[posicao].codigo
            nome = nome.toUpperCase()
            textoBase = rows[0].texto_base
            let novoTextoBase = textoBase.replace('${nome_completo}', nome)
            novoTextoBase = novoTextoBase.replace('${funcao}', funcao)
            novoTextoBase = novoTextoBase.replace('${titulo}', titulo)
            novoTextoBase = novoTextoBase.replace('${tipo}', tipo)
            novoTextoBase = novoTextoBase.replace('${sessao}', sessao)
            novoTextoBase = novoTextoBase.replace('${dia}', dia)
            novoTextoBase = novoTextoBase.replace('${trilha}', trilha)
            novoTextoBase = novoTextoBase.replace('${autores}', autores)
            novoTextoBase = novoTextoBase.replace('${revisor}', revisor)
            

            //doc.text(novoTextoBase, 150, 265, {width: 600, align: 'justify', continued: true}).fontSize(8).text(`Pode ser validado em: https://www.educompbrasil.org/simposio/2021/certificados/esquenta/1/validar com o código: ${codigo}`, 150, 385, {width:600, align: 'justify'})

            if(novoTextoBase.length > 400)
                doc.fontSize(16)
            doc.text(novoTextoBase, 100, 265, {width: 600, align: 'justify'})
            doc.fontSize(9.5)
            doc.text(`Pode ser validado em: https://www.educompbrasil.org/simposio/2021/certificados/educomp/validar com o código ${codigo}`, 100, 405, {width:600, align: 'center'})
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
        res.render('simposio/2021/pt-BR/certificados/educomp-obter-lista',
            {
                layout: 'simposio/2021/pt-BR/layout', 
                certificado: true,
                titulo: 'Certificado',  
                mensagem: 'Erro ao buscar certificado. Entre em contato com a organização'
            }
        )
    }
}

//form validar educomp
exports.educompFormValidar = function (req, res) { 
    res.render('simposio/2021/pt-BR/certificados-educomp/educomp-form-validar', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            certificado: true,
            titulo: 'Certificado',            
        }
    ) 
};

//Validação educomp
exports.validarEducomp = async function (req, res) {
    try{
        console.log('Teste validacao do educomp')
        const doc = new GoogleSpreadsheet('1ShcIedcnFk9oiIwKo2daA6GqKVEYLlgitRNYtu3fjPM')
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        let codigo = req.body.codigo
        console.log(codigo)
        let finalCodigo = codigo.substring(7, 9)
        console.log(finalCodigo)

        let atividade = ''
        const planCodigos = await doc.sheetsByTitle['codigos-limpos'].getRows()
        planCodigos.forEach( (element) => {
            console.log('Elemento e código: ', element.codigo, finalCodigo)
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
            dadosMensagem.push("EVENTO: EduComp")
            dadosMensagem.push("DATA: 26 a 30/04/2021")
            if (rows[posicao].revisor){
                dadosMensagem.push(`REVISOR: ${rows[posicao].revisor}`)
            } else {
                dadosMensagem.push(`PARTICIPANTE: ${nome}`)
            }
            if (rows[posicao].funcao){
                dadosMensagem.push(`FUNÇÃO: ${rows[posicao].funcao} `)
            }
            if (rows[posicao].titulo){
                dadosMensagem.push(`TÍTULO: ${rows[posicao].titulo} `)
            }
            if (rows[posicao].tipo){
                dadosMensagem.push(`TIPO: ${rows[posicao].tipo} `)
            }
            if (rows[posicao].trilha){
                dadosMensagem.push(`TRILHA: ${rows[posicao].trilha} `)
            }

            res.render('simposio/2021/pt-BR/certificados-educomp/educomp-validar-resultado', {
                layout: 'simposio/2021/pt-BR/layout', 
                certificado: true,
                titulo: 'Certificado', 
                dadosMensagem: dadosMensagem, 
            })
        } else {
            res.render('simposio/2021/pt-BR/certificados-educomp/educomp-validar-resultado', {
                layout: 'simposio/2021/pt-BR/layout', 
                certificado: true,
                titulo: 'Certificado', 
                dadosMensagem: false,
            })
        }
    } catch (error) {
        res.render('simposio/2021/pt-BR/certificados-educomp/educomp-form-validar', 
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
// exports.educompCertificado = function (req, res) { 
//     let mensagem = true
//     let validado = false
//     if (req.params.encontrado === 'encontrado') {
//         mensagem = false
//     } else if (req.params.encontrado === 'validado') {
//         validado = true
//     }

//     res.render('simposio/2021/pt-BR/certificados/educomp', 
//         {
//             layout: 'simposio/2021/pt-BR/layout', 
//             certificado: true,
//             titulo: 'Certificado',
//             encontrado: mensagem
//         }
//     ) 
// };

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
// exports.obterEducomp = async function (req, res) {
//     try{
//         console.log('Teste certificado')
//         const doc = new GoogleSpreadsheet('1bOIjyqdNo2x5TkhNPNPid2FFD1JkQeb24R1izWilh2E')
//         await doc.useServiceAccountAuth({
//             client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
//             private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'),
//         })
//         await doc.loadInfo()
//         const sheet = doc.sheetsByIndex[0]
//         const rows = await sheet.getRows()
//         let encontrado = -1
//         let posicao = -1
//         console.log(req.body.email)
//         rows.forEach( (element, index) => {
//             //console.log(element.Email)
//             if (element.Email === req.body.email){
//                 encontrado = 1
//                 posicao = index
//             }
//         })
//         if (posicao !== -1) {
//             console.log('Usuário encontrado, gerando certificado...')
//             const doc = new PDFDocument({                
//                 layout: 'landscape', 
//                 size: [540, 800],               
//             })
//             doc.image('./certificado-esquenta.png', 0, 0,{
//                 fit: [800, 600],

//             })
//             doc.fontSize(18)
//             doc.font('./trebuc.ttf')
//             let nome = rows[posicao].Nome_completo
//             let codigo = rows[posicao].Codigo
//             nome = nome.toUpperCase()
//             doc.text(`Certificamos para os devidos fins que ${nome} participou do evento preparatório Esquenta EduComp (Simpósio Brasileiro de Educação em Computação) no dia 27 de fevereiro de 2021 com a carga horária de 03 (três) horas.`, 150, 275, {width: 500, align: 'justify', continued: true}).fontSize(10).text(`Pode ser verificado em: educompbrasil.org/simposio/2021/certificados com o código: ${codigo}`, 150, 375, {width: 600, align: 'justify', fontSize: 10})
//             doc.end()
//             doc.pipe(fs.createWriteStream('certificado.pdf')).on('finish', () => {
//                 res.download('./certificado.pdf')
//             })    
//         } else {
//             res.redirect('/simposio/2021/certificados/esquenta/1/nao-encontrado')
//         }
//     } catch (error) {
//         console.log(error)
//     }

// };

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

exports.validarEducomp2 = async function (req, res) {
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

