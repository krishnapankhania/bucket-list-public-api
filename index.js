const express = require("express");
const app = express();
const port = process.env.PORT ||3000;

app.get("/", require("./src/endpoints/random"));
app.get("/all", require("./src/endpoints/all"));
app.get("/all-places", require("./src/endpoints/all-places"));
app.get("/all-adventures", require("./src/endpoints/all-adventures"));
app.get("/suggest-place", require("./src/endpoints/random-place"));
app.get("/suggest-adventure", require("./src/endpoints/random-adventure"));

app.listen(port, () => {
  console.log(`Bucket List API listening on port ${port}!`);
});
