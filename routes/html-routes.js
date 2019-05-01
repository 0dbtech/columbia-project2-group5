// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

var sessionChecker = require('./middleware');

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  // app.get("/",function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  // my changes: adding a second path:
 
  app.get("/login", sessionChecker, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render('login')
  });
   // added the path below
  

  app.get('/dashboard', sessionChecker, (req, res) => {
    console.log('here in dashboard')
    res.render('login');
  });

  // route for Home-Page
  app.get('/', (req, res) => {
    res.redirect('/login');
  });

  // contact route loads contact.html
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // students route loads students.html
  app.get("/students", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/students.html"));
  });

  app.get("/educator", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/educator.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

};