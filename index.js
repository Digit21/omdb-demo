require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.port !== undefined ? process.env.port : 3000;

if (process.env.port !== undefined) {
  port = process.env.port;
} else {
  port = 3000;
}

app.get("/movies", (req, res) => {
  const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_APIKEY}&s=${req.query.s}`;
  axios.get(url).then((movies) => {
    return res.json(movies.data);
  });
});

app.listen(port, () => {
  console.log("Server started");
});
