exports.topicos = function(req, res){
    res.render('simposio/2023/pt-BR/trabalhos/topicos-de-interesse', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            trabalhos: true, 
            titulo: "Tópicos de Interesse",
            header: {
                endereco: 'topicos',
                descricao: 'Faixa de título dos tópicos de interesse.'
            }
        }
    )
  };

exports.chamado = function (req, res) { 
    res.render('simposio/2023/pt-BR/trabalhos/chamada', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Chamada de Trabalhos',
            header: {
                endereco: 'chamada-trabalhos',
                descricao: 'Faixa de título da chamada de trabalhos.'
            }
        }
    ) 
};

exports.minicursos = function (req, res) { 
    res.render('simposio/2023/pt-BR/trabalhos/minicursos', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Minicursos',
            header: {
                endereco: 'chamada-trabalhos',
                descricao: 'Faixa de título da chamada de trabalhos.'
            }
        }
    ) 
};

exports.lab_ideias = function (req, res) { 
    res.render('simposio/2023/pt-BR/trabalhos/lab-ideias', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Laboratório de Ideias - Chamada de Trabalhos',
            header: {
                endereco: 'chamada-trabalhos',
                descricao: 'Faixa de título da chamada de trabalhos.'
            }
        }
    ) 
};

exports.wtd = function (req, res) { 
    res.render('simposio/2023/pt-BR/trabalhos/wtd', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            trabalhos: true,
            titulo: 'WTD - Chamada de Trabalhos',
            header: {
                endereco: 'chamada-trabalhos',
                descricao: 'Faixa de título da chamada de trabalhos.'
            }
        }
    ) 
};

exports.paineis = function (req, res) { 
    res.render('simposio/2023/pt-BR/trabalhos/paineis', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Paineis - Chamada de Trabalhos',
            header: {
                endereco: 'chamada-trabalhos',
                descricao: 'Faixa de título da chamada de trabalhos.'
            }
        }
    ) 
};

exports.aceitos = function (req, res) { 
    res.render('simposio/2023/pt-BR/trabalhos/aceitos', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Trabalhos Aceitos',
            header: {
                endereco: 'trabalhos-aceitos',
                descricao: 'Faixa de título dos trabalhos aceitos.'
            }
        }
    ) 
};