exports.geral = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/programacao/geral', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Programação geral',
  })
}

exports.jantar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/programacao/jantar', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Jantar do evento',
  })
}

exports.fotos = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/programacao/fotos', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Fotos do evento',
  })
}

exports.presencial = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/programacao/presencial', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Programação presencial',
  })
}

exports.palestras_nacionais = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/programacao/palestras-nacionais', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Palestras nacionais',
  })
}

exports.sessoes_tecnicas = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/programacao/sessoes-tecnicas', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Sessões técnicas',
  })
}

exports.online = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/programacao/online', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Programação online',
  })
}

exports.minicursos = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/programacao/minicursos', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Minicursos',
  })
}