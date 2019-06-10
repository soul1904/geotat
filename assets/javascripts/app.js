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

function displayTatooShopResult(shopData) {
  $("#populator").append("<p>" + shopData.name + " | " + "Rating: " + shopData.rating + " | " + shopData.formatted_address + " | " + shopData.photos[0].html_attributions[0]) + "target='_blank'";
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

      displayTatooShopResult(response.results[0]);
      displayTatooShopResult(response.results[1]);
      displayTatooShopResult(response.results[10]);
      displayTatooShopResult(response.results[2]);
    }

    else if ($(this).val() == "New School") {
      $("#populator").empty();

      displayTatooShopResult(response.results[11]);
      displayTatooShopResult(response.results[5]);
      displayTatooShopResult(response.results[19]);
      displayTatooShopResult(response.results[3]);
    }

    else if ($(this).val() == "Old School") {
      $("#populator").empty();

      displayTatooShopResult(response.results[12]);
      displayTatooShopResult(response.results[14]);
      displayTatooShopResult(response.results[6]);
      displayTatooShopResult(response.results[8]);
    }

    else if ($(this).val() == "Japanese Style Irezumi") {
      $("#populator").empty();

      displayTatooShopResult(response.results[15]);
      displayTatooShopResult(response.results[9]);
      displayTatooShopResult(response.results[13]);
      displayTatooShopResult(response.results[18]);
    }
    else {
      return
    }

  });


});

