exports.trabalhos = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/chamadas/trabalhos', {
    layout: 'simposio/2025/pt-BR/layout',
    chamadas: true,
    isSbceb: true,
    titulo: 'Chamadas de trabalhos',
    header: { titulo: 'Chamada de trabalhos' },
  })
}