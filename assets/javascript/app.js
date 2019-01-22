
    //set an array with initial animals

    var animals = ["Zebras", "Tigers", "Lions", "Buffalo", "Cheetah"];


    //create a function that grabs information from GIPHY API and renders it onto HTML to display. The function will then be added to on-click btn
    $(document).on("click", "button", function () {
        var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" +
            animal + "&api_key=dc6zaTOxFJmzC&limit=10";

        //create AJAX call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            // console.log(results);
           
            $("#animalGifs").empty();

            //create a for loop to go through response

            for (var i = 0; i < results.length; i++) {

                //create a div to hold the gif
                var gifDiv = $("<div>");
                // gifDiv.attr("id", "test");
                //create variable to store rating
                var rating = results[i].rating;
                

                //create an element to display rating
                var p = $("<p>").text("Rating " + rating);
                

                //create an element to store individual gif images

                var animalImg = $("<img>");
                animalImg.addClass("animalgif");
                animalImg.attr("src", results[i].images.fixed_width_still.url);
                animalImg.attr("data-still", results[i].images.fixed_width_still.url);
                animalImg.attr("data-animated", results[i].images.fixed_width.url);
                animalImg.attr("data-state", "still");
                gifDiv.append(animalImg);
                gifDiv.append(p);
                
                $("#animalGifs").prepend(gifDiv);

            }

        });

    });

    //create a function whereby if a static img is clicked it becomes animated. once clicked again it pauses
$(document).on("click", ".animalgif", PlayGif);

function PlayGif(){

    var state = $(this).attr("data-state");
    // var animalstill = $(this).attr("data-still");
    // var animalanimate = $(this).attr("data-animate");
    console.log($(this).attr("data-animated"));

    if(state === "still") {
        $(this).attr("src", $(this).attr("data-animated"));
        $(this).attr("data-state", "animate");

    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

}


//create a function that adds an animal button to the original array
$("#add-animal").on("click", function (event) {
    event.preventDefault();
    //grab input from textbox and stores in variable
    var animalInput = $("#animal-input").val().trim();
    //add animal from textbox to array
    animals.push(animalInput);
    console.log(animals);
    renderButton();

})
//create a function that creates a for loop that goes through the array and makes buttons for the initial animal object

function renderButton() {
    $("#buttons").empty();
    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("btn btn-secondary animalBtn");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons").append(a);

    }
}

renderButton();


