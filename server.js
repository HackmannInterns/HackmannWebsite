const port = 3000;

const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { message: "I Love Lain" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
