exports.index = function(req, res){
    res.render('simposio/2022/pt-BR/sobre', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            sobre: true, 
            titulo: "Principal"
        }
    )
  };

exports.sobre = function(req, res) { 
    res.render('simposio/2022/pt-BR/sobre', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            sobre: true,
            titulo: "Principal"
        }
    ) 
};

exports.datas = function(req, res) { 
    res.render('simposio/2022/pt-BR/datas', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            datas: true,
            titulo: 'Datas Importantes'
        }
    ) 
};

exports.forlic = function(req, res) { 
    res.render('simposio/2022/pt-BR/forlic', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            forlic: true,
            titulo: 'ForLic'
        }
    ) 
};

exports.inscricoes = function(req, res) { 
    res.render('simposio/2022/pt-BR/inscricoes', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            inscricoes: true,
            titulo: 'Inscrições'
        }
    ) 
};

/*exports.contato = function(req, res) { 
    res.render('simposio/2021/pt-BR/contato', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            contato: true,
            titulo: "Contato"
        }
    ) 
};*/