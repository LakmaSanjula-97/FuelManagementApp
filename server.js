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

//   const supplierRouter = require("./routes/suppliers");
//   app.use("/supplier", supplierRouter);

//   const itemRouter = require("./routes/items");
//   app.use("/item", itemRouter);

  app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
  })