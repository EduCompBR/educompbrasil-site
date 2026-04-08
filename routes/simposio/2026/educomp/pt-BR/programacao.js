exports.geral = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/programacao/geral', {
    layout: 'simposio/2026/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Programação geral',
  })
}

exports.presencial = function (req, res) {
  res.render('simposio/2026/educomp/pt-BR/programacao/presencial', {
    layout: 'simposio/2026/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Programação presencial',
  })
}

exports.minicursos = function (req, res) {
  res.render('simposio/2026/educomp/pt-BR/programacao/minicursos', {
    layout: 'simposio/2026/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Minicursos',
  })
}

exports.laboratorio_ideias = function (req, res) {
  res.render('simposio/2026/educomp/pt-BR/programacao/laboratorio-ideias', {
    layout: 'simposio/2026/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Laboratório de ideias',
  })
}

exports.sessoes_tecnicas = function (req, res) {
  res.render('simposio/2026/educomp/pt-BR/programacao/sessoes-tecnicas', {
    layout: 'simposio/2026/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Sessões técnicas',
  })
}