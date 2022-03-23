const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/routes');
const orderRouter = require('./routes/orderRoutes');
const db = require('./config/db');

const app = express();
app.use(bodyParser.json());
app.use('/', productRouter);
app.use('/', orderRouter);

// DB
db();


const port = 8080;
app.listen(port, () => console.log('Server Running on 8080'));