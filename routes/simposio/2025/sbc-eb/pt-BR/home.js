exports.home = function (req, res) {
  res.render('simposio/2025/sbc-eb/pt-BR/home', {
    layout: 'simposio/2025/pt-BR/layout',
    home: true,
    isSbceb: true,
    titulo: 'Home',
  })
}

exports.camisas = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/camisas', {
    layout: 'simposio/2025/pt-BR/layout',
    home: true,
    isSbceb: true,
    titulo: 'Camisas do evento',
  })
}
