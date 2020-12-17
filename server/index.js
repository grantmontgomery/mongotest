const http = require("http");
require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kjqo3.mongodb.net/test`;

const client = new MongoClient(uri);

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  const connectToDB = async () => {
    try {
      await client.connect();
      // const databases = await client.db().admin().listDatabases();
      const database = await client
        .db("BlogPosts")
        .collection("Posts")
        .console.log(database);
    } catch (error) {
      console.log(error.message);
    } finally {
      await client.close();
    }
  };
  console.log(connectToDB());
  res.setHeader("Content-Type", "application/json");
  res.end("Hello World");
});

// const server = http.createServer((req, res) => {
//   let data = [];
//   req
//     .on("data", (chunk) => {
//       data.push(chunk);
//     })
//     .on("end", () => {
//       const body = Buffer.concat(data).toString();
//       res.setHeader("Content-Type", "application/json");

//       res.end(JSON.stringify(body));
//     });
// });

server.listen(8000, () => {
  console.log(`Server running at Port 8000`);
});
