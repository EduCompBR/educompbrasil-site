exports.comite_gestor = function(req, res) { 
    res.render('giec/quem-somos/comite-gestor', 
        {
            layout: 'giec/layout',
            quem_somos: true,
            titulo: "Comitê Gestor (CG)"
        }
    ) 
};

exports.gts = function(req, res){ 
    res.render('giec/quem-somos/gts', 
        {
            layout: 'giec/layout',
            quem_somos: true,
            titulo: "Grupos de Trabalho (GT)"
        }
    ) 
};

exports.membros = function(req, res){ 
    res.render('giec/quem-somos/membros', 
        {
            layout: 'giec/layout',
            quem_somos: true,
            titulo: "Membros"
        }
    ) 
};