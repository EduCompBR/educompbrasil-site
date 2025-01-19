exports.inscricoes_gerais = function (req, res) {
  res.render('simposio/2025/inscricoes/pt-BR/inscricoes', {
    layout: 'simposio/2025/educomp/pt-BR/layout',
    inscricoes: true,
    titulo: 'Inscrições',
  });
};

exports.inscricoes_educomp = function (req, res) {
  res.render('simposio/2025/inscricoes/pt-BR/inscricoes-educomp', {
    layout: 'simposio/2025/educomp/pt-BR/layout',
    inscricoes: true,
    titulo: 'Inscrições EduComp',
  });
};

exports.inscricoes_educomp_combo = function (req, res) {
  res.render('simposio/2025/inscricoes/pt-BR/inscricoes-combo', {
    layout: 'simposio/2025/educomp/pt-BR/layout',
    inscricoes: true,
    titulo: 'Inscrições EduComp e SBC-EB',
  });
};

exports.inscricoes_sbc_eb = function (req, res) {
  res.render('simposio/2025/inscricoes/pt-BR/inscricoes-sbc-eb', {
    layout: 'simposio/2025/sbc-eb/pt-BR/layout',
    inscricoes: true,
    titulo: 'Inscrições SBC-EB',
  });
};

exports.inscricoes_sbc_eb_combo = function (req, res) {
  res.render('simposio/2025/inscricoes/pt-BR/inscricoes-combo', {
    layout: 'simposio/2025/sbc-eb/pt-BR/layout',
    inscricoes: true,
    titulo: 'Inscrições SBC-EB e EduComp',
  });
};
