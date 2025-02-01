exports.template_visualizacao_educomp = function (req, res) {
    res.render('simposio/2025/comum/pt-BR/local/pagina-template', {
        layout: 'simposio/2025/educomp/pt-BR/layout',
        titulo: 'Página Template',
    });
}

exports.template_visualizacao_sbc_eb = function (req, res) {
    res.render('simposio/2025/comum/pt-BR/local/pagina-template', {
        layout: 'simposio/2025/sbc-eb/pt-BR/layout',
        titulo: 'Página Template',
    });
}