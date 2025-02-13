exports.forlic = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/chamadas/forlic', {
    layout: 'simposio/2025/layout',
    forlic: true,
    isSbceb: true,
    titulo: 'Forlic',
    header: { titulo: 'Fórum das Licenciaturas em Computação' },
  })
}