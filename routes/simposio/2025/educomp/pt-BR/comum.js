exports.fotos_evento = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/fotos-evento', {
    layout: 'simposio/2025/pt-BR/layout',
    local: true,
    isEducomp: true,
    titulo: 'Fotos do evento',
    header: { titulo: 'Fotos do evento' },
  })
}