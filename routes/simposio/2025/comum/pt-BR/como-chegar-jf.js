exports.como_chegar_jf_educomp = function (req, res) {
    res.render('simposio/2025/comum/pt-BR/local/como-chegar-jf', {
      layout: 'simposio/2025/educomp/pt-BR/layout',
      titulo: 'Como Chegar em Juiz de Fora',
    });
};
  
exports.como_chegar_jf_sbc = function (req, res) {
    res.render('simposio/2025/comum/pt-BR/local/como-chegar-jf', {
      layout: 'simposio/2025/sbc-eb/pt-BR/layout',
      titulo: 'Como Chegar em Juiz de Fora',
    });
};
