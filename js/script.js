console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=thRm01WDPpqDYkKeymvtkgCMRkePkAx3&q=giphy&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function getGifs() {
    const response = await fetch(endpoint);
    const data = await response.json();
    let totalURLS = data.data.length;
    let images = [];

    for (let i = 0; i < totalURLS; i++) {
        const loadImage = data.data[i]["url"];

        images.push(loadImage);
    };

    console.log("images: ", images);
};

getGifs()