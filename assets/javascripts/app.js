var longitude

var latitude
var value;

$(".gallery").on("click", function () {
  value = $(this).children().attr("data-tattoo-style");
  alert(value);
});




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
$(".gallery").on("click", function () {

  console.log(latitude);
  console.log(longitude);

  var queryUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + value + "&location=" + latitude + "," + longitude + "&radius=20000&key=AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
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

    for (var i = 0; i < Math.min(response.results.length, 5); i++) {
      displayTatooShopResult(response.results[i]);
      console.log(response.results[i])
    }
    //SCROLL DOWN FUNCTION FOR RESULTS//
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $("#populator").offset().top
    }, 800);
  });
});


