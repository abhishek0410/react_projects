const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());

const customer = { name: "Abhishek" };
server.get("/", (req, res) => {
  res.json("Hello world");
});
const port = 4000;
server.listen(port, () => {
  console.log("Server running on ", port);
});
