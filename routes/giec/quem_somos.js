exports.comite_gestor = function(req, res) { 
    res.render('giec/quem-somos/comite-gestor', 
        {
            layout: 'giec/layout',
            quem_somos: true,
            titulo: "Comitê Gestor"
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