//review route
const express = require("express");
const router = express.Router();
const Review = require("../Controllers/review.controller");

module.exports = function () {
    router.post("/create", Review.addReview);
    router.get("/queuedetails/:flueCenterId", Review.getReviewDetails);
    router.get("/", Review.getAllReviews);
    router.put("/update/:id", Review.updateReview);
    router.delete("/delete/:id", Review.deleteReview);
    
  return router;
};
