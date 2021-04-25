exports.topicos = function(req, res){ 
    res.render('simposio/2021/pt-BR/topicos-de-interesse', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: "Tópicos de Interesse"
        }
    ) 
};

exports.chamada = function(req, res){ 
    res.render('simposio/2021/pt-BR/trabalhos/chamada', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Chamada de Trabalhos'
        }
    ) 
};

exports.aceitos = function(req, res){
    res.render('simposio/2021/pt-BR/trabalhos/aceitos', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Trabalhos Aceitos'
        }
    ) 
};