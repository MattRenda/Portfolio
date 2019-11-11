const express = require('express')
const path = require('path');
const app = express();
const bodyparser = require('body-parser')

app.use(bodyparser.json());

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
    
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
    });

}
const port = process.env.PORT || 8080;
app.listen(port);