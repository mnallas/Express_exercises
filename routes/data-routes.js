const express = require("express");
const router = express.Router();

router.post("/api", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

router.post("/api/test/:fname", (req, res) => {
  console.log(req.params);
  res.json(req.params);
});

module.exports = router;
