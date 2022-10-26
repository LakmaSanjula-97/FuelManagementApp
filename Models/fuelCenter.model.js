const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

// fuel center schema
const fuelCenterSchema = new Schema({

    fuelCenterId : { type : String, required: true },
    fuelCenterName : { type : String, required: true },
    fuelCenterAddress : { type : String, required: true },
    district : { type : String, required: true },
    
})

//mongodb data table name
const FuelCenter = mongoose.model("FuelCenter", fuelCenterSchema);

//export the module
module.exports = FuelCenter;