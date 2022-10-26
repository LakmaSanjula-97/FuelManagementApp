// vehicle owner route
const express = require("express");
const router = express.Router();
const Owner = require("../Controllers/vehicalOwner.controller");

module.exports = function () {
    router.post("/create", Owner.addOwner);
    router.get("/ownerdetails/:ownerName", Owner.getOwnerDetails);
    router.get("/", Owner.getAllOwners);
    router.put("/update/:id", Owner.updateOwner);
    router.delete("/delete/:id", Owner.deleteOwner);
    
  return router;
};