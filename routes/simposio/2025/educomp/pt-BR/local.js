exports.conheca_ufjf = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/conheca-ufjf', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Conheça a UFJF',
    header: { titulo: 'Conheça a UFJF' },
  })
}

exports.conheca_jf = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/conheca-jf', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Conheça Juiz de Fora',
    header: { titulo: 'Conheça Juiz de Fora' },
  })
}

exports.como_chegar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/como-chegar', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Como chegar a Juiz de Fora',
    header: { titulo: 'Como chegar a Juiz de Fora' },
  })
}

exports.onde_hospedar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/onde-hospedar', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Onde se hospedar em Juiz de Fora',
    header: { titulo: 'Onde se hospedar em Juiz de Fora' },
  })
}

exports.local_evento = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/local-evento', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Conheça o local do evento',
    header: { titulo: 'Conheça o local do evento' },
  })
}