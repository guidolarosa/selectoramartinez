import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

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
        transporter.sendMail(msg, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}
