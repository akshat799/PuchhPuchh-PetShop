const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema ({
    UserId : {
        type: String,
        required:true,
    }, 
    brandname : {
        type: String,
        required: true,
        lowercase: true,
        keywords: [{
            type: String
        }]
    },
    productname : {
        type: String,
        required: true,
        lowercase: true
    },
    size : {weight_lbs : String, weight_kg : String },
    amount : Number,
    price : Number
});

const Inventory = mongoose.model('Inventory' , inventorySchema);

module.exports = Inventory;
