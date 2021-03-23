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