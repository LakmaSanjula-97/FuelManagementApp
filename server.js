const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URI;

mongoose.connect(URL, {
    useNewUrlParser: true,
  })
  
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log('_MongoDB Connection Success_')
  })

  const FuelCenter = require("./Routes/fuelCenter.route");
  const Queue = require("./Routes/queue.route");
  const FuelAvailability = require("./Routes/fuelAvailability.route");
  const Review = require("./Routes/review.route");
  const Owner = require("./Routes/vehicalOwner.route");

  app.use("/fuelCenter", FuelCenter());
  app.use("/queue", Queue());
  app.use("/availability", FuelAvailability());
  app.use("/review", Review());
  app.use("/owner", Owner());

app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
})
