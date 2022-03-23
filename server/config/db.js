const mongoose = require('mongoose');

function db() {
    const connectionString = 'mongodb://localhost/react-mern';
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(res => console.log('Connection Done!'));
};

module.exports = db;