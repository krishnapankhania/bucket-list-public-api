const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'))

app.get("/", function (req, res) {
  fs.readFile(__dirname + "/src/site/index.html", "utf8", (err, text) => {
    res.send(text);
  });
});
app.get("/api/", require("./src/endpoints/random"));
app.get("/api/all", require("./src/endpoints/all"));
app.get("/api/all-places", require("./src/endpoints/all-places"));
app.get("/api/all-adventures", require("./src/endpoints/all-adventures"));
app.get("/api/suggest-place", require("./src/endpoints/random-place"));
app.get("/api/suggest-adventure", require("./src/endpoints/random-adventure"));

app.listen(port, () => {
  console.log(`Bucket List API listening on port ${port}!`);
});
