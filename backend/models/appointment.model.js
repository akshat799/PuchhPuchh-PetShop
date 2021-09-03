const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    animal : {
        type: String,
        required: true,
    },
    service : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
    account :{
            email: {
                type: String,
            },
            account_id: {
                type: String,
            }
        },
    date : {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {timestamps: true});


const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment; 