const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// dotenv Configuration
dotenv.config();

//Rest Object
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Static files
app.use(express.static(path.join(__dirname, "./client/build")));

//Routes
app.use("/api/v1/portfolio", require("./routes/portFolioRoutes"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Port
const port = process.env.PORT || 8080;

//Listen
app.listen(port, () => {
  console.log(`Server Running on PORT ${port}`);
});
