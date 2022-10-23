const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

const queueSchema = new Schema({

    flueCenterName : {
        type : String,
        required: true
    },
    vehicleId : {
        type : String,
        required: true
    },
    OwnerName : {
        type : String,
        required: true
    },
    fuelType : {
        type : String,
        required: true
    },
    inTime : {
        type : String,
        requir: true
    },
    outTime: {
        type : String,
        require: true
    },
    waitingTime: {
        type : String,
        require: true
    }   
})

//mongodb data table name
const Queue = mongoose.model("Queue", queueSchema);

//export the module
module.exports = Queue;
