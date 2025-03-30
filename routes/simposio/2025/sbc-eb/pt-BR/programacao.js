exports.geral = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/programacao/geral', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação geral',
  })
}

exports.sede = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/programacao/sede', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação Juiz de Fora - MG',
  })
}

exports.jantar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/programacao/jantar', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Jantar do evento',
  })
}