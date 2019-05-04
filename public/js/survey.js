$(document).ready(function() {
    var inputState = ""; 
    var inputCostLow = "";
    var inputCostHigh = "";
    var inputSatScore = "";
    var inputActScore = "";
    var inputZip = "";
    var inputBach = "";    
    var inputAsso = "";
    var inputOneYear = "";   
    var inputTwoYear = "";  
    var inputThreeYear = "";

    $("#costLow").change(function (event) {
      var inputCostLow = $(this).val();
      console.log("inputCostLow is " + inputCostLow);
    });

    $("#costHigh").change(function (event) {
      var inputCostHigh = $(this).val(); 
      console.log("inputCostHigh is " + inputCostHigh);
    });

    $("#satscore").change(function (event) {
      var inputSatScore = $(this).val(); 
      console.log("inputSatScore is " + inputSatScore);
    });

    $("#actscore").change(function (event) {
      var inputActScore = $(this).val(); 
      console.log("inputActScore is " + inputActScore);
    });
  
    $("#stateSelect").change(function (event) {
        var inputState = $(this).val(); 
        console.log("inputState is " + inputState);

    });

    $("#zipcode").change(function (event) {
        var inputZip = $(this).val(); 
        console.log("inputZip is " + inputZip);

    });

    $("#bachelor").change(function (event) {
      var inputBach = $(this).val(); 
      console.log("inputBach is " + inputBach);
    });
  
    $("#associate").change(function (event) {
      var inputAsso = $(this).val(); 
      console.log("inputAsso is " + inputAsso);
    });

    $("#oneyear").change(function (event) {
      var inputOneYear = $(this).val(); 
      console.log("inputOneYear is " + inputOneYear);
    });

    $("#twoyear").change(function (event) {
      var inputTwoYear = $(this).val(); 
      console.log("inputTwoYear is " + inputTwoYear);
    });

    $("#threeyear").change(function (event) {
      var inputThreeYear = $(this).val(); 
      console.log("inputThreeYear is " + inputThreeYear);
    });

    // $(document).on("click", ".submit-btn");



    var zipQuery = "&_zip=" + inputZip + "&_distance=10mi";
   

    function surveyFormSubmit(inputZip){
      event.preventDefault();


      console.log("zipquery inside fn " + inputZip);
        // if (!inputState && !inputCostLow && !inputCostHigh && !inputSatScore && !inputActScore && !inputZip && !inputBach && !inputAsso && !inputOneYear && !inputTwoYear && !inputThreeYear)  {
        //   return;
        // }
        // console.log(inputActScore);
      

    //TURN BACK ON
       // var stateQuery = "&school.state_fips=" + inputState;
       // var costQuery = "&latest.cost.attendance.academic_year__range=" + inputCostLow + ".." + inputCostHigh;
       // var actQuery = "&latest.admissions.act_scores.midpoint.cumulative__range=" + (parseInt(inputActScore)-1) + ".." + (parseInt(inputActScore)+1);
     //   var zipQuery = "&_zip=" + inputZip + "&_distance=10mi";
        
      //  var query = stateQuery + costQuery + zipQuery;
        
       // console.log(query);

    //   if(inputState = !"") {
    //     var query = query + stateQuery;                                                
    //   };
    //   if((inputCostLow = !"") && (inputCostHigh = !"")) {
    //     var query = query + costQuery;     
    //   };
    //   if(inputActScore = !"") {
    //     var query = query + actQuery;                
    //   };
    //   if(inputZip = !"") {
    //     var query = query + zipQuery;
    //   };
    var query = zipQuery;
    
    console.log("query string is " + query); 

   // getSchools();
    
   var baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
   var apiKey = "api_key=qhwLqB7uo9l9mn0UfvhvaK7h73Opx1KECd2zX2cx"
   var fields = "&_fields=school.name,school.school_url"

//TEST with Columbia
//query = "&id=190150"
   // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
   var queryURLfull = baseUrl + apiKey + fields + query;
   

   console.log(queryURLfull);
   $.ajax({
     url: queryURLfull,
     method: "GET"
   }).then(function(response) {

     // Printing the entire object to console
    // console.log(response.results[0]);


  schoolResult = response.results;
        
//           console.log(schoolResult);

          for (var i = 0; i < schoolResult.length; i++) {
          console.log("\n-------------------------------------------------");
          console.log(schoolResult[i]["school.name"]);
          console.log(schoolResult[i]["school.school_url"]);
          //response.json(schoolResult);
        
          }



    });



   //   // Constructing HTML containing the artist information
   //   var artistName = $("<h1>").text(response.name);
   //   var artistURL = $("<a>").attr("href", response.url).append(artistName);
   //   var artistImage = $("<img>").attr("src", response.thumb_url);
   //   var trackerCount = $("<h2>").text(response.tracker_count + " fans tracking this artist");
   //   var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
   //   var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

   //   // Empty the contents of the artist-div, append the new artist content
   //   $("#artist-div").empty();
   //   $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);


        return;
    }
    //END survey form submit


    $( ".submit-btn" ).click(function() {
        surveyFormSubmit();
      });


    // function updateQuery(data) {
    //   $.post("/api/findschool", data)
    //   // .then(getQueryData)      
    // }      
    // function getQueryData() {
    //   $.get("/api/findschool", function(result))
    // }
     

    
    
    // Our initial todos array
//     var todos = [];
  
//     // Getting todos from database when page loads
//     // getTodos();
  
//     // This function resets the todos displayed with new todos from the database
//     function initializeRows() {
//       $todoContainer.empty();
//       var rowsToAdd = [];
//       for (var i = 0; i < todos.length; i++) {
//         rowsToAdd.push(createNewRow(todos[i]));
//       }
//       $todoContainer.prepend(rowsToAdd);
//     }
  
//     // This function grabs todos from the database and updates the view
//     function getTodos() {
//       $.get("/api/todos", function(data) {
//         todos = data;
//         initializeRows();
//       });
//     }
  
//     // This function deletes a todo when the user clicks the delete button
//     function deleteTodo(event) {
//       event.stopPropagation();
//       var id = $(this).data("id");
//       $.ajax({
//         method: "DELETE",
//         url: "/api/todos/" + id
//       }).then(getTodos);
//     }
  
//     // This function handles showing the input box for a user to edit a todo
//     function editTodo() {
//       var currentTodo = $(this).data("todo");
//       $(this).children().hide();
//       $(this).children("input.edit").val(currentTodo.text);
//       $(this).children("input.edit").show();
//       $(this).children("input.edit").focus();
//     }
  
//     // Toggles complete status
//     function toggleComplete(event) {
//       event.stopPropagation();
//       var todo = $(this).parent().data("todo");
//       todo.complete = !todo.complete;
//       updateTodo(todo);
//     }
  
//     // This function starts updating a todo in the database if a user hits the "Enter Key"
//     // While in edit mode
//     function finishEdit(event) {
//       var updatedTodo = $(this).data("todo");
//       if (event.which === 13) {
//         updatedTodo.text = $(this).children("input").val().trim();
//         $(this).blur();
//         updateTodo(updatedTodo);
//       }
//     }
  
//     // This function updates a todo in our database
//     function updateTodo(todo) {
//       $.ajax({
//         method: "PUT",
//         url: "/api/todos",
//         data: todo
//       }).then(getTodos);
//     }
  
//     // This function is called whenever a todo item is in edit mode and loses focus
//     // This cancels any edits being made
//     function cancelEdit() {
//       var currentTodo = $(this).data("todo");
//       if (currentTodo) {
//         $(this).children().hide();
//         $(this).children("input.edit").val(currentTodo.text);
//         $(this).children("span").show();
//         $(this).children("button").show();
//       }
//     }
  
//     // This function constructs a todo-item row
//     function createNewRow(todo) {
//       var $newInputRow = $(
//         [
//           "<li class='list-group-item todo-item'>",
//           "<span>",
//           todo.text,
//           "</span>",
//           "<input type='text' class='edit' style='display: none;'>",
//           "<button class='delete btn btn-danger'>x</button>",
//           "<button class='complete btn btn-primary'>✓</button>",
//           "</li>"
//         ].join("")
//       );
  
//       $newInputRow.find("button.delete").data("id", todo.id);
//       $newInputRow.find("input.edit").css("display", "none");
//       $newInputRow.data("todo", todo);
//       if (todo.complete) {
//         $newInputRow.find("span").css("text-decoration", "line-through");
//       }
//       return $newInputRow;
//     }
  
//     // This function inserts a new todo into our database and then updates the view
//     function insertTodo(event) {
//       event.preventDefault();
//       var todo = {
//         text: $newItemInput.val().trim(),
//         complete: false
//       };
  
//       $.post("/api/todos", todo, getTodos);
//       $newItemInput.val("");
//     }



    
// //Form Variables

// // Tuition Cost
// var costlow = "lower value from survey"
// var costhigh = "higher value from survey"

// //SAT Score
// var sat = 1200 //user input

// //ACT Score
// var act = 20  //user input

// //Zip Code
// var zip = "zip input"
// var mile = 5 //add mile input box to DOM

// //State FIPS
// var statefips = "state fips value from survey"

// //Degree Programs Offered
// var degreePgm = "checkbox input"


// //Form Query String
// var formSchoolQuery =
// // Tuition Cost

// "&latest.cost.attendance.academic_year__range=" + costlow + ".." + costhigh +

// //SAT Score

// "&latest.admissions.sat_scores.average.overall__range=" + (sat-100) + ".." + (sat+200) +

// //ACT Score
// "&latest.admissions.act_scores.midpoint.cumulative__range=" + (act-1) + ".." + (act+1) +


// //Zip Code

// "&_zip=" + zip + "&_distance=" + mile + "mi" +

// //State FIPS

// "&school.state_fips=" + statefips;


// console.log(formSchoolQuery);



// //If we have time

// // 4 year certificate programs

// "&latest.academics.program.certificate_lt_4_yr.agriculture=1"

// "&latest.academics.program.certificate_lt_4_yr.resources=1"

// "&latest.academics.program.certificate_lt_4_yr.architecture=1"

// "&latest.academics.program.certificate_lt_4_yr.ethnic_cultural_gender=1"

// "&latest.academics.program.certificate_lt_4_yr.communication=1"

// "&latest.academics.program.certificate_lt_4_yr.communications_technology=1"

// "&latest.academics.program.certificate_lt_4_yr.computer=1"

// "&latest.academics.program.certificate_lt_4_yr.personal_culinary=1"

// "&latest.academics.program.certificate_lt_4_yr.education=1"

// "&latest.academics.program.certificate_lt_4_yr.engineering=1"

// "&latest.academics.program.certificate_lt_4_yr.engineering_technology=1"

// "&latest.academics.program.certificate_lt_4_yr.language=1"

// "&latest.academics.program.certificate_lt_4_yr.family_consumer_science=1"

// "&latest.academics.program.certificate_lt_4_yr.legal=1"

// "&latest.academics.program.certificate_lt_4_yr.english=1"

// "&latest.academics.program.certificate_lt_4_yr.humanities=1"

// "&latest.academics.program.certificate_lt_4_yr.library=1"

// "&latest.academics.program.certificate_lt_4_yr.biological=1"

// "&latest.academics.program.certificate_lt_4_yr.mathematics=1"

// "&latest.academics.program.certificate_lt_4_yr.military=1"

// "&latest.academics.program.certificate_lt_4_yr.multidiscipline=1"

// "&latest.academics.program.certificate_lt_4_yr.parks_recreation_fitness=1"

// "&latest.academics.program.certificate_lt_4_yr.philosophy_religious=1"

// "&latest.academics.program.certificate_lt_4_yr.theology_religious_vocation=1"

// "&latest.academics.program.certificate_lt_4_yr.physical_science=1"

// "&latest.academics.program.certificate_lt_4_yr.science_technology=1"

// "&latest.academics.program.certificate_lt_4_yr.psychology=1"

// "&latest.academics.program.certificate_lt_4_yr.security_law_enforcement=1"

// "&latest.academics.program.certificate_lt_4_yr.public_administration_social_service=1"

// "&latest.academics.program.certificate_lt_4_yr.social_science=1"

// "&latest.academics.program.certificate_lt_4_yr.construction=1"

// "&latest.academics.program.certificate_lt_4_yr.mechanic_repair_technology=1"

// "&latest.academics.program.certificate_lt_4_yr.precision_production=1"

// "&latest.academics.program.certificate_lt_4_yr.transportation=1"

// "&latest.academics.program.certificate_lt_4_yr.visual_performing=1"

// "&latest.academics.program.certificate_lt_4_yr.health=1"

// "&latest.academics.program.certificate_lt_4_yr.business_marketing=1"

// "&latest.academics.program.certificate_lt_4_yr.history=1"



// //


// var baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
// var apiKey = "api_key=qhwLqB7uo9l9mn0UfvhvaK7h73Opx1KECd2zX2cx"
// var fields = "&_fields=school.name"




function getSchools(query) {

    var baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
    var apiKey = "api_key=qhwLqB7uo9l9mn0UfvhvaK7h73Opx1KECd2zX2cx"
    var fields = "&_fields=school.name,school.school_url"



    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURLfull = baseUrl + apiKey + fields + query;
    
    $.ajax({
      url: queryURLfull,
      method: "GET"
    }).then(function(response) {

      // Printing the entire object to console
      console.log(response);

    //   // Constructing HTML containing the artist information
    //   var artistName = $("<h1>").text(response.name);
    //   var artistURL = $("<a>").attr("href", response.url).append(artistName);
    //   var artistImage = $("<img>").attr("src", response.thumb_url);
    //   var trackerCount = $("<h2>").text(response.tracker_count + " fans tracking this artist");
    //   var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
    //   var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

    //   // Empty the contents of the artist-div, append the new artist content
    //   $("#artist-div").empty();
    //   $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
    });
  }































  //END JS  
  });
  