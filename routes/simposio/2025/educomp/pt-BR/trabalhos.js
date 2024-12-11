exports.topicos_interesse = function (req, res) {
    res.render('simposio/2025/educomp/pt-BR/trabalhos/topicos-interesse',
        {
            layout: 'simposio/2025/pt-BR/layout',
            trabalhos: true,
            titulo: 'Tópicos de interesse',
        }
    )
};

exports.artigos_completos = function (req, res) {
    res.render('simposio/2025/educomp/pt-BR/trabalhos/artigos-completos',
        {
            layout: 'simposio/2025/pt-BR/layout',
            trabalhos: true,
            titulo: 'Artigos completos',
        }
    )
};

exports.criterios_trilha1 = function (req, res) { 
    res.render('simposio/2025/educomp/pt-BR/trabalhos/criterios/trilha-1', 
        {
            layout: 'simposio/2025/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios trilha 1',
        }
    ) 
};

exports.criterios_trilha2 = function (req, res) { 
    res.render('simposio/2025/educomp/pt-BR/trabalhos/criterios/trilha-2', 
        {
            layout: 'simposio/2025/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios trilha 2',
        }
    ) 
};

exports.criterios_trilha3 = function (req, res) { 
    res.render('simposio/2025/educomp/pt-BR/trabalhos/criterios/trilha-3', 
        {
            layout: 'simposio/2025/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios trilha 3',
        }
    ) 
};

exports.criterios_trilha4 = function (req, res) { 
    res.render('simposio/2025/educomp/pt-BR/trabalhos/criterios/trilha-4', 
        {
            layout: 'simposio/2025/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios trilha 4',
        }
    ) 
};
exports.criterios_trilha5 = function (req, res) { 
    res.render('simposio/2025/educomp/pt-BR/trabalhos/criterios/trilha-5', 
        {
            layout: 'simposio/2025/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios trilha 5',
        }
    ) 
};