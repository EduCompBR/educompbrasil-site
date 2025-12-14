exports.comming = function (req, res) {
  res.render('simposio/2026/sbc-eb/pt-BR/comming', {
    layout: 'simposio/2026/pt-BR/layout',
    home: true,
    isSbceb: true,
    titulo: 'Em breve',
  })
}