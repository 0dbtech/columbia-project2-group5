var db = require("../models");


require('dotenv').config();
//setup file and pkg requirements


// require('dotenv').config();
var axios = require('axios');

// Routes =============================================================
module.exports = function(app) {

 // GET route for getting all of the todos
 app.get("/api/columbia", function(req, res) {

  searchSchool(res)
  
  // .then(function(col) {
    
  //   res.json(col);

  // });

// .then(function(res) {

  
  // .then(function() {
  //   console.log(res)
  //   // res.json(dbStudents);
  // });

});


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


var query = "https://api.data.gov/ed/collegescorecard/v1/schools?api_key=qhwLqB7uo9l9mn0UfvhvaK7h73Opx1KECd2zX2cx&_fields=school.name,school.state,id&school.state=ny&id=190150"

////LIRI REFS

///END LIRI REFS

// var query = "https://api.data.gov/ed/collegescorecard/v1/schools?api_key=qhwLqB7uo9l9mn0UfvhvaK7h73Opx1KECd2zX2cx&_fields=school.name,latest.admissions.act_scores.midpoint.cumulative,&latest.admissions.act_scores.midpoint.cumulative__range=25..27&school.state=ny"

function searchSchool(res) {
  // console.log("selected function to process " + query);
  
//set default
// if(!term) {
//   term = "Billy Joel"
// }


  axios
  .get(query)
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!

    var schools = response.data.results;
         console.log("\n-------------------------------------------------");
          console.log(schools[0]["school.name"]);
          console.log("\n-------------------------------------------------");
//TESTING response

    // console.log(Object.keys(response.data));
    // console.log(Object.keys(response.data[0]));
  
res.json(schools[0]["school.name"]);

  })

// .catch(function(error) {
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     console.log(error.response.data);
//     console.log(error.response.status);
//     console.log(error.response.headers);
//   } else if (error.request) {
//     // The request was made but no response was received
//     // `error.request` is an object that comes back with details pertaining to the error that occurred.
//     console.log(error.request);
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     console.log("Error", error.message);
//   }
//   console.log(error.config);
// });

}

