exports.inscricoes = function (req, res) {
    res.render('simposio/2025/sbc-eb/pt-BR/inscricoes/inscricoes',
        {
            layout: 'simposio/2025/sbc-eb/pt-BR/layout',
            principal: true,
            titulo: 'Inscrições',
        }
    )
}