// import fuel center model
const FuelCenter = require("../Models/fuelCenter.model");

// add fuel center details
const addFuelCenter = async (req, res) => {
    if (req.body) {
        const fuelCenter = new FuelCenter(req.body);
        await fuelCenter.save().then((data) => res.status(200).send({ data: data }))
        .catch((err) => res.status(200).send(err));
    }
};

// get all fuel center details
const getAllFuelCenters = async (req, res) => {
    await FuelCenter.find().then((data) => {res.status(200).send(data);})
        .catch((error) => {
        res.send(error);
    });
};

//get fuel center details using center id
const getFuelCenterDetails = async (req, res) => {
    if (req.body) {
      await FuelCenter.findOne({ fuelCenterId: req.params.fuelCenterId }).then((data) => {res.status(200).send({ data });})
        .catch((err) => {
          res.status(500).send(err);
        });
    }
};

//update fuel center details
const updateFuelCenter = async (req, res) => {
    console.log(req.body);
    if (req.body) {
      let id = req.params.id;
      await FuelCenter.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send({ status: "Updated" })})
        .catch((err) => {
          res.send(err);
        });
    }
};

// delete fuel center 
const deleteFuelCenter = async (req, res) => {
    await FuelCenter.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Fuel Center Deleted" });})
      .catch((err) => {
        res.status(500).send(err);
    });
};

// const getCountofCenters = async (req, res) => {   
//     const count =  FuelCenter.countDocuments();        
//     await count.then(data => res.status(200).send({"count": data }))
//         .catch((err) => {
//             res.status(200).send(err)
//         }); 
// }

//get all the count of the centers
const getCountofCenters = async (req, res) => {
    try {
      const result = await FuelCenter.countDocuments();
      return res.status(200).json(result);
    } catch {
      return res.status(400).json({ success: false });
    }
  }

  //search centers by center name
const searchCenters = async (req, res) => {
  try {
    const search = await FuelCenter.find(
      {
        "$or":[
          { fuelCenterName: { $regex:req.params.id } },
          { district : { $regex:req.params.id } }
        ]
      }
    );
    return res.status(200).json(search);
  } catch {
    res.status(400).json({success: false });
  }
}

module.exports = {
    addFuelCenter,
    getAllFuelCenters,
    getFuelCenterDetails,
    updateFuelCenter,
    deleteFuelCenter, 
    getCountofCenters,
    searchCenters,
};
