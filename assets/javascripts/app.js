///GEO LOCATION
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
// getLocation();

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



  
  $("#populator").empty();
  $("#populator").append("<p>" + response.results[0].name + " | " + "Rating: " + response.results[0].rating + " | " + response.results[0].formatted_address + " | " + response.results[0].photos[0].html_attributions[0]);
 
});


// this function records the changes in the tattoo-style-selection
$("#tattoo-style-select").on("change", function() {
alert($(this).val());
// link the API results here


});