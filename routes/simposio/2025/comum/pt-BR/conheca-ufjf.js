exports.conheca_ufjf_educomp = function (req, res) {
    res.render('simposio/2025/comum/pt-BR/local/conheca-ufjf', {
      layout: 'simposio/2025/educomp/pt-BR/layout',
      inscricoes: true,
      titulo: 'Conheça a UFJF',
    });
};
  
exports.conheca_ufjf_sbc_eb = function (req, res) {
    res.render('simposio/2025/comum/pt-BR/local/conheca-ufjf', {
      layout: 'simposio/2025/sbc-eb/pt-BR/layout',
      inscricoes: true,
      titulo: 'Conheça a UFJF',
    });
};
 