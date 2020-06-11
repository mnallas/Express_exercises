const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=Oakland&&units=imperial&appid=${process.env.weather_key}`;
router.get("/weather", (req, res) => {
  axios
    .get(weatherUrl)
    .then(({ data }) => {
      res.json(data.main);
    })
    .catch((err) => res.send(err));
});
module.exports = router;
