exports.inscricoes = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/inscricoes/inscricoes', {
    layout: 'simposio/2025/pt-BR/layout',
    inscricoes: true,
    isEducomp: true,
    titulo: 'Inscrições',
    header: { titulo: 'Inscrições' },
  })
}

exports.valores_educomp = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/inscricoes/valores-educomp', {
    layout: 'simposio/2025/pt-BR/layout',
    inscricoes: true,
    isEducomp: true,
    titulo: 'Valores EduComp',
    header: { titulo: 'Definir' },
  })
}

exports.valores_sbc_eb = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/inscricoes/valores-sbc-eb', {
    layout: 'simposio/2025/pt-BR/layout',
    inscricoes: true,
    isEducomp: true,
    titulo: 'Valores SBC-EB',
    header: { titulo: 'Definir' },
  })
}

exports.valores_combo = function (req, res) {
  res.render('simposio/2025/comum/pt-BR/inscricoes/valores-combo', {
    layout: 'simposio/2025/pt-BR/layout',
    inscricoes: true,
    isEducomp: true,
    titulo: 'Valores combo',
    header: { titulo: 'Definir' },
  })
}
