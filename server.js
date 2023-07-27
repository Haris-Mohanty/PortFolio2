const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// dotenv Configuration
dotenv.config();

//Rest Object
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/v1/portfolio", require("./routes/portFolioRoutes"));

//Port
const port = process.env.PORT || 8080;

//Listen
app.listen(port, () => {
  console.log(`Server Running on PORT ${port}`);
});
