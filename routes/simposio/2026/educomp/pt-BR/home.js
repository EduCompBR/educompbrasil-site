exports.home = function (req, res) {
  res.render('simposio/2026/educomp/pt-BR/home', {
    layout: 'simposio/2026/pt-BR/layout',
    home: true,
    isEducomp: true,
    titulo: 'Home',
  })
}

exports.camisas = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/camisas', {
    layout: 'simposio/2026/pt-BR/layout',
    home: true,
    isEducomp: true,
    titulo: 'Camisas do evento',
  })
}
