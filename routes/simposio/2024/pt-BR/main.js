exports.index = function(req, res){
    res.render('simposio/2024/pt-BR/sobre', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            sobre: true, 
            titulo: "Principal"
        }
    )
  };

  exports.sobre = function(req, res){
    res.render('simposio/2024/pt-BR/sobre', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            sobre: true, 
            titulo: "Principal"
        }
    )
  };

exports.sobre_sbc = function(req, res) { 
    res.render('simposio/2024/pt-BR/sobre-sbc', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            sobre: true,
            titulo: "Sobre a SBC",
            header: {
                endereco: 'sobre-sbc',
                descricao: 'Faixa de título sobre a SBC'
            }
        }
    ) 
};

exports.datas = function(req, res) { 
    res.render('simposio/2024/pt-BR/datas', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
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
    res.render('simposio/2024/pt-BR/forlic', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
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
    res.render('simposio/2024/pt-BR/inscricoes', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            inscricoes: true,
            titulo: 'Inscrições',
            header: {
                endereco: 'inscricoes',
                descricao: 'Faixa de título das Inscrições.'
            }
        }
    ) 
};

exports.certificados = function(req, res) { 
    res.render('simposio/2024/pt-BR/certificados/eventos', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            inscricoes: true,
            titulo: 'Certificados',
            header: {
                endereco: 'inscricoes',
                descricao: 'Faixa de título dos Certificados.'
            }
        }
    ) 
};