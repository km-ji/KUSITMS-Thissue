const express = require("express");
const app = express();
const basic = require("./router/index");

const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./config/key");

console.log(process.env.MONGO_URL);

//config.mongoURI
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useCreateIndex: true,
  //   useFindAndModify: false,
});

var db = mongoose.connection;
// console.log(db);
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected!!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

//로그인 구현시 코드 여기로

app.get("/", (req, res) => res.send("핫식스 아좌아좌빠이띵~"));

app.use("/api", require("./api"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
