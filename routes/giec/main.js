exports.index = function(req, res) { 
    res.render('giec/index', 
        {
            layout: 'giec/layout',
            principal: true,
            titulo: "Principal"
        }
    ) 
};

exports.sobre = function(req, res){ 
    res.render('giec/sobre', 
        {
            layout: 'giec/layout',
            sobre: true,
            titulo: "Sobre"
        }
    ) 
};