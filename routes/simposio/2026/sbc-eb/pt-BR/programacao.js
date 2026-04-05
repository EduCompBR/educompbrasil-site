exports.campo_grande = function (req, res) {
  res.render('simposio/2026/sbc-eb/pt-BR/programacao/campo-grande', {
    layout: 'simposio/2026/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação Campo Grande - MS',
  })
}