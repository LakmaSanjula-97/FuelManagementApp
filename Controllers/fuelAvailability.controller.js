const FuelAvailability = require("../Models/fuelAvailability.model");

const addAvailaabilityDetails = async (req, res) => {
    if (req.body) {
        const fuelAvailability = new FuelAvailability(req.body);
        await fuelAvailability.save().then((data) => res.status(200).send({ data: data }))
        .catch((err) => res.status(200).send(err));
    }
};

const getAllAvailabilityDetails = async (req, res) => {
    await FuelAvailability.find().then((data) => {res.status(200).send(data);})
        .catch((error) => {
        res.send(error);
    });
};

const getCenterAvailableDetails = async (req, res) => {
    if (req.body) {
      await FuelAvailability.findOne({ flueCenterId: req.params.flueCenterId }).then((data) => {res.status(200).send({ data });})
        .catch((err) => {
          res.status(500).send(err);
        });
    }
}; 

const updateAvailability = async (req, res) => {
    console.log(req.body);
    if (req.body) {
      let id = req.params.id;
      await FuelAvailability.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send({ status: "Updated" })})
        .catch((err) => {
          res.send(err);
        });
    }
};

const deleteAvailabilityDetails = async (req, res) => {
    await FuelAvailability.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Deleted" });})
      .catch((err) => {
        res.status(500).send(err);
    });
};

module.exports = {
    addAvailaabilityDetails,
    getAllAvailabilityDetails,
    getCenterAvailableDetails,
    updateAvailability,
    deleteAvailabilityDetails
};
