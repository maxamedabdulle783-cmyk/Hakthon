const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/allimages", express.static("images"));

// const furniturerouter = require("./Router/furniturerooter");
// app.use("/electronic", furniturerouter);

mongoose.connect("mongodb://localhost:27017/Traffic Manegment system")
    .then(() => console.log("Connected to MongoDB"));

app.listen(5000, () => console.log("Server is running on port 5000"));
