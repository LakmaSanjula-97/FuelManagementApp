// fuel queue route
const express = require("express");
const router = express.Router();
const QueueController = require("../Controllers/queue.controller");

module.exports = function () {
    router.post("/create", QueueController.addQueue);
    router.get("/queuedetails/:flueCenterName", QueueController.getQueueDetails);
    router.get("/", QueueController.getAllQueues);
    router.put("/update/:id", QueueController.updateQueue);
    router.delete("/delete/:id", QueueController.deleteQueue);
    router.get("/count/:flueCenterName", QueueController.getCountofQueue);
    router.get("/count/petrol/:flueCenterName", QueueController.getCountofPetrolQueue);
    router.get("/count/diesel/:flueCenterName", QueueController.getCountofDieselQueue);
    router.patch("/outtime/:id", QueueController.updateOutTimeofQueue);

  return router;
};
