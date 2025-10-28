console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=thRm01WDPpqDYkKeymvtkgCMRkePkAx3&q=giphy&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

let images = [];
let gifContainer = document.getElementById("gif-container");
//let totalURLS = data.data.length;
let button = document.getElementById("gif-btn");

async function getGifs() {
    const response = await fetch(endpoint);
    const data = await response.json();

    images = [];

    for (let i = 0; i < data.data.length; i++) {
        const loadImage = data.data[i].images.original.url;

        images.push(loadImage);
    };

    console.log("images: ", images);
};

getGifs();

button.addEventListener("click", function () {
    gifContainer.innerHTML = "";

    for(let i = 0; i < images.length; i++) {
        gifContainer.innerHTML += `<img src=${images[i]} class = "col-3 mb-3">`;
    }
});

