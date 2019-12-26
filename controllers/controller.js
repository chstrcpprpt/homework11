// control the behavious of the note taker - routes, rendering views

// import into app.js
module.exports = app => {

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

};