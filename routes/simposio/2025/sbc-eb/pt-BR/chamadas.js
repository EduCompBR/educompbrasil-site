exports.trabalhos = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/chamadas/trabalhos', {
    layout: 'simposio/2025/layout',
    chamadas: true,
    isEducomp: false,
    titulo: 'Chamadas de trabalhos',
  })
}
