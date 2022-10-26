//import review model
const Review = require("../Models/review.model");

const addReview = async (req, res) => {
    if (req.body) {
        const review = new Review(req.body);
        await review.save().then((data) => res.status(200).send({ data: data }))
        .catch((err) => res.status(200).send(err));
    }
};

// get all review comments 
const getAllReviews = async (req, res) => {
    await Review.find().then((data) => {res.status(200).send(data);})
        .catch((error) => {
        res.send(error);
    });
};

//get all review details according to the fuel center name
const getReviewDetails = async (req, res) => {
    if (req.body) {
      await Review.findOne({ fuelCenterName: req.params.fuelCenterName }).then((data) => {res.status(200).send({ data });})
        .catch((err) => {
          res.status(500).send(err);
        });
    }
};


//update review details
const updateReview = async (req, res) => {
    console.log(req.body);
    if (req.body) {
      let id = req.params.id;
      await Review.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send({ status: "Updated" })})
        .catch((err) => {
          res.send(err);
        });
    }
};

//delete all the review details 
const deleteReview = async (req, res) => {
    await Review.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Deleted" });})
      .catch((err) => {
        res.status(500).send(err);
    });
};

module.exports = {
    addReview,
    getAllReviews,
    getReviewDetails,
    updateReview,
    deleteReview
};