//Button grabs attribute of "data-animal" when clicked
$("button").on("click", function () {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=Cw4c1uTRHlzNXKfznTROlNQb5dOYSCN0&limit=10";