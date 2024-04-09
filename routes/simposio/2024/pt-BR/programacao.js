exports.programacao = function (req, res) { 
    res.render('simposio/2024/pt-BR/programacao/educomp/index', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            prog: true,
            prog_educomp: true,
            titulo: 'Programação',
            header: {
                endereco: 'programacao',
                descricao: 'Faixa de título da programação.'
            }
        }
    ) 
};

exports.programacao_manha = function (req, res) { 
    res.render('simposio/2024/pt-BR/programacao/educomp/manha', 
        {
            //layout: 'simposio/2022/pt-BR/layout', 
            prog: true,
            prog_educomp: true,
            titulo: 'Programação da Manhã',
            header: {
                endereco: 'programacao-manha',
                descricao: 'Faixa de título da programação do turno da manhã.'
            }
        }
    ) 
};

exports.programacao_tarde = function (req, res) { 
    res.render('simposio/2024/pt-BR/programacao/educomp/tarde', 
        {
            //layout: 'simposio/2022/pt-BR/layout', 
            prog: true,
            prog_educomp: true,
            titulo: 'Programação da Tarde',
            header: {
                endereco: 'programacao-tarde',
                descricao: 'Faixa de título da programação do turno da tarde.'
            }
        }
    ) 
};

exports.esquenta_1 = function (req, res) { 
    res.render('simposio/2024/pt-BR/programacao/esquenta/primeiro', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            sobre: true,
            titulo: 'I Esquenta EduComp 2024',
            header: {
                endereco: 'esquenta-1',
                descricao: 'Faixa de título do I Esquenta EduComp 2024.'
            }
        }
    ) 
};

exports.esquenta_2 = function (req, res) { 
    res.render('simposio/2024/pt-BR/programacao/esquenta/segundo', 
        {
            layout: 'simposio/2024/pt-BR/layout', 
            sobre: true,
            titulo: 'II Esquenta EduComp 2024',
            header: {
                endereco: 'esquenta-2',
                descricao: 'Faixa de título do II Esquenta EduComp 2024.'
            }
        }
    ) 
}; 
