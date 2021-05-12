exports.about = function (req, res) { 
    res.render('simposio/2021/en-US/sobre', 
        {
            layout: 'simposio/2021/en-US/layout', 
            about: true, 
            titulo: "Home"
        }
    ) 
};

exports.topics = function (req, res) { 
    res.render('simposio/2021/en-US/topicos-de-interesse', 
        {
            layout: 'simposio/2021/en-US/layout', 
            topics: true, 
            titulo: "Topics of Interest"
        }
    ) 
};

exports.contributors = function (req, res) { 
    res.render('simposio/2021/en-US/trabalhos', 
        {
            layout: 'simposio/2021/en-US/layout', 
            papers: true, 
            titulo: "Call for Contributions"
        }
    ) 
};

exports.dates = function (req, res) { 
    res.render('simposio/2021/en-US/datas', 
        {
            layout: 'simposio/2021/en-US/layout', 
            dates: true,
            titulo: 'Dates'
        }
    ) 
};

exports.incricoes = function (req, res) { 
    res.render('simposio/2021/en-US/inscricoes', 
        {
            layout: 'simposio/2021/en-US/layout', 
            registrations: true,
            titulo: 'Registrations'
        }
    ) 
};

exports.program = function (req, res) { 
    res.render('simposio/2021/en-US/programacao', 
        {
            layout: 'simposio/2021/en-US/layout', 
            shedule: true,
            titulo: 'Program'
        }
    ) 
};

exports.team = function (req, res) { 
    res.render('simposio/2021/en-US/equipe', 
        {
            layout: 'simposio/2021/en-US/layout', 
            team: true,
            titulo: 'Team'
        }
    ) 
};

exports.committee = function (req, res) { 
    res.render('simposio/2021/en-US/comite-programa', 
        {
            layout: 'simposio/2021/en-US/layout', 
            team: true,
            titulo: 'Program Committee'
        }
    ) 
};

exports.contact = function (req, res) { 
    res.render('simposio/2021/en-US/contato', 
        {
            layout: 'simposio/2021/en-US/layout', 
            contact: true,
            titulo: 'Contact'
        }
    ) 
};

exports.forlic = function (req, res) { 
    res.render('simposio/2021/en-US/forlic', 
        {
            layout: 'simposio/2021/en-US/layout', 
            forlic: true,
            titulo: 'ForLic'
        }
    ) 
};