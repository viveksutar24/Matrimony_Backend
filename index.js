let express = require("express");
let mongoose = require("mongoose");
let bodyparser = require("body-parser");

let app = express();
app.use(express.static("assets"));
app.use(express.json());
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
    return res.status(200).json({});
  }
  next();
});

mongoose.connect("mongodb://127.0.0.1:27017/matrimony");
let db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.on("open", () => console.log("Connection Established"));

app.get("/", (req, res) => {
  res.send("Welcome");
  res.end();
});

app.use("/relations", require("./routes/relations"));
app.use("/religions", require("./routes/religions"));
// app.use("/subreligions", require("./routes/subreligions"));


app.listen(8081, (req, res) => {
  console.log("Back End Running on http://localhost:8081/");
});
