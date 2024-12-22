exports.index = function (req, res) {
    res.render('simposio/2025/sbc-eb/pt-BR/principal/sobre-eb',
        {
            layout: 'simposio/2025/sbc-eb/pt-BR/layout',
            principal: true,
            titulo: 'Sobre o evento',
        }
    )
};