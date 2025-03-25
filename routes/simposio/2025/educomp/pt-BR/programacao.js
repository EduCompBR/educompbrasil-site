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
    header: { titulo: 'Jantar do evento' },
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

exports.palestras_nacionais = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/programacao/palestras-nacionais', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Palestras nacionais',
    header: { titulo: 'Palestras nacionais' },
  })
}

exports.sessoes_tecnicas = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/programacao/sessoes-tecnicas', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Sessões técnicas',
    header: { titulo: 'Sessões técnicas' },
  })
}

exports.online = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/programacao/online', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Atividades online',
    header: { titulo: 'Atividades online' },
  })
}

exports.informacoes_minicursos = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/programacao/informacoes-minicursos', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isEducomp: true,
    titulo: 'Detalhes dos Minicursos',
    header: { titulo: 'Detalhes dos Minicursos' },
  })
}