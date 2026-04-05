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