exports.comissao_organizadora = function (req, res) { 
    res.render('simposio/2022/pt-BR/equipe/comissao-organizadora', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            equipe: true,
            titulo: 'Comissão Organizadora'
        }
    ) 
};

exports.comite_programa = function (req, res) { 
    res.render('simposio/2022/pt-BR/equipe/comite-programa', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            equipe: true,
            titulo: 'Comitê de Programa'
        }
    ) 
};
//comissao-organizadora