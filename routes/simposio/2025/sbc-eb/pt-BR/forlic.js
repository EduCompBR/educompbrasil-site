exports.sobre = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/forlic/sobre', {
    layout: 'simposio/2025/pt-BR/layout',
    forlic: true,
    isSbceb: true,
    titulo: 'Fórum das Licenciaturas em Computação',
  })
}

exports.programacao = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/forlic/programacao', {
    layout: 'simposio/2025/pt-BR/layout',
    forlic: true,
    isSbceb: true,
    titulo: 'Programação ForLic',
  })
}
