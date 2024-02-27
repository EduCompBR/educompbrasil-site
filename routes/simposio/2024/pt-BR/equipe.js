exports.comissao_organizadora = function (req, res) {
    res.render('simposio/2024/pt-BR/equipe/comissao-organizadora',
        {
            layout: 'simposio/2024/pt-BR/layout',
            equipe: true,
            titulo: 'Comissão Organizadora',
            header: {
                endereco: 'comissao-organizadora',
                descricao: 'Faixa de título da comissão organizadora.'
            }
        }
    )
};

exports.comite_programa = function (req, res) {
    res.render('simposio/2024/pt-BR/equipe/comite-programa',
        {
            layout: 'simposio/2024/pt-BR/layout',
            equipe: true,
            titulo: 'Comitê de Programa',
            header: {
                endereco: 'comite-programa',
                descricao: 'Faixa de título do comitê de programa.'
            }
        }
    )
};

exports.comite_diretivo = function (req, res) {
    res.render('simposio/2024/pt-BR/equipe/comite-diretivo',
        {
            layout: 'simposio/2024/pt-BR/layout',
            equipe: true,
            titulo: 'Comitê Diretivo',
            header: {
                endereco: 'comite-diretivo',
                descricao: 'Faixa de título do comitê diretivo.'
            }
        }
    )
};

exports.comissao_especial = function (req, res) {

    res.render('simposio/2024/pt-BR/equipe/comissao-especial',
        {
            layout: 'simposio/2024/pt-BR/layout',
            equipe: true,
            titulo: 'Comissão Especial EduComp - SBC',
            header: {
                endereco: 'comissao-especial',
                descricao: 'Faixa de título do comitê diretivo.'
            }
        }
    )
};