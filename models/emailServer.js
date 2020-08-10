const nodemailer = require('nodemailer')
const nodemailerMailgun = require('nodemailer-mailgun-transport')
require('dotenv').config()

function enviarEmail(email1, assunto1, mensagem1) {

    const auth = {
        auth: {
            api_key: '8d20eb9797e143d05ddb864226322193-07e45e2a-a2c32b51',
            domain: 'sandboxc0c2fd3701a141a6b02ea799e58991c8.mailgun.org',
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
