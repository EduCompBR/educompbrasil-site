exports.conhecajf_educomp = function(req, res){
    res.render('simposio/2025/comum/pt-BR/local/conheca-jf', {
        layout: 'simposio/2025/educomp/pt-BR/layout',
        titulo: 'Conheça Juiz de Fora',
    });
}

exports.conhecajf_sbceb = function(req, res){
    res.render('simposio/2025/comum/pt-BR/local/conheca-jf', {
        layout: 'simposio/2025/sbc-eb/pt-BR/layout',
        titulo: 'Conheça Juiz de Fora',
    });
}