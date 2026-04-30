exports.comissao_organizadora = function (req, res) {
  res.render('simposio/2026/sbc-eb/pt-BR/equipes/comissao-organizadora', {
    layout: 'simposio/2026/pt-BR/layout',
    equipes: true,
    isSbceb: true,
    titulo: 'Comissão organizadora',
  })
}

exports.comite_programa = function (req, res) {
  res.render('simposio/2026/sbc-eb/pt-BR/equipes/comite-programa', {
    layout: 'simposio/2026/pt-BR/layout',
    equipes: true,
    isSbceb: true,
    titulo: 'Comitê de programa',
  })
}
