const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catalogSchema = new Schema ({
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
    }
});


const Catalog = mongoose.model('Catalog',catalogSchema);

module.exports = Catalog;

