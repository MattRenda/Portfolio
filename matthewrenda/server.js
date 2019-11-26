const express = require('express')
require('dotenv').config()
const path = require('path');
const app = express();
const bodyparser = require('body-parser')
const sgMail = require('@sendgrid/mail');
const key = require('./config/keys')
sgMail.setApiKey(key.Sendgrid);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/api/contact', (req, res) => {
    const { name, email, message, subject } = req.body
    
    const msg = {
        to: 'matthewjrenda@gmail.com',
        from: email,
        subject: name + ' ' + subject,
        text: message,
    };
    sgMail.send(msg);

    console.log(name + ' ' + email + ' ' + message + ' ' + subject)
    console.log("API KEY = " + key.Sendgrid);
    return (res.send(key.Sendgrid))
})



if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

const port = process.env.PORT || 8080;
app.listen(port);