const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello World");
};

const server = http.createServer(requestListener);

server.on("request", (request, response) => {
  console.log(request.headers);
});

server.listen(8000);
