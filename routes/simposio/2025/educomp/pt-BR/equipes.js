exports.comissao_organizadora = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/equipes/comissao-organizadora', {
    layout: 'simposio/2025/pt-BR/layout',
    equipes: true,
    isEducomp: true,
    titulo: 'Comissão organizadora',
  })
}

exports.comite_programa = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/equipes/comite-programa', {
    layout: 'simposio/2025/pt-BR/layout',
    equipes: true,
    isEducomp: true,
    titulo: 'Comitê de programa',
  })
}

exports.comite_diretivo = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/equipes/comite-diretivo', {
    layout: 'simposio/2025/pt-BR/layout',
    equipes: true,
    isEducomp: true,
    titulo: 'Comitê diretivo',
  })
}

exports.comissao_especial = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/equipes/comissao-especial', {
    layout: 'simposio/2025/pt-BR/layout',
    equipes: true,
    isEducomp: true,
    titulo: 'Comissão especial',
  })
}
