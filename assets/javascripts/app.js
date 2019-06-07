var queryUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=tatoos+in+San+Diego&key=AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";

   // Performing our AJAX GET request
   $.ajax({
       url: queryUrl,
       method: "GET"
   }).then(function(response) {
       console.log(response)
   });




///GEO LOCATION
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
//getLocation();

function showPosition(position) {
 console.log(position);
}