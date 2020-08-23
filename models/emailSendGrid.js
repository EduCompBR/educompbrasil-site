const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function enviarEmail(email, assunto, mensagem) {
    console.log('Enviando email pelo sendgrid!')
    const msg = {
        to: 'harley.ip@gmail.com',
        from: 'educompbr@gmail.com, harley.ip@gmail.com',
        subject: 'assunto2',
        text: 'mensagem2',
        html: '<strong>Equipe EducompBrasil</strong>',
    }
    sgMail.send(msg)
}

module.exports = {enviarEmail}