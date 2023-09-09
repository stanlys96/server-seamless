const axios = require("axios");
require("dotenv").config();

const axiosCustom = axios.default.create({
  baseURL: "https://bigflip.id/api/v2/disbursement",
  headers: {
    Authorization: process.env.FLIP_AUTH,
  },
});

module.exports = axiosCustom;
