const express = require("express");
const router = express.Router();

const localMiddle = (req, res, next) => {
  console.log("Local: POST");
  next();
};
router.get("/", (req, res) => {
  res.send("Hello Jane!");
});
router.post("/", localMiddle, function (req, res) {
  res.send("Got a POST request");
});

module.exports = router;
