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
var saveResponse;
$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function (response) {
    console.log(response);
    saveResponse = response;



});
// this function records the changes in the tattoo-style-selection
$("#black-and-gray").on("click", function () {
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
        $("#populator").append("<p>" + saveResponse.results[0].name + " | " + "Rating: " + saveResponse.results[0].rating + " | " + saveResponse.results[0].formatted_address + " | " + saveResponse.results[0].photos[0].html_attributions[0]);

        $("#populator").append("<p>" + saveResponse.results[1].name + " | " + "Rating: " + saveResponse.results[1].rating + " | " + saveResponse.results[1].formatted_address + " | " + saveResponse.results[1].photos[0].html_attributions[0]);

        $("#populator").append("<p>" + saveResponse.results[10].name + " | " + "Rating: " + saveResponse.results[10].rating + " | " + saveResponse.results[10].formatted_address + " | " + saveResponse.results[10].photos[0].html_attributions[0]);

        $("#populator").append("<p>" + saveResponse.results[2].name + " | " + "Rating: " + saveResponse.results[2].rating + " | " + saveResponse.results[2].formatted_address + " | " + saveResponse.results[2].photos[0].html_attributions[0]);
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

        // alert($(this).val());
        // link the API results here
        $("#populator").append("<p>" + saveResponse.results[0].name + " | " + "Rating: " + saveResponse.results[0].rating + " | " + saveResponse.results[0].formatted_address + " | " + saveResponse.results[0].photos[0].html_attributions[0]);

        $("#populator").append("<p>" + saveResponse.results[1].name + " | " + "Rating: " + saveResponse.results[1].rating + " | " + saveResponse.results[1].formatted_address + " | " + saveResponse.results[1].photos[0].html_attributions[0]);

        $("#populator").append("<p>" + saveResponse.results[10].name + " | " + "Rating: " + saveResponse.results[10].rating + " | " + saveResponse.results[10].formatted_address + " | " + saveResponse.results[10].photos[0].html_attributions[0]);

        $("#populator").append("<p>" + saveResponse.results[2].name + " | " + "Rating: " + saveResponse.results[2].rating + " | " + saveResponse.results[2].formatted_address + " | " + saveResponse.results[2].photos[0].html_attributions[0]);
    });

});

$("#old-school").on("click", function () {
    // alert($(this).val());
    // link the API results here
    $("#populator").append("<p>" + saveResponse.results[0].name + " | " + "Rating: " + saveResponse.results[0].rating + " | " + saveResponse.results[0].formatted_address + " | " + saveResponse.results[0].photos[0].html_attributions[0]);

    $("#populator").append("<p>" + saveResponse.results[1].name + " | " + "Rating: " + saveResponse.results[1].rating + " | " + saveResponse.results[1].formatted_address + " | " + saveResponse.results[1].photos[0].html_attributions[0]);

    $("#populator").append("<p>" + saveResponse.results[10].name + " | " + "Rating: " + saveResponse.results[10].rating + " | " + saveResponse.results[10].formatted_address + " | " + saveResponse.results[10].photos[0].html_attributions[0]);

    $("#populator").append("<p>" + saveResponse.results[2].name + " | " + "Rating: " + saveResponse.results[2].rating + " | " + saveResponse.results[2].formatted_address + " | " + saveResponse.results[2].photos[0].html_attributions[0]);


});


$("#japanese").on("click", function () {
    // alert($(this).val());
    // link the API results here
    $("#populator").append("<p>" + saveResponse.results[0].name + " | " + "Rating: " + saveResponse.results[0].rating + " | " + saveResponse.results[0].formatted_address + " | " + saveResponse.results[0].photos[0].html_attributions[0]);

    $("#populator").append("<p>" + saveResponse.results[1].name + " | " + "Rating: " + saveResponse.results[1].rating + " | " + saveResponse.results[1].formatted_address + " | " + saveResponse.results[1].photos[0].html_attributions[0]);

    $("#populator").append("<p>" + saveResponse.results[10].name + " | " + "Rating: " + saveResponse.results[10].rating + " | " + saveResponse.results[10].formatted_address + " | " + saveResponse.results[10].photos[0].html_attributions[0]);

    $("#populator").append("<p>" + saveResponse.results[2].name + " | " + "Rating: " + saveResponse.results[2].rating + " | " + saveResponse.results[2].formatted_address + " | " + saveResponse.results[2].photos[0].html_attributions[0]);


});