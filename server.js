const port = 3000;

const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/interview", (req, res) => {
  res.render("interview");
});

app.get("/summer-2024", (req, res) => {
  res.render("summer-2024", { q: req.query.q });
});

app.use((req, res) => {
  res.status(404).render("error");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
