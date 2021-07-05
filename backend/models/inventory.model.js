const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema ({
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
    size : [{weight_lbs : String, weight_kg : String }],
    amount : Number
});

const Inventory = mongoose.model('Inventory' , inventorySchema);

module.exports = Inventory;
