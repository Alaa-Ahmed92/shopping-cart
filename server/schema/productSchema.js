const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    desc: String,
    price: Number,
    sizes: [String]
});

module.exports = productSchema;