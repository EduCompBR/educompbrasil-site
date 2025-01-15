exports.inscricoes = function (req, res) {
    res.render('simposio/2025/pt-BR/inscricoes/inscricoes-gerais',
        {
            layout: 'simposio/2025/pt-BR/layout',
            principal: true,
            titulo: 'Inscrições',
        }
    )
};