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

exports.ctd = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/trabalhos/ctd', {
    layout: 'simposio/2025/pt-BR/layout',
    trabalhos: true,
    titulo: 'Concurso de Teses e Dissertações',
  });
};

exports.wtd = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/trabalhos/wtd', {
    layout: 'simposio/2025/pt-BR/layout',
    trabalhos: true,
    titulo: 'Workshop de Teses e Dissertações',
  });
};

exports.minicursos = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/trabalhos/minicursos', {
    layout: 'simposio/2025/pt-BR/layout',
    trabalhos: true,
    titulo: 'Minicursos',
  });
};

exports.mesas = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/trabalhos/mesas-tematicas', {
    layout: 'simposio/2025/pt-BR/layout',
    trabalhos: true,
    titulo: 'Mesas temáticas',
  });
};

exports.laboratorio = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/trabalhos/laboratorio-ideias', {
    layout: 'simposio/2025/pt-BR/layout',
    trabalhos: true,
    titulo: 'Laboratório de ideias',
  });
};