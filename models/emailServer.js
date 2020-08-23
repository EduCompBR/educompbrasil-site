const nodemailer = require('nodemailer')
require('dotenv').config()

function enviarEmail(email1, assunto1, mensagem1) {
    console.log(email1, assunto1, mensagem1)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'educompbr@gmail.com',
            pass: process.env.EMAIL_PASS,
        }
    })
    
    let mailOptions = {
        from: 'educompbr@gmail.com',
        to: 'educompbr@gmail.com',
        subject: assunto1,
        html: `<strong>${email1}</strong><p>Mensagem:</p> <p>${mensagem1}</p> `
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
