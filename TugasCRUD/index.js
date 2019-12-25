// fileName: index.js

// import Express
let express = require("express");

// initialize app
let app = express();

// import API Router
let apiRoutes = require("./api-routes");

// import mongoose
let mongoose = require("mongoose");

// import body-parser
let bodyParser = require("body-parser");

// setup server
var port = process.env.PORT || 8080;

// config body-parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// connect mongodb use mongoose and set connection variable
mongoose.connect("mongodb://localhost/TugasCRUD");
var db = mongoose.connection;

// send messagge for default URL
app.get("/", (req, res) =>
  res.json({
    status: "success",
    message: "Running Server TugasCRUD w/ modules",
    modules: "{express, nodemon, mongoose, body-parser}"
  })
);

// use app apiRoutes
app.use("/api", apiRoutes);

// launch app to listen specified PORT
app.listen(port, function() {
  console.log("Runing Server TugasCRUD on PORT: " + port);
});
