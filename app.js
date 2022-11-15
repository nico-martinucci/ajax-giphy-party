"use strict";

// function to get input data
function getFormInput() {
    return $("#search-term").val();
}

// async function to request gif from giphy
async function getGIF() {

}

// function to update dom with new gif
function addGIF() {

}

// controller function for the search button
function getInputAndUpdatePage() {

}

// function to clear the gifs div
function removeGIFs() {
    $("#gifs").empty();
}


// listener for search button
$("#search").on("click", getInputAndUpdatePage);

// listener for remove button
$("#remove-all").on("click", removeGIFs);