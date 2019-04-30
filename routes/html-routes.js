// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("/educator", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/educator.html"));
  });

  app.get("/students", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/students.html"));
  });

  app.get("/aboutus", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/aboutus.html"));
  });

  //Dept Ed API Test
  app.get("/survey-test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey-test.html"));
  });

};