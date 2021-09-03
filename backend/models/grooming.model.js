const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groomingSchema = new Schema ({
    animal:{
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String
    }
});


const Grooming = mongoose.model('Grooming', groomingSchema);

module.exports = Grooming;