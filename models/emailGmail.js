const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

function enviarEmail(email, assunto, mensagem) {
    const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
        user: 'apikey',
        pass: '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'
    }
    });

    const mailOptions = {
    from: 'harley.ip@gmail.com',
    to: 'educompbr@gmail.com',
    subject: 'teste email',
    text: 'texto do email'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error)
    } else {
        console.log('Email sent: ' + info.response)
    }
    })
}

module.exports = {enviarEmail}
