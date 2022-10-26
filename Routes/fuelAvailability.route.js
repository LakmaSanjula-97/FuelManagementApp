// fuel availability route
const express = require("express");
const router = express.Router();
const FuelAvailabilityController = require("../Controllers/fuelAvailability.controller");

module.exports = function () {
    router.post("/create", FuelAvailabilityController.addAvailaabilityDetails);
    router.get("/queuedetails/:flueCenterId", FuelAvailabilityController.getCenterAvailableDetails);
    router.get("/", FuelAvailabilityController.getAllAvailabilityDetails);
    router.put("/update/:id", FuelAvailabilityController.updateAvailability);
    router.delete("/delete/:id", FuelAvailabilityController.deleteAvailabilityDetails);
    router.get("/search/:id", FuelAvailabilityController.searchAvailableCenters);
   
  return router;
};
