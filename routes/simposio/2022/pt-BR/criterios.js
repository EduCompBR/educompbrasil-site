
exports.artigos = function (req, res) { 
    res.render('simposio/2022/pt-BR/criterios-de-revisao/trilha-1', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 1 - Artigos de Pesquisa)'
        }
    ) 
};

exports.trilha2 = function (req, res) { 
    res.render('simposio/2022/pt-BR/criterios-de-revisao/trilha-2', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 2)'
        }
    ) 
};

exports.trilha3 = function (req, res) { 
    res.render('simposio/2022/pt-BR/criterios-de-revisao/trilha-3', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 3)'
        }
    ) 
};

exports.trilha4 = function (req, res) { 
    res.render('simposio/2022/pt-BR/criterios-de-revisao/trilha-4', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 4)'
        }
    ) 
};
exports.ensaios = function (req, res) { 
    res.render('simposio/2022/pt-BR/criterios-de-revisao/trilha-5', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 5)'
        }
    ) 
};

exports.labideias = function (req, res) { 
    res.render('simposio/2022/pt-BR/criterios-de-revisao/lab-ideias', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Laboratório de Ideias)'
        }
    ) 
};