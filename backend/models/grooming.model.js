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
    }
});


const Grooming = mongoose.model('Grooming', groomingSchema);

module.exports = Grooming;