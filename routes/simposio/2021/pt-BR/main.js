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

exports.datas = function(req, res) { 
    res.render('simposio/2021/pt-BR/datas', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            datas: true,
            titulo: 'Datas Importantes'
        }
    ) 
};

exports.contato = function(req, res) { 
    res.render('simposio/2021/pt-BR/contato', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            contato: true,
            titulo: "Contato"
        }
    ) 
};

exports.forlic = function(req, res) { 
    res.render('simposio/2021/pt-BR/forlic', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            forlic: true,
            titulo: 'ForLic'
        }
    ) 
};

exports.inscricoes = function(req, res) { 
    res.render('simposio/2021/pt-BR/inscricoes', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            inscricoes: true,
            titulo: 'Inscrições'
        }
    ) 
};