exports.home = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/home', {
    layout: 'simposio/2025/layout',
    home: true,
    isEducomp: false,
    titulo: 'Home',
  })
}
