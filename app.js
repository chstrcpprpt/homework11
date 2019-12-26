const express = require("express");

const app = express();

// setup template engine
app.set("view engine", "ejs");

// static files
app.use(express.static("./public"));

// listen to port
app.listen(3000);
console.log("Listening to port 3000");

// routes
app.get("/notes", (req, res) => {
  res.render("notes");
});

app.get("*", (req, res) => {
  res.render("index");
});

// POST
app.post("/notes", (req, res) => {
  res.render("notes");
});

// DELETE
app.delete("/notes", (req, res) => {

});