exports.index = function(req, res){
    res.render('simposio/2021/pt-BR/sobre', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            sobre: true, 
            titulo: "Principal"
        }
    )
  };

exports.topicos = function(req, res){ 
    res.render('simposio/2021/pt-BR/topicos-de-interesse', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            topicos: true,
            titulo: "Tópicos de Interesse"
        }
    ) 
};

exports.sobre = function(req, res) { 
    res.render('simposio/2021/pt-BR/sobre', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            sobre: true,
            titulo: "Principal"
        }
    ) 
};

//datas
//contato
//forlic
//inscricoes