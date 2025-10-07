exports.comming = function (req, res) {
  res.render('simposio/2026/educomp/pt-BR/comming', {
    layout: 'simposio/2026/pt-BR/layout',
    home: true,
    isEducomp: true,
    titulo: 'Em breve',
  })
}