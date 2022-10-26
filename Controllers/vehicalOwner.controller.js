//import vehicle owner model
const Owner = require("../Models/vehicalOwner.model");

// add vehicle owner details
const addOwner = async (req, res) => {
    if (req.body) {
        const owner = new Owner(req.body);
        await owner.save().then((data) => res.status(200).send({ data: data }))
        .catch((err) => res.status(200).send(err));
    }
};

// get all vehicle owner detals
const getAllOwners = async (req, res) => {
    await Owner.find().then((data) => {res.status(200).send(data);})
        .catch((error) => {
        res.send(error);
    });
};

// get owner details according to the owner name
const getOwnerDetails = async (req, res) => {
    if (req.body) {
      await Owner.findOne({ ownerName: req.params.ownerName }).then((data) => {res.status(200).send({ data });})
        .catch((err) => {
          res.status(500).send(err);
        });
    }
};

//update owner details
const updateOwner = async (req, res) => {
    console.log(req.body);
    if (req.body) {
      let id = req.params.id;
      await Owner.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send({ status: "Updated" })})
        .catch((err) => {
          res.send(err);
        });
    }
};

//delete owner details
const deleteOwner = async (req, res) => {
    await Owner.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Fuel Center Deleted" });})
      .catch((err) => {
        res.status(500).send(err);
    });
};

module.exports = {
    addOwner,
    getAllOwners,
    getOwnerDetails,
    updateOwner,
    deleteOwner
};
