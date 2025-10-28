console.log("script.js loaded");
//endpoint-source of the GIFs being rendered.
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=thRm01WDPpqDYkKeymvtkgCMRkePkAx3&q=giphy&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

//Defining variables that will hold the gif container and button.
let gifContainer = document.getElementById("gif-container");
let button = document.getElementById("gif-btn");

//Async function that 
async function getGifs() {
    const response = await fetch(endpoint);
    const data = await response.json();
    
    images = []; //Ensures that the images array is empty.

    //Loop that adds an image element for each image URL to the gifContainer.
    for (let i = 0; i < data.data.length; i++) {
        const loadImage = data.data[i].images.original.url;

        images.push(loadImage);
    };
};

//Calling the getGifs() function to gather data before displaying it.
getGifs();

//Loops through all URLs in images, adding <img> elements for each one.
button.addEventListener("click", function () {
    gifContainer.innerHTML = "";

    for(let i = 0; i < images.length; i++) {
        gifContainer.innerHTML += `<img src=${images[i]} class = "col-3 mb-3">`;
    }
});

