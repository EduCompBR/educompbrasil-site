exports.programacao = function (req, res) { 
    res.render('simposio/2022/pt-BR/programacao/index', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            prog: true,
            prog_educomp: true,
            titulo: 'Programação'
        }
    ) 
};

exports.esquenta_1 = function (req, res) { 
    res.render('simposio/2022/pt-BR/programacao/esquenta/primeiro', 
        {
            layout: 'simposio/2022/pt-BR/layout', 
            prog: true,
            titulo: 'Esquenta'
        }
    ) 
};

exports.prog_prov_educomp = function (req, res) { 
    res.render('simposio/2022/pt-BR/programacao/prog-prov-educomp', 
        {
            //layout: 'simposio/2022/pt-BR/layout', 
            prog: true,
            prog_educomp: true,
            titulo: 'Programação'
        }
    ) 
};
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