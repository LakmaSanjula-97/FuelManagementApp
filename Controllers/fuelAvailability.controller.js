// import the fuel availability model 
const FuelAvailability = require("../Models/fuelAvailability.model");

// add fuel availability details
const addAvailaabilityDetails = async (req, res) => {
    if (req.body) {
        const fuelAvailability = new FuelAvailability(req.body);
        await fuelAvailability.save().then((data) => res.status(200).send({ data: data }))
        .catch((err) => res.status(200).send(err));
    }
};

// get all fuel availability details
const getAllAvailabilityDetails = async (req, res) => {
    await FuelAvailability.find().then((data) => {res.status(200).send(data);})
        .catch((error) => {
        res.send(error);
    });
};

//get center details using fuel center id
const getCenterAvailableDetails = async (req, res) => {
    if (req.body) {
      await FuelAvailability.findOne({ flueCenterId: req.params.flueCenterId }).then((data) => {res.status(200).send({ data });})
        .catch((err) => {
          res.status(500).send(err);
        });
    }
}; 

//update fuel availability details
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

// delete fuel availability details
const deleteAvailabilityDetails = async (req, res) => {
    await FuelAvailability.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Deleted" });})
      .catch((err) => {
        res.status(500).send(err);
    });
};

//search available center details
const searchAvailableCenters = async (req, res) => {
  try {
    const search = await FuelAvailability.find(
      {
        "$or":[
          { fuelCenterName: { $regex:req.params.id } }
        ]
      }
    );
    return res.status(200).json(search);
  } catch {
    res.status(400).json({success: false });
  }
}

module.exports = {
    addAvailaabilityDetails,
    getAllAvailabilityDetails,
    getCenterAvailableDetails,
    updateAvailability,
    deleteAvailabilityDetails,
    searchAvailableCenters
};
