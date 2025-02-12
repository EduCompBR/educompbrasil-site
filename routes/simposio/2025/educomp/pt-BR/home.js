exports.home = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/home', {
    layout: 'simposio/2025/layout',
    home: true,
    isEducomp: true,
    titulo: 'Home',
  })
}
