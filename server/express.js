const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kjqo3.mongodb.net/test`;

const client = new MongoClient(uri);
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/post", async (req, res) => {
  const { text, title } = req.body;
  await client.connect();
  try {
    await client.connect();
    const database = await client.db("BlogPosts").collection("Posts");
    database.insertOne(
      {
        title,
        text,
      },
      (error, result) => {
        error || result.insertedCount !== 1
          ? res.send({ inserted: false })
          : res.send({ inserted: true });
      }
    );
  } catch (error) {
    res.end(error);
  } finally {
    await client.close();
    res.end();
  }
});

app.listen(8000, () => {
  console.log("Server running on 8000");
});
