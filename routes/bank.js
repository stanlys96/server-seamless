const express = require("express");
const BankController = require("../controllers/BankController");

const router = express.Router();

router.post("/inquiry", BankController.getBankInquiry);

module.exports = router;
