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

//   // cms route loads cms.html
//   app.get("/cms", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/cms.html"));
//   });

//   // blog route loads blog.html
//   app.get("/blog", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/blog.html"));
//   });

//   app.get("/authors", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
//   });

};