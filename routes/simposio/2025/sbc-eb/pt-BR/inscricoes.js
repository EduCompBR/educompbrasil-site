exports.inscricoes = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/inscricoes/inscricoes', {
    layout: 'simposio/2025/layout',
    inscricoes: true,
    isEducomp: false,
    titulo: 'Inscrições',
  })
}

exports.valores_educomp = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/inscricoes/valores-educomp', {
    layout: 'simposio/2025/layout',
    inscricoes: true,
    isEducomp: false,
    titulo: 'Valores EduComp',
  })
}

exports.valores_sbc_eb = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/inscricoes/valores-sbc-eb', {
    layout: 'simposio/2025/layout',
    inscricoes: true,
    isEducomp: false,
    titulo: 'Valores SBC-EB',
  })
}

exports.valores_combo = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/inscricoes/valores-combo', {
    layout: 'simposio/2025/layout',
    inscricoes: true,
    isEducomp: false,
    titulo: 'Valores combo',
  })
}
