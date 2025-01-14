exports.inscricoes = function (req, res) {
    res.render('simposio/2025/educomp/pt-BR/inscricoes/inscricoes',
        {
            layout: 'simposio/2025/pt-BR/layout',
            principal: true,
            titulo: 'Inscrições',
        }
    )
};

exports.inscricoeseb = function (req, res) {
    res.render('simposio/2025/educomp/pt-BR/inscricoes/inscricoes-com-eb',
        {
            layout: 'simposio/2025/pt-BR/layout',
            principal: true,
            titulo: 'Inscrições',
        }
    )
}