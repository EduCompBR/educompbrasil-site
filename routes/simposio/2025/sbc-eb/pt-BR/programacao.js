exports.geral = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/programacao/geral', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação geral',
  })
}

exports.juiz_de_fora = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/programacao/juiz-de-fora', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação Juiz de Fora - MG',
  })
}

exports.bandeirantes = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/programacao/bandeirantes', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação Bandeirantes - PR',
  })
}

exports.campo_grande = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/programacao/campo-grande', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação Campo Grande - MS',
  })
}

exports.itacoatiara = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/programacao/itacoatiara', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação Itacoatiara - AM',
  })
}

exports.salvador = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/programacao/salvador', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação Salvador - BA',
  })
}

exports.sessoes_tecnicas = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/programacao/sessoes-tecnicas', {
    layout: 'simposio/2025/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Sessões técnicas',
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