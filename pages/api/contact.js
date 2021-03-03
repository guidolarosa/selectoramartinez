import nodemailer from "nodemailer";
import mg from 'nodemailer-mailgun-transport';

console.log(process.env.MAIL_USER)
console.log(process.env.MAIL_PASS)

const auth = {
    auth: {
        api_key: process.env.MAIL_PASS,
        domain: process.env.MAIL_USER
    }
}

let nodemailerMailgun = nodemailer.createTransport(mg(auth));

export default async (req, res) => {
    const { email, name, zone, phone, message, recipientMail } = req.body
    // Check if fields are all filled
    if (email === "" || name === "" || phone === "" || zone === "" || message === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }

    const mailerRes = await mailer({ email, name, zone, phone, message, recipientMail })
    res.send(mailerRes)
}

const mailer = ({ email, name, zone, phone, message, recipientMail }) => {
    const from = name && email? `${name} <${email}>` : `${name || senderMail}`
    const msg = {
        from,
        to: `${'selectoramartinez@gmail.com'}`,
        subject: `Nuevo mensaje de ${from}`,
        text: message,
        replyTo: from,
        html: `<h2>Ha ingresado un nuevo mensaje a través de la web</h2><p>${message}</p>`
    }

    return new Promise((resolve, reject) => {
        nodemailerMailgun.sendMail(msg, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}
