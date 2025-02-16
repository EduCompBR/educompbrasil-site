exports.conheca_jf = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/conheca-jf', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Conheça Juiz de Fora',
    header: { titulo: 'Juiz de Fora - MG' },
  })
}

exports.como_chegar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/como-chegar', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Como chegar a Juiz de Fora',
    header: { titulo: 'Como chegar a Juiz de Fora' },
  })
}

exports.onde_hospedar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/onde-hospedar', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Onde se hospedar em Juiz de Fora',
    header: { titulo: 'Onde se hospedar em Juiz de Fora' },
  })
}

exports.local_evento = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/local-evento', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isSbceb: true,
    titulo: 'Local do evento - UFJF',
    header: { titulo: 'Local do evento - UFJF' },
  })
}
