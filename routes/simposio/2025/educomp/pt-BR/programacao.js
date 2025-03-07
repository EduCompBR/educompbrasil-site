exports.geral = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/programacao/geral', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Programação geral',
    header: { titulo: 'Programação geral (preliminar)' },
  })
}

exports.jantar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/programacao/jantar', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Jantar do evento',
    header: { titulo: 'Jantar do evento (por adesão)' },
  })
}

exports.fotos = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/programacao/fotos', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Fotos do evento',
    header: { titulo: 'Fotos do evento' },
  })
}

exports.palestras = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/programacao/palestras', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Palestras',
    header: { titulo: 'Palestras' },
  })
}
