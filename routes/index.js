const express = require("express");
const bankRoutes = require("./bank");
const router = express.Router();

router.use("/bank", bankRoutes);

module.exports = router;
