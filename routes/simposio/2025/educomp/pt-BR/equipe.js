exports.comissao_organizadora = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/equipe/comissao-organizadora', {
    layout: 'simposio/2025/educomp/pt-BR/layout',
    equipe: true,
    titulo: 'Comissão Organizadora',
  });
};

exports.comite_programa = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/equipe/comite-programa', {
    layout: 'simposio/2025/educomp/pt-BR/layout',
    equipe: true,
    titulo: 'Comitê de Programa',
  });
};

exports.comite_diretivo = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/equipe/comite-diretivo', {
    layout: 'simposio/2025/educomp/pt-BR/layout',
    equipe: true,
    titulo: 'Comitê Diretivo',
  });
};

exports.comissao_especial = function (req, res) {
  res.render('simposio/2025/educomp/pt-BR/equipe/comissao-especial', {
    layout: 'simposio/2025/educomp/pt-BR/layout',
    equipe: true,
    titulo: 'Comissão Especial',
  });
};
