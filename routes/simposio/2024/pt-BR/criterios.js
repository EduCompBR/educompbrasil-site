
exports.artigos = function (req, res) { 
    res.render('simposio/2024/pt-BR/criterios-de-revisao/trilha-1', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 1 - Artigos de Pesquisa)',
            header: {
                endereco: 'criterios-de-revisao',
                descricao: 'Faixa de título dos critérios de revisão.'
            }
        }
    ) 
};

exports.trilha2 = function (req, res) { 
    res.render('simposio/2024/pt-BR/criterios-de-revisao/trilha-2', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 2)',
            header: {
                endereco: 'criterios-de-revisao',
                descricao: 'Faixa de título dos critérios de revisão.'
            }
        }
    ) 
};

exports.trilha3 = function (req, res) { 
    res.render('simposio/2024/pt-BR/criterios-de-revisao/trilha-3', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 3)',
            header: {
                endereco: 'criterios-de-revisao',
                descricao: 'Faixa de título dos critérios de revisão.'
            }
        }
    ) 
};

exports.trilha4 = function (req, res) { 
    res.render('simposio/2024/pt-BR/criterios-de-revisao/trilha-4', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 4)',
            header: {
                endereco: 'criterios-de-revisao',
                descricao: 'Faixa de título dos critérios de revisão.'
            }
        }
    ) 
};
exports.ensaios = function (req, res) { 
    res.render('simposio/2024/pt-BR/criterios-de-revisao/trilha-5', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Trilha 5)',
            header: {
                endereco: 'criterios-de-revisao',
                descricao: 'Faixa de título dos critérios de revisão.'
            }
        }
    ) 
};

/*exports.labideias = function (req, res) { 
    res.render('simposio/2022/pt-BR/criterios-de-revisao/lab-ideias', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            trabalhos: true,
            titulo: 'Critérios de Revisão (Laboratório de Ideias)'
        }
    ) 
};*/