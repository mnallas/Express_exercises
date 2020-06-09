const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/test", (req, res) => {
  res.send({ mes: "Hello from API" });
});

router.get("/api/test2", (req, res) => {
  res.send({ mes: "You are now on Test" });
});

module.exports = router;
