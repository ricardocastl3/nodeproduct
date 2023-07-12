
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    }
})

const ProductModel = mongoose.model("Product", productSchema)

module.exports = ProductModel;