const nodemailer = require('nodemailer')
const nodemailerMailgun = require('nodemailer-mailgun-transport')
require('dotenv').config()

function enviarEmail(email1, assunto1, mensagem1) {

    const auth = {
        auth: {
            api_key: process.env.API_KEY,
            domain: process.env.DOMAIN,
        }
    }

    let transporter = nodemailer.createTransport( nodemailerMailgun(auth) )
    
    let mailOptions = {
        from: email1,
        to: 'educompbr@gmail.com',
        subject: assunto1,
        text: mensagem1
    }
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log('Erro ocorreu', err)
        } else {
            console.log('Email enviado')
        }
    })
}

module.exports = {enviarEmail}
