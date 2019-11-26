const express = require('express')
require('dotenv').config()
const path = require('path');
const app = express();
const bodyparser = require('body-parser')
const sgMail = require('@sendgrid/mail');
const API_KEY = require('./config/keys');
sgMail.setApiKey(API_KEY);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/api/contact', (req, res) => {
    const { name, email, message, subject } = req.body
    const msg = {
        to: 'matthewrenda14@gmail.com',
        from: email,
        subject: subject,
        text: message,
    };
    sgMail.send(msg);
    console.log("API KEY = " + process.env.Sendgrid);
    console.log(name + ' ' + email + ' ' + message + ' ' + subject)
})



if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

const port = process.env.PORT || 8080;
app.listen(port);