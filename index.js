const express = require("express");
const app = express();
const port = process.env.PORT ||3000;

app.get("/", require("./src/endpoints/all"));

app.listen(port, () => {
  console.log(`Bucket List API listening on port ${port}!`);
});
