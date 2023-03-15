/*exports.programacao = function (req, res) { 
    res.render('simposio/2022/pt-BR/programacao/index', 
        {
            //layout: 'simposio/2022/pt-BR/layout', 
            prog: true,
            prog_educomp: true,
            titulo: 'Programação',
            header: {
                endereco: 'programacao',
                descricao: 'Faixa de título da programação.'
            }
        }
    ) 
};*/

exports.esquenta_1 = function (req, res) { 
    res.render('simposio/2023/pt-BR/programacao/esquenta/primeiro', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            sobre: true,
            titulo: 'I Esquenta EduComp 2023',
            header: {
                endereco: 'esquenta-1',
                descricao: 'Faixa de título do I Esquenta EduComp 2023.'
            }
        }
    ) 
};

exports.esquenta_2 = function (req, res) { 
    res.render('simposio/2023/pt-BR/programacao/esquenta/segundo', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            sobre: true,
            titulo: 'II Esquenta EduComp 2023',
            header: {
                endereco: 'esquenta-2',
                descricao: 'Faixa de título do II Esquenta EduComp 2023.'
            }
        }
    ) 
};

/*exports.esquenta_2 = function (req, res) { 
    res.render('simposio/2022/pt-BR/programacao/esquenta/segundo', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            prog: true,
            titulo: 'II Esquenta EduComp 2022',
            header: {
                endereco: 'esquenta-2',
                descricao: 'Faixa de título do II Esquenta EduComp 2022.'
            }
        }
    ) 
};*/

/*
exports.esquenta_2 = function (req, res) { 
    res.render('simposio/2021/pt-BR/programacao/esquenta/segundo', 
        {
            layout: 'simposio/2021/pt-BR/layout', 
            prog: true,
            titulo: 'Esquenta'
        }
    ) 
};*/