const express = require("express");
const app = express();

app.get("/hello-word", (req, res) => {
  res.send("Hello Word");
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000");
});

app.get("/example", (req, res) => {
  res.send({
    id: 1,
    name: "Sanchex maia",
  });
});
