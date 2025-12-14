exports.home = function (req, res) {
  res.render('simposio/2026/sbc-eb/pt-BR/home', {
    layout: 'simposio/2026/pt-BR/layout',
    home: true,
    isSbceb: true,
    titulo: 'Home',
  })
}