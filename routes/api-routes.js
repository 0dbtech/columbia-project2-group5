var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/students", function(req, res) {
    db.Students.findAll({}).then(function(dbStudents) {
      res.json(dbStudents);
    });

  });

  // POST route for saving a new todo
  app.post("/api/students", function(req, res) {
    db.Students.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    }).then(function(dbStudents) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbStudents);
    });

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted
  // from req.params.id
  app.delete("/api/students/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the todos we want to destroy
    db.Students.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbStudents) {
        res.json(dbStudents);
      });

  });

  // PUT route for updating Studentss. We can get the updated Students data from req.body
  app.put("/api/students", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the Studentss we want to update
    db.Students.update({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }, {
      where: {
        id: req.body.id
      }
    })
      .then(function(dbStudents) {
        res.json(dbStudents);
      });

  });
};
