const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

// fuel queue schema
const queueSchema = new Schema({

    flueCenterName : { type : String, required: true }, 
    vehicleId : { type : String, required: true },
    OwnerName : { type : String, required: true },
    fuelType : { type : String, required: true },
    inTime : { type : Date, default: new Date().toISOString() },
    outTime: { type : Date, default: new Date().toISOString() },
    waitingTime:{ type : Number, required: false },
})

const Queue = mongoose.model("Queue", queueSchema);

module.exports = Queue; 
