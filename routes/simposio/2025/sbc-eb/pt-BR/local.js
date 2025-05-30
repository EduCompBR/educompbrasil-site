exports.conheca_ufjf = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/conheca-ufjf', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Conheça a UFJF',
  })
}

exports.conheca_jf = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/conheca-jf', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Conheça Juiz de Fora',
  })
}

exports.como_chegar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/como-chegar', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Como chegar a Juiz de Fora',
  })
}

exports.onde_hospedar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/onde-hospedar', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Onde se hospedar em Juiz de Fora',
  })
}

exports.local_evento = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/local-evento', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Conheça o local do evento',
  })
}

exports.lugares_visitar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/lugares-visitar', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Sugestões gastronômicas em Juiz de Fora',
  })
}

exports.polo_itacoatiara = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/polos/itacoatiara', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Polo Itacoatiara - AM',
  })
}

exports.polo_salvador = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/polos/salvador', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Polo Salvador - BA',
  })
}

exports.polo_campo_grande = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/polos/campo-grande', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Polo Campo Grande - MS',
  })
}

exports.polo_bandeirantes = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/polos/bandeirantes', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Polo Bandeirantes - PR',
  })
}
