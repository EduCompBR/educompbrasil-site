//comite-programa
//comissao-organizadora

exports.comissao_organizadora = function (req, res) { 
    res.render('simposio/2021/pt-BR/equipe', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            equipe: true,
            titulo: 'Equipe'
        }
    ) 
};

exports.comite_programa = function (req, res) { 
    res.render('simposio/2021/pt-BR/comite-programa', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            equipe: true,
            titulo: 'Comitê de Programa'
        }
    ) 
};
//comissao-organizadora