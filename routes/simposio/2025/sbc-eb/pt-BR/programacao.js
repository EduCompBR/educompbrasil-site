exports.programacao = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/programacao/programacao', {
    layout: 'simposio/2025/pt-BR/layout',
    chamadas: true,
    isSbceb: true,
    titulo: 'Programação',
    header: { titulo: 'Programação preliminar' },
  })
}