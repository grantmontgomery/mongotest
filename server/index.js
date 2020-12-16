const http = require("http");

const server = http.createServer((req, res) => {
  let data = [];
  req
    .on("data", (chunk) => {
      data.push(chunk);
    })
    .on("end", () => {
      const body = Buffer.concat(data).toString();
      res.setHeader("Content-Type", "application/json");

      res.end(JSON.stringify(body));
    });
});

server.listen(8000);
