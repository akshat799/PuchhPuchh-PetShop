const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catalogSchema = new Schema ({
    UserId : {
        type: String,
        required: true,
    },
    brandname : {
        type: String,
        required: true,
        lowercase: true,
    },
    productname : {
        type: String,
        required: true,
        lowercase: true
    },
    category : {
        type : String,
        required: true,
        lowercase: true
    },
    animal : {
        type : String,
        required: true,
        lowercase: true
    },
    path : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required : true
    }
});


const Catalog = mongoose.model('Catalog',catalogSchema);

module.exports = Catalog;

