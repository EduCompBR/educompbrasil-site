exports.inscricoes = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/inscricoes', {
    layout: 'simposio/2025/pt-BR/layout',
    inscricoes: true,
    isEducomp: true,
    titulo: 'Inscrições',
  })
}