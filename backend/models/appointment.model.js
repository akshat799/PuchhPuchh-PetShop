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
    account : [
        {
            email: {
                type: String,
                required: true
            },
            account_id: {
                type: String,
                required: true
            }
        }],
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