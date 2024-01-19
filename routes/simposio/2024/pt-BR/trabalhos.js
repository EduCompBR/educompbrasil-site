exports.topicos = function (req, res) {
    res.render('simposio/2024/pt-BR/trabalhos/topicos-de-interesse',
        {
            layout: 'simposio/2024/pt-BR/layout',
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
    res.render('simposio/2024/pt-BR/trabalhos/chamada',
        {
            layout: 'simposio/2024/pt-BR/layout',
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
    res.render('simposio/2024/pt-BR/trabalhos/minicursos',
        {
            layout: 'simposio/2024/pt-BR/layout',
            trabalhos: true,
            titulo: 'Minicursos',
            header: {
                endereco: 'minicursos',
                descricao: 'Faixa de título da chamada de trabalhos.'
            }
        }
    )
};

exports.lab_ideias = function (req, res) {
    res.render('simposio/2024/pt-BR/trabalhos/lab-ideias',
        {
            layout: 'simposio/2024/pt-BR/layout',
            trabalhos: true,
            titulo: 'Laboratório de Ideias - Chamada de Trabalhos',
            header: {
                endereco: 'lab-ideias',
                descricao: 'Faixa de título da chamada de trabalhos.'
            }
        }
    )
};

exports.wtd = function (req, res) {
    res.render('simposio/2024/pt-BR/trabalhos/wtd',
        {
            layout: 'simposio/2024/pt-BR/layout',
            trabalhos: true,
            titulo: 'WTD - Chamada de Trabalhos',
            header: {
                endereco: 'wtd',
                descricao: 'Faixa de título da chamada de trabalhos.'
            }
        }
    )
};

exports.ctd = function (req, res) {
    res.render('simposio/2024/pt-BR/trabalhos/ctd',
        {
            layout: 'simposio/2024/pt-BR/layout',
            trabalhos: true,
            titulo: 'CTD - Chamada de Trabalhos',
            header: {
                endereco: 'ctd',
                descricao: 'Faixa de título da chamada de trabalhos.'
            }
        }
    )
};


exports.mesas = function (req, res) {
    res.render('simposio/2024/pt-BR/trabalhos/mesas',
        {
            layout: 'simposio/2024/pt-BR/layout',
            trabalhos: true,
            titulo: 'Mesas Temáticas',
            header: {
                endereco: 'mesas',
                descricao: 'Faixa de título das Mesas temáticas.'
            }
        }
    )
};

exports.livros = function (req, res) {
    res.render('simposio/2024/pt-BR/trabalhos/livros',
        {
            layout: 'simposio/2024/pt-BR/layout',
            trabalhos: true,
            titulo: 'Lançamento de Livros - Chamada de Trabalhos',
            header: {
                endereco: 'livros',
                descricao: 'Faixa de título da chamada de trabalhos.'
            }
        }
    )
};

exports.aceitos = function (req, res) {
    res.render('simposio/2024/pt-BR/trabalhos/aceitos',
        {
            layout: 'simposio/2024/pt-BR/layout',
            trabalhos: true,
            titulo: 'Trabalhos Aceitos',
            header: {
                endereco: 'trabalhos-aceitos',
                descricao: 'Faixa de título dos trabalhos aceitos.'
            }
        }
    )
};


exports.aceitos_orientacoes = function (req, res) {
    res.render('simposio/2024/pt-BR/trabalhos/aceitos-orientacoes',
        {
            layout: 'simposio/2024/pt-BR/layout',
            trabalhos: true,
            titulo: 'Orientações sobre Artigos Aceitos',
            header: {
                endereco: 'aceitos-orientacoes',
                descricao: 'Faixa de título das orientações sobre artigos aceitos: autores.'
            }
        }
    )
};

exports.orientacoes = function (req, res) {
    res.render('simposio/2024/pt-BR/trabalhos/orientacoes',
        {
            layout: 'simposio/2024/pt-BR/layout',
            trabalhos: true,
            titulo: 'Orientações sobre Apresentações',
            header: {
                endereco: 'orientacoes',
                descricao: 'Faixa de título das orientações: autores.'
            }
        }
    )
};