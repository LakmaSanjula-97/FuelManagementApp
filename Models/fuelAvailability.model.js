const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

// fuel availability schema
const fuelAvailabilitySchema = new Schema({

    userNames : { type : String, required: true },
    flueCenterId : { type : String, required: true },
    flueCenterName : { type : String, required: true },
    PetrolAvailable : { type : String, required: true },
    Dieselvailable : { type : String, required: true },
    FinishlTime : { type : String, required: true },
    ArrivalTime : { type : String, required: true },
})

const FuelAvailability = mongoose.model("FuelAvailability", fuelAvailabilitySchema);

module.exports = FuelAvailability;
