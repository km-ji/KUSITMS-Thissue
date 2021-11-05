const express = require("express");
const app = express();
const basic = require("./router/index");

app.use("/", basic);

const port = 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`)
})