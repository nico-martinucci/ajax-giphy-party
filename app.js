"use strict";

// function to get input data
function getFormInput() {
    return $("#search-term").val();
}

// async function to request gif from giphy
async function getGIF(input) {
    const randomOffset = Math.round(Math.random() * 4999);

    let gifPull = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            api_key: "L1vsHUAqEURXHTDiIQcxZALO77jEe9E7",
            q: input,
            limit: 1,
            offset: randomOffset
        }
    })
    console.log("the gif stuff is ", gifPull)
}

// function to update dom with new gif
function addGIF() {

}

// controller function for the search button
function getInputAndUpdatePage(evt) {
    evt.preventDefault();
    let formInput = getFormInput();
    getGIF(formInput);
}

// function to clear the gifs div
function removeGIFs() {
    $("#gifs").empty();
}


// listener for search button
$("#search").on("click", getInputAndUpdatePage);

// listener for remove button
$("#remove-all").on("click", removeGIFs);


//api key:
// L1vsHUAqEURXHTDiIQcxZALO77jEe9E7