exports.campo_grande = function (req, res) {
  res.render('simposio/2026/sbc-eb/pt-BR/programacao/campo-grande', {
    layout: 'simposio/2026/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação Campo Grande - MS',
  })
}

exports.porto_alegre = function (req, res) {
  res.render('simposio/2026/sbc-eb/pt-BR/programacao/porto-alegre', {
    layout: 'simposio/2026/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação Porto Alegre - RS',
  })
}

exports.maraba = function (req, res) {
  res.render('simposio/2026/sbc-eb/pt-BR/programacao/maraba', {
    layout: 'simposio/2026/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação Marabá - PA',
  })
}

exports.sao_carlos = function (req, res) {
  res.render('simposio/2026/sbc-eb/pt-BR/programacao/sao-carlos', {
    layout: 'simposio/2026/pt-BR/layout',
    programacao: true,
    isSbceb: true,
    titulo: 'Programação São Carlos - SP',
  })
}