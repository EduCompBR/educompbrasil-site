exports.como_chegar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/como-chegar-jf', {
    layout: 'simposio/2025/layout',
    local: true,
    isSbceb: true,
    titulo: 'Como chegar',
    header: { titulo: 'Definir' },
  })
}

exports.onde_hospedar = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/onde-hospedar', {
    layout: 'simposio/2025/layout',
    local: true,
    isSbceb: true,
    titulo: 'Onde se hospedar',
    header: { titulo: 'Definir' },
  })
}

exports.conheca_jf = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/conheca-jf', {
    layout: 'simposio/2025/layout',
    local: true,
    isSbceb: true,
    titulo: 'Conheça Juiz de Fora',
    header: { titulo: 'Definir' },
  })
}

exports.conheca_ufjf = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/local/conheca-ufjf', {
    layout: 'simposio/2025/layout',
    local: true,
    isSbceb: true,
    titulo: 'Conheça a UFJF',
    header: { titulo: 'Definir' },
  })
}
