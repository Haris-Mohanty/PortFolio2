const express = require("express");
const { sendEmailController } = require("../controller/portFolioController");

//Routes Object
const router = express.Router();

//Routes
router.post("/sendMail", sendEmailController);

//EXport
module.exports = router;
