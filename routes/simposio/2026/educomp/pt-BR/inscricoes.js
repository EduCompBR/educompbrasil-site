exports.inscricoes = function (req, res) {
  res.render('simposio/2026/comum/pt-BR/inscricoes', {
    layout: 'simposio/2026/pt-BR/layout',
    inscricoes: true,
    isEducomp: true,
    titulo: 'Inscrições',
  })
}