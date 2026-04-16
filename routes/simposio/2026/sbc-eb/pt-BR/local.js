exports.conheca_cg = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/conheca-campo-grande', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Conheça Campo Grande',
  })
}

exports.conheca_ufms = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/conheca-ufms', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Conheça a UFMS',
  })
}

exports.como_chegar = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/como-chegar', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Como chegar a Campo Grande',
  })
}

exports.onde_hospedar = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/onde-hospedar', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Onde se hospedar em Campo Grande',
  })
}

exports.almocos_e_dicas = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/almocos-e-dicas', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Almoços e dicas',
  })
}

exports.local_evento = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/local/local-evento', {
    layout: 'simposio/2026/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Conheça o local do evento',
  })
}
