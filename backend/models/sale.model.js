const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const saleSchema = new Schema ({
    UserId : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required:true,
    }, 
    brandname : {
        type: String,
        required: true,
        lowercase: true
    },
    productname : {
        type: String,
        required: true,
        lowercase: true
    },
    weight: {
        type: String,
    
    },
    animal: {
        type: String
    },
    amount : Number,
    discount: Number,
    total : Number
});

const Sale = mongoose.model('Sale' , saleSchema);

module.exports = Sale;
