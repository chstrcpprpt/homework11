const express = require("express");

const app = express();

// setup template engine
app.set("view engine", "ejs");

// static files
app.use(express.static("./public"));

// listen to port
app.listen(3000);
console.log("Listening to port 3000");

// HTML routes
// notes
app.get("/notes", (req, res) => {
  res.render("notes");
});

// *
app.get("*", (req, res) => {
  res.render("index");
});

// API routes
// GET
app.get("/api/notes", (req, res) => {
  
});

// POST
app.post("/api/notes", (req, res) => {
  
});

// DELETE
app.delete("/api/notes/:id", (req, res) => {

});