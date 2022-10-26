const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

// fuel review schema
const reviewSchema = new Schema({
    reviewerId : { type : String, required: true },
    flueCenterId : { type : String, required: true },
    flueCenterName : { type : String, required: true },
    Comment : { type : String, required: true }, 
})

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
