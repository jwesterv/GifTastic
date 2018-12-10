//On click function to create variable from the input of the submit button
$("#animal-input").on("click", function(event) {
    event.preventDefault();

    // Get the animal "value" from the textbox and store it a variable
    var animalInput = $("#animal-submit").val().trim();
    
});




//Button grabs attribute of "data-animal" when clicked
$("button").on("click", function () {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=Cw4c1uTRHlzNXKfznTROlNQb5dOYSCN0&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);
        //Results that is recieved from AJAX
        var results = response.data;

        //For loop to go through the results recieved from AJAX
        for (var i = 0; i < results.length; i++) {

            //Create a div for each gif and rating
            var animalDiv = $("<div>");

            //Creating a <p> tag to hold the rating of the gif
            var p = $("<p>");
            p.text("Rating: " + results[i].rating);

            //Create <img> tag to hold the image of the gif
            var animalImage = $("<img>");
            animalImage.attr({
                "src": results[i].images.fixed_height.url
            });


            //Append both created variables into the div created
            animalDiv.append(animalImage, p);

            //Append the div containing the two variables(rating and image) into the div created to have gifs be appended to 
            $("#gif-div").append(animalDiv);

        }

    });
});

