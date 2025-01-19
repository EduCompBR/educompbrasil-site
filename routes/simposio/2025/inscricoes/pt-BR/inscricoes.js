exports.inscricoes_gerais = function (req, res) {
  res.render('simposio/2025/inscricoes/pt-BR/inscricoes', {
    layout: 'simposio/2025/educomp/pt-BR/layout',
    principal: true,
    titulo: 'Inscrições',
  });
};

exports.inscricoes_educomp = function (req, res) {
  res.render('simposio/2025/inscricoes/pt-BR/inscricoes-educomp', {
    layout: 'simposio/2025/educomp/pt-BR/layout',
    principal: true,
    titulo: 'Inscrições',
  });
};

exports.inscricoes_combo = function (req, res) {
  res.render('simposio/2025/inscricoes/pt-BR/inscricoes-combo', {
    layout: 'simposio/2025/educomp/pt-BR/layout',
    principal: true,
    titulo: 'Inscrições',
  });
};

exports.inscricoes_sbc_eb = function (req, res) {
  res.render('simposio/2025/inscricoes/pt-BR/inscricoes-sbc-eb', {
    layout: 'simposio/2025/sbc-eb/pt-BR/layout',
    principal: true,
    titulo: 'Inscrições',
  });
};
