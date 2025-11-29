exports.conheca_ufms = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/conheca-ufms', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Conheça a UFMS',
  })
}

exports.conheca_cg = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/conheca-cg', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Conheça Campo Grande',
  })
}

exports.como_chegar = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/como-chegar', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Como chegar a Campo Grande',
  })
}

exports.onde_hospedar = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/onde-hospedar', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Onde se hospedar em Campo Grande',
  })
}

exports.local_evento = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/local-evento', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Conheça o local do evento',
  })
}

exports.lugares_visitar = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/lugares-visitar', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Sugestões gastronômicas em Campo Grande',
  })
} 
