const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}...`);
});
