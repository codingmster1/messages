const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

const indexRouter = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});