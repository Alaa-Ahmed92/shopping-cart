const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/routes');

const app = express();
app.use(bodyParser.json());
app.use('/', router);

const connectionString = 'mongodb://localhost/react-mern';
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => console.log('Connection Done!'));


const port = 8080;
app.listen(port, () => console.log('Server Running on 8080'));