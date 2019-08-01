const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

const clientID = "914935273305-rf37n2gnb7bhavkauqudp051nkfj4ufk.apps.googleusercontent.com"
const cSecret = "LpvxkYEf29Ddo6HmfUDQ5dDb"
const refreshT = "1/7FfOGD5CqDzRWiLBJhxwXVbFFhA0Fu7nDorYYlsa5fI"
const accessT = "ya29.GltWBx0RzFa38WLj_xP-nGzxkSpnFUdED2xqr5CmNi8QzPYBZDAO_35cpg00eWA_BRR8MIGe37WUaZ3HsKSLN65p1qWGh9BWNPtH_waxZgvYxtAN6t2Q2ciEBPhk"

app.use(express.static('build'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Get form data and construct output
app.post('/send', (req, res) => {
    console.log(req.body)
    const output = `
        <p>You have a new message</p>
        <h3>Contact info</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>E-mail: ${req.body.mail}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `
    console.log(output)
    res.json(req.body)

    // //transporter
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         type: 'oauth2',
    //         user: 'cvmarijn@gmail.com',
    //         clientId: clientID,
    //         clientSecret: cSecret,
    //         refreshToken: refreshT,
    //         accessToken: accessT
    //     }
    // })

    // //mailoptions
    // let mailOptions = {
    //     from: '"CV Site" <cvmarijn@gmail.com>',
    //     to: 'marijn.stammeleer@gmail.com',
    //     subject: 'New message on cv site',
    //     html: output
    // }

    // // send mail
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log("Message sent: %s", info.messageId);
    //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server started on ${PORT}...`)
})