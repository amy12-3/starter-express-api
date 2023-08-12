const route = require('express').Router()
const path = require('path')
const nodemailer = require('nodemailer')
const handlebars = require('handlebars')
const fs = require('fs')

route.post('/buyprod',(req,res)=>{
    const emailTemplateSource = fs.readFileSync(
        path.join(__dirname, '/mail.hbs'),'utf8'
    )
    let transporter = {
      service: 'gmail',
      auth: {
        user: 'amethyst3724@gmail.com',
        pass: 'xsnsltxroswwqekp',
      },
    }
    const smtpTransport = nodemailer.createTransport(transporter)
    const template = handlebars.compile(emailTemplateSource)

    const htmlToSend = template({
        userName: req.body.userName,
        productName: req.body.productName,
        amount: req.body.amount,
        creditPoints: req.body.creditPoints,
    })

    const mailOptions = {
      from: 'amethyst3724@gmail.com',
      to: 'ethanmoralesey@gmail.com',
      subject: `Thank you for Ordering`,
      html: htmlToSend,
    }

    smtpTransport.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log('hotmail')
                console.log(err);
            res.sendStatus(400)
            } else {
                res.send(balance)
            }
        });

    res.send("okay")
    })
module.exports=route