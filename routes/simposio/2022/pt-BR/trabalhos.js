exports.topicos = function(req, res){
    res.render('simposio/2022/pt-BR/trabalhos/topicos-de-interesse', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            trabalhos: true, 
            titulo: "Tópicos de Interesse"
        }
    )
  };

exports.chamado = function (req, res) { 
    res.render('simposio/2022/pt-BR/trabalhos/chamada', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Chamada de Trabalhos'
        }
    ) 
};

exports.lab_ideias = function (req, res) { 
    res.render('simposio/2022/pt-BR/trabalhos/lab-ideias', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Laboratório de Ideias - Chamada de Trabalhos'
        }
    ) 
};

exports.wtd = function (req, res) { 
    res.render('simposio/2022/pt-BR/trabalhos/wtd', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            trabalhos: true,
            titulo: 'WTD - Chamada de Trabalhos'
        }
    ) 
};

  /*exports.aceitos = function (req, res) { 
    res.render('simposio/2021/pt-BR/trabalhos/aceitos', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Trabalhos Aceitos'
        }
    ) 
};*/