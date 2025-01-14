exports.index = function (req, res) {
    res.render('simposio/2025/educomp/pt-BR/principal/sobre-educomp',
        {
            layout: 'simposio/2025/pt-BR/layout',
            principal: true,
            titulo: 'Sobre o evento',
        }
    )
};

exports.sobre_educomp = function (req, res) {
    res.render('simposio/2025/educomp/pt-BR/principal/sobre-educomp',
        {
            layout: 'simposio/2025/pt-BR/layout',
            principal: true,
            titulo: 'Sobre o evento',
        }
    )
};

exports.sobre_sbc = function (req, res) {
    res.render('simposio/2025/educomp/pt-BR/principal/sobre-sbc',
        {
            layout: 'simposio/2025/pt-BR/layout',
            principal: true,
            titulo: 'Sobre a SBC',
        }
    )
};

exports.edicoes_anteriores = function (req, res) {
    res.render('simposio/2025/educomp/pt-BR/principal/edicoes-anteriores',
        {
            layout: 'simposio/2025/pt-BR/layout',
            principal: true,
            titulo: 'Eduções anteriores',
        }
    )
};

