// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************

// // Dependencies
// // =============================================================
var path = require("path");

// var sessionChecker = require('./middleware');

// Routes
// =============================================================
module.exports = function(app) {


  // contact route loads contact.html
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // students route loads students.html
  app.get("/students", function(req, res) {
    console.log('this is test');
    res.sendFile(path.join(__dirname, "../public/students.html"));
  });

  app.get("/educator", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/educator.html"));
  });
};