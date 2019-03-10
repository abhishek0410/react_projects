const express = require("express");
const app = express();

const port = 5000;

app.get("/api/customer", (req, res) => {
  const customer = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Agatha", lastName: "Jurgen" },
    { id: 1, firstName: "Christian", lastName: "vieri" }
  ];
  res.json(customer);
});

app.listen(port, () => {
  console.log("Listening to port ", port);
});
