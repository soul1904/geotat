var longitude

var latitude

///GEO LOCATION API
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
  longitude = position.coords.longitude;
  
  latitude = position.coords.latitude;


}

function displayTatooShopResult(shopData) {

  // create a <p> tag and store it  in a variable
  var pTag = $("<p>" + shopData.name + " | " + "Rating: " + shopData.rating + " | " + shopData.formatted_address + " | </p> ");
  //  create an <a> tag and store it in a variable
  var aTag = $(shopData.photos[0].html_attributions[0]).attr("target", "_blank");
  // the <a> tag goes in the <p> tag
  pTag.append(aTag);
  // append both to the populator id
  $("#populator").append(pTag);
}


// this function records the changes in the tattoo-style-selection
$("#black-and-gray").on("click", function () {

  console.log(latitude);
  console.log(longitude);
 
  var queryUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=black+gray+tatoos&location=" + latitude + "," + longitude + "&radius=20000&key=AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
  var apiKey = "AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
  console.log(queryUrl)
  // Performing our AJAX GET request
  var saveResponse;
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    saveResponse = response;
    $("#populator").empty();
    // link the API results here
    $("#populator").append("<p>" + saveResponse.results[0].name + " | " + "Rating: " + saveResponse.results[0].rating + " | " + saveResponse.results[0].formatted_address + " | " + saveResponse.results[0].photos[0].html_attributions[0]);
    displayTatooShopResult(response.results[0]);
    displayTatooShopResult(response.results[1]);
    displayTatooShopResult(response.results[10]);
    displayTatooShopResult(response.results[2]);
  });
});

$("#new-school").on("click", function () {

  var queryUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=new+school+tatoos+in+San+Diego&key=AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
  var apiKey = "AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
  // Performing our AJAX GET request
  var saveResponse;
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    saveResponse = response;
    $("#populator").empty();
    $("#populator").append("<p>" + saveResponse.results[0].name + " | " + "Rating: " + saveResponse.results[0].rating + " | " + saveResponse.results[0].formatted_address + " | " + saveResponse.results[0].photos[0].html_attributions[0]);
    displayTatooShopResult(response.results[0]);
    displayTatooShopResult(response.results[1]);
    displayTatooShopResult(response.results[10]);
    displayTatooShopResult(response.results[2]);
  });
});

$("#old-school").on("click", function () {
  var queryUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=black+gray+tatoos+in+San+Diego&key=AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
  var apiKey = "AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
  // Performing our AJAX GET request
  var saveResponse;
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    saveResponse = response;
    // link the API results here
    $("#populator").empty();

  });

  $("#japanese").on("click", function () {
    var queryUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=black+gray+tatoos+in+San+Diego&key=AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
    var apiKey = "AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
    // Performing our AJAX GET request
    var saveResponse;
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      saveResponse = response;
      // alert($(this).val());
      // link the API results here
      // $("#populator").empty();
      $("#populator").append("<p>" + saveResponse.results[0].name + " | " + "Rating: " + saveResponse.results[0].rating + " | " + saveResponse.results[0].formatted_address + " | " + saveResponse.results[0].photos[0].html_attributions[0]);
      displayTatooShopResult(response.results[0]);
      displayTatooShopResult(response.results[1]);
      displayTatooShopResult(response.results[10]);
      displayTatooShopResult(response.results[2]);
    });
  });
});

