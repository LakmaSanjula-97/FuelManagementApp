const Queue = require("../Models/queue.model");

const addQueue = async (req, res) => {
    if (req.body) {
        const queue = new Queue(req.body);
        await queue.save().then((data) => res.status(200).send({ data: data }))
        .catch((err) => res.status(200).send(err));
    }
};

// const addQueue = async (req, res) => {
//   if (req.body) {
//     const queue = new Queue(req.body);
//     queue.flueCenterName = req.body.flueCenterName;
//     queue.vehicleId = req.body.vehicleId;
//     queue.OwnerName = req.body.OwnerName;
//     queue.fuelType = req.body.fuelType;
//     queue.inTime = req.body.inTime;
//     queue.outTime = req.body.outTime;
//     queue.waitingTime = req.body.waitingTime;
//     await queue
//       .save()
//       .then((data) => {
//         res.status(200).send({ data: data });
//       })
//       .catch((error) => {
//         res.status(500).send({ error: error.message });
//       });
//   }
// };

const getAllQueues = async (req, res) => {
    await Queue.find().then((data) => {res.status(200).send(data);})
        .catch((error) => {
        res.send(error);
    });
};

const getQueueDetails = async (req, res) => {
    if (req.body) {
      await Queue.findOne({ flueCenterName: req.params.flueCenterName }).then((data) => {res.status(200).send({ data });})
        .catch((err) => {
          res.status(500).send(err);
        });
    }
};

const updateQueue = async (req, res) => {
    console.log(req.body);
    if (req.body) {
      let id = req.params.id;
      await Queue.findByIdAndUpdate(id, req.body).then((data) => {res.status(200).send({ status: "Updated" })})
        .catch((err) => {
          res.send(err);
        });
    }
};

const deleteQueue = async (req, res) => {
    await Queue.findByIdAndDelete(req.params.id).then(() => {res.status(200).send({ status: "Deleted" });})
      .catch((err) => {
        res.status(500).send(err);
    });
};

// const getCountofQueue = async (req, res) => {
//     try {
//       const result = await Queue.countDocuments();
//       return res.status(200).json(result);
//     } catch {
//       return res.status(400).json({ success: false });
//     }
//   }

const getCountofQueue = async (req, res) => {
    try {
      const result = await Queue.count({ flueCenterName: req.params.flueCenterName });
      return res.status(200).json(result);
    } catch {
      return res.status(400).json({ success: false });
    }
  }

const getCountofPetrolQueue = async (req, res) => {
    try {
      const result = await Queue.count({ flueCenterName: req.params.flueCenterName })
      .find({fuelType:"Petrol"})
      .countDocuments();
      return res.status(200).json(result);
    } catch {
      return res.status(400).json({ success: false });
    }
}

const getCountofDieselQueue = async (req, res) => {
    try {
      const result = await Queue.count({ flueCenterName: req.params.flueCenterName })
      .find({fuelType:"Diesel"})
      .countDocuments();
      return res.status(200).json(result);
    } catch {
      return res.status(400).json({ success: false });
    }
  }

module.exports = {
    addQueue,
    getAllQueues,
    getQueueDetails,
    updateQueue,
    deleteQueue,
    getCountofQueue,
    getCountofPetrolQueue,
    getCountofDieselQueue
};