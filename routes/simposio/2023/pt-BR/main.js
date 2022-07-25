exports.index = function(req, res){
    res.render('simposio/2023/pt-BR/sobre', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            sobre: true, 
            titulo: "Principal"
        }
    )
  };

exports.sobre = function(req, res) { 
    res.render('simposio/2023/pt-BR/sobre', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            sobre: true,
            titulo: "Principal"
        }
    ) 
};

exports.datas = function(req, res) { 
    res.render('simposio/2023/pt-BR/datas', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            datas: true,
            titulo: 'Datas Importantes',
            header: {
                endereco: 'datas',
                descricao: 'Faixa de título das datas importantes.'
            }
        }
    ) 
};

exports.forlic = function(req, res) { 
    res.render('simposio/2023/pt-BR/forlic', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            forlic: true,
            titulo: 'ForLic',
            header: {
                endereco: 'forlic',
                descricao: 'Faixa de título do II ForLic.'
            }
        }
    ) 
};

exports.inscricoes = function(req, res) { 
    res.render('simposio/2023/pt-BR/inscricoes', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            inscricoes: true,
            titulo: 'Inscrições',
            header: {
                endereco: 'inscricoes',
                descricao: 'Faixa de título das Inscrições.'
            }
        }
    ) 
};