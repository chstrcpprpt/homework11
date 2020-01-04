// control the behavious of the note taker - routes, rendering views
const bodyParser = require('body-parser');
const shortid = require("shortid");
const fs = require("fs");
const path = require("path");

const urlencodedParser = bodyParser.urlencoded({ extended: true });

// define path
const dbPath = path.resolve(__dirname, "..","db","db.json");

// import into app.js
module.exports = app => {

  // HTML routes
  // notes
  app.get("/notes", (req, res) => {
    res.render("notes");
  });

  // API routes
  // GET
  app.get("/api/notes", (req, res) => {
    // read db.json and return all notes as JSON
    const jsonFile = fs.readFileSync(dbPath);
    const db = JSON.parse(jsonFile);

    res.send(db);
  });

  // POST
  app.post("/api/notes", urlencodedParser, (req, res) => {
    // push data to JSON DB file
    data = req.body;
    data.id = shortid.generate();

    const jsonFile = fs.readFileSync(dbPath);
    const db = JSON.parse(jsonFile);

    db.push(data);

    const writeData = JSON.stringify(db);
    fs.writeFileSync(dbPath, writeData);
  });

  // DELETE
  app.delete("/api/notes/:id", (req, res) => {

    const jsonFile = fs.readFileSync(dbPath);
    const db = JSON.parse(jsonFile);

    const filtered = db.filter(notes => {
      return notes.id !== req.params.id;
    })

    res.send(filtered);

    const writeData = JSON.stringify(filtered);
    fs.writeFileSync(dbPath, writeData);
    
  });

  // *
  app.get("*", (req, res) => {
    res.render("index");
  });

};