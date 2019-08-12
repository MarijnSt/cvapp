const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

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

    //transporter
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'cvmarijn@gmail.com', //process.env.ACC
            pass: 'tetten666' //process.env.PASS 
        }
    })

    //mailoptions
    let mailOptions = {
        from: '"CV Site" <cvmarijn@gmail.com>',
        to: 'marijn.stammeleer@gmail.com',
        subject: 'New message from cv site',
        html: output
    }

    // send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log("Message sent: %s", info.messageId);
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server started on ${PORT}...`)
})