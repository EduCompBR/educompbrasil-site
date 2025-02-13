exports.onde_hospedar_educomp = function (req, res) {
    res.render('simposio/2025/comum/pt-BR/local/onde-hospedar', {
        layout: 'simposio/2025/educomp/pt-BR/layout',
        titulo: 'Onde se Hospedar',
    });
}

exports.onde_hospedar_sbceb = function (req, res) {
    res.render('simposio/2025/comum/pt-BR/local/onde-hospedar', {
        layout: 'simposio/2025/sbc-eb/pt-BR/layout',
        titulo: 'Onde se Hospedar',
    });
}