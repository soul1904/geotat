///GEO LOCATION
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
getLocation();

function showPosition(position) {
  console.log(position);
}


var queryUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=tatoos+in+San+Diego&key=AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
var apiKey = "AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
// Performing our AJAX GET request
$.ajax({
  url: queryUrl,
  method: "GET"
}).then(function (response) {
  console.log(response)



  // this function records the changes in the tattoo-style-selection
  $("#tattoo-style-select").on("change", function () {
    // alert($(this).val());
    // link the API results here
    if ($(this).val() == "Black & Gray Realistic") {
      $("#populator").empty();

      $("#populator").append("<p>" + response.results[0].name + " | " + "Rating: " + response.results[0].rating + " | " + response.results[0].formatted_address + " | " + response.results[0].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[1].name + " | " + "Rating: " + response.results[1].rating + " | " + response.results[1].formatted_address + " | " + response.results[1].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[10].name + " | " + "Rating: " + response.results[10].rating + " | " + response.results[10].formatted_address + " | " + response.results[10].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[2].name + " | " + "Rating: " + response.results[2].rating + " | " + response.results[2].formatted_address + " | " + response.results[2].photos[0].html_attributions[0]);
    } 

     else if ($(this).val() == "New School") {
      $("#populator").empty();

      $("#populator").append("<p>" + response.results[11].name + " | " + "Rating: " + response.results[11].rating + " | " + response.results[11].formatted_address + " | " + response.results[11].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[5].name + " | " + "Rating: " + response.results[5].rating + " | " + response.results[5].formatted_address + " | " + response.results[5].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[19].name + " | " + "Rating: " + response.results[19].rating + " | " + response.results[19].formatted_address + " | " + response.results[19].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[3].name + " | " + "Rating: " + response.results[3].rating + " | " + response.results[3].formatted_address + " | " + response.results[3].photos[0].html_attributions[0]);
    } 
    
    else if ($(this).val() == "Old School") {
      $("#populator").empty();

      $("#populator").append("<p>" + response.results[12].name + " | " + "Rating: " + response.results[12].rating + " | " + response.results[12].formatted_address + " | " + response.results[12].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[14].name + " | " + "Rating: " + response.results[14].rating + " | " + response.results[14].formatted_address + " | " + response.results[14].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[6].name + " | " + "Rating: " + response.results[6].rating + " | " + response.results[6].formatted_address + " | " + response.results[6].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[8].name + " | " + "Rating: " + response.results[8].rating + " | " + response.results[8].formatted_address + " | " + response.results[8].photos[0].html_attributions[0]);
    } 
    
    else if ($(this).val() == "Japanese Style Irezumi") {
      $("#populator").empty();

      $("#populator").append("<p>" + response.results[15].name + " | " + "Rating: " + response.results[15].rating + " | " + response.results[15].formatted_address + " | " + response.results[15].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[9].name + " | " + "Rating: " + response.results[9].rating + " | " + response.results[9].formatted_address + " | " + response.results[9].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[13].name + " | " + "Rating: " + response.results[13].rating + " | " + response.results[13].formatted_address + " | " + response.results[13].photos[0].html_attributions[0]);

      $("#populator").append("<p>" + response.results[18].name + " | " + "Rating: " + response.results[18].rating + " | " + response.results[18].formatted_address + " | " + response.results[18].photos[0].html_attributions[0]);
    } 
    else {
      return
    }



  });




});

