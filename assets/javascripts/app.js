// global variables
var longitude;
var latitude;

var value;

// whenever the user clicks on ANY of the style buttons, the code picks up the data-tatoo-style from the clildren <a> tags 
$(".gallery").on("click", function () {
  value = $(this).children().attr("data-tattoo-style");
  });

// GEO LOCATION API
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// call user position function 
getLocation();

function showPosition(position) {
  console.log(position);

  longitude = position.coords.longitude;
  latitude = position.coords.latitude;
}

// set up the function to display the tatoo shops results
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
//Animating Fade-In Container //
$(document).ready(function() {
  $(".container").fadeIn(3000);
  });

// this function records the changes in the tattoo-style-selection
$(".gallery").on("click", function () {

  console.log(latitude);
  console.log(longitude);

  var queryUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + value + "&location=" + latitude + "," + longitude + "&radius=20000&key=AIzaSyDYw0kEgd0PxKKZZ5GGBBgeygLHxpwv9bA";
  console.log(queryUrl)
  // Performing our AJAX GET request
  var saveResponse;

  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    saveResponse = response;

    // link the API results here

    // empty the contect of the populator div so that it only shows results for the selected tattoo style and erases old results
    $("#populator").empty();
    
    for (var i = 0; i < Math.min(response.results.length, 5); i++) {
      displayTatooShopResult(response.results[i]);
      console.log(response.results[i])
    }
    //SCROLL DOWN FUNCTION FOR RESULTS//
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $("#populator").offset().top
    }, 900);
  });
});


