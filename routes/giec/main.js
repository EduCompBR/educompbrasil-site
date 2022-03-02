exports.index = function(req, res) { 
    res.render('giec/index', 
        {
            layout: 'giec/layout',
            principal: true,
            titulo: "Principal"
        }
    ) 
};

exports.eventos = function(req, res){ 
    res.render('giec/eventos', 
        {
            layout: 'giec/layout',
            eventos: true,
            titulo: "Eventos"
        }
    ) 
};

exports.documentos = function(req, res){ 
    res.render('giec/documentos', 
        {
            layout: 'giec/layout',
            documentos: true,
            titulo: "Documentos"
        }
    ) 
};

exports.documentos_modelo_educomp = function(req, res){ 
    res.redirect('https://docs.google.com/document/d/1XPsOkjNOw2CcuM2J2ZZKSZlLYNvNBw_O/edit?usp=sharing&ouid=102441951325229597765&rtpof=true&sd=true') 
};