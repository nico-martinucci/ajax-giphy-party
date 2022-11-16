"use strict";

/**
 * gets search term from form input and returns it
 * @returns form input is then used as a parameter in api get
 * the url 
 */

function getFormInput() {
    return $("#search-term").val();
}

/**
 * async function that grabs gif from GIPHY api and calls function
 * too add it to the page
 * @param {string} input - input from html form
 */
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

    let url = gifPull.data.data[0].images.original.url;
    addGIF(url);
}

// function to update dom with new gif
function addGIF(url) {
    let $gif = $("<img />").attr("src", url);
    $("#gifs").append($gif);
}

// controller function for the search button
function getInputAndUpdatePage(evt) {
    evt.preventDefault();
    let formInput = getFormInput();
    let gIFURL = getGIF(formInput);
    // addGIF(gIFURL);
}

// function to clear the gifs div
function removeGIFs(evt) {
    evt.preventDefault();
    $("#gifs").empty();
}

// listener for search button
$("#search").on("click", getInputAndUpdatePage);

// listener for remove button
$("#remove-all").on("click", removeGIFs);