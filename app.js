// require files
const express = require("express");
const controller = require("./controllers/controller");

const app = express();

// setup template engine
app.set("view engine", "ejs");

// static files middleware - access css styles
app.use(express.static("./public"));

// fire controllers
controller(app);

// listen to port
app.listen(3000);
console.log("Listening to port 3000");