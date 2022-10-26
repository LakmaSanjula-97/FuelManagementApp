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

const updateOutTimeofQueue = async (req, res) => {
  console.log(req.params.id);
  let queue = await Queue.findById(req.params.id);

  queue = await Queue.updateOne({_id:req.params.id},{$set: {outTime: req.body.outTime}});

  if(!queue) 
    return res.status(404).send('Out time recorded');
  res.status(200).send('not Updated');
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

// const waitingOurs = async (req, res) => {
//   var query = {
//     username: req.body.username,
//     Date: {
//         $gte: new Date(req.body.Fromdate).toISOString(),
//         $lte: new Date(req.body.Todate).toISOString()
//     },
//     leave: { $exists: false }
// }

// User.find(query, function (err, data) {
//     if (err) { return res.status(300).json("Error") }
//     else {
//         return res.status(200).json({ data: data })
//     }
// })
// }

module.exports = {
    addQueue,
    getAllQueues,
    getQueueDetails,
    updateQueue,
    deleteQueue,
    getCountofQueue,
    getCountofPetrolQueue,
    getCountofDieselQueue,
    updateOutTimeofQueue
};