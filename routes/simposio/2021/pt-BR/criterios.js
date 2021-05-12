//trilha1-artigos
//trilha1-ensaios
//trilha2
//trilha3
//trilha4
//lab-ideias

exports.ensaios = function (req, res) { 
    res.render('simposio/2021/pt-BR/criterios-de-revisao/criterio-trilha1', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 1 - Ensaios)'
        }
    ) 
};

exports.artigos = function (req, res) { 
    res.render('simposio/2021/pt-BR/criterios-de-revisao/criterio-trilha1-artigos', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 1 - Artigos de Pesquisa)'
        }
    ) 
};

exports.trilha2 = function (req, res) { 
    res.render('simposio/2021/pt-BR/criterios-de-revisao/criterio-trilha2', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 2)'
        }
    ) 
};

exports.trilha3 = function (req, res) { 
    res.render('simposio/2021/pt-BR/criterios-de-revisao/criterio-trilha3', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 3)'
        }
    ) 
};

exports.trilha4 = function (req, res) { 
    res.render('simposio/2021/pt-BR/criterios-de-revisao/criterio-trilha4', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 4)'
        }
    ) 
};

exports.labideias = function (req, res) { 
    res.render('simposio/2021/pt-BR/criterios-de-revisao/criterio-lab-ideias', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Laboratório de Ideias)'
        }
    ) 
};