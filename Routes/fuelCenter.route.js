const express = require("express");
const router = express.Router();
const fuelCenterController = require("../Controllers/fuelCenter.controller");

module.exports = function () {
    router.post("/create", fuelCenterController.addFuelCenter);
    router.get("/fuelcenterdetails/:fuelCenterName", fuelCenterController.getFuelCenterDetails);
    router.get("/", fuelCenterController.getAllFuelCenters);
    router.put("/update/:id", fuelCenterController.updateFuelCenter);
    router.delete("/delete/:id", fuelCenterController.deleteFuelCenter);
    router.get("/count", fuelCenterController.getCountofCenters);

  return router;
};
