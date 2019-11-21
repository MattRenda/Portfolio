const express = require('express')
const path = require('path');
const app = express();
const bodyparser = require('body-parser')
const sgMail = require('@sendgrid/mail');
const key = require('./config/dev')
sgMail.setApiKey('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');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/api/contact', (req, res) => {
    const {name,email,message,subject} = req.body
    const msg = {
        to: 'matthewrenda14@gmail.com',
        from: email,
        subject: subject,
        text: message,
      };
      sgMail.send(msg);
  console.log(name + ' ' + email + ' ' + message + ' ' +subject)
})



if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

const port = process.env.PORT || 8080;
app.listen(port);