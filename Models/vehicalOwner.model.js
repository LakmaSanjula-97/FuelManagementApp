const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

// vehicle owner schema
const ownerSchema = new Schema({

    ownerName : { type : String, required: true },
    VechicalId : { type : String, required: true },
    fuelType : { type : String, required: true },
})

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
