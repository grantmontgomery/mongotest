const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Post = require("./models/Post");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/post", (req, res) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
  });
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
  res.end();
});

app.listen(8000, () => {
  console.log("Server running on 8000");
});
