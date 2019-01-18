



// add array of initial animals
var animals = ["Lions", "Tigers", "Zebras",];

//displayAnimalInfo function re-renders the HTML to display the appropriate content

function displayAnimalInfo() {
    
    var animal = $(this).attr("animal-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=H50xHTpvBk3KZABtPtWkOQcliLBL6FlF&limit=10";

    // Creating an AJAX call for the specific animal button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {

     var results = response.data;
     for (var i = 0; i<results.length; i++) {
         var displayDiv = $("<div>");
         var rating = results[i].rating;
         var staticImg = results[i].images.fixed_height_still.url;
     }

        
    })


}

