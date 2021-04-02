//chamada
//aceitos

exports.chamado = function (req, res) { 
    res.render('simposio/2021/pt-BR/trabalhos/chamada', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Chamada de Trabalhos'
        }
    ) 
};

exports.aceitos = function (req, res) { 
    res.render('simposio/2021/pt-BR/trabalhos/aceitos', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Trabalhos Aceitos'
        }
    ) 
};