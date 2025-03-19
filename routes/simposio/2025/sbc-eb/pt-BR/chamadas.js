exports.trabalhos = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/chamadas/trabalhos', {
    layout: 'simposio/2025/pt-BR/layout',
    chamadas: true,
    isSbceb: true,
    titulo: 'Chamadas de trabalhos',
    header: { titulo: 'Chamada de trabalhos' },
  })
}

exports.aceitos = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/chamadas/trabalhos-aceitos', {
    layout: 'simposio/2025/pt-BR/layout',
    chamadas: true,
    isSbceb: true,
    titulo: 'Trabalhos aceitos',
    header: { titulo: 'Trabalhos aceitos' },
  })
}

exports.orientacoes_apresentacao = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/chamadas/orientacoes-apresentacao', {
    layout: 'simposio/2025/pt-BR/layout',
    chamadas: true,
    isSbceb: true,
    titulo: 'Orientações para apresentação',
    header: { titulo: 'Orientações para apresentação' },
  })
}