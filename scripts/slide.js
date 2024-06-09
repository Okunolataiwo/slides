// Declaring data objects
const data = [
    {
        id: 1,
        author: "Author1",
        description1: " \"One: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime.\"",
        img: "images/image1.jpg",
        quote: "Author1 Quote",
        description2: " \"One: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis quia, in impedit est aliquid.\""
    },

    {
        id: 2,
        author: "Author2",
        description1: "\"Two: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime.\"",
        img: "images/image2.jpg",
        quote: "Author2 Quote",
        description2: " \"Two: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis quia, in impedit est aliquid.\""
    },

    {
        id: 3,
        author: "Author3",
        description1: "\"Three: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime.\"",
        img: "images/image3.jpg",
        quote: "Author3 Quote",
        description2: "\"Three: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis quia, in impedit est aliquid.\""
    },

    {
        id: 4,
        author: "Author4",
        description1: "\"Four: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime.\"",
        img: "images/image4.jpg",
        quote: "Author4 Quote",
        description2: "\"Four: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis quia, in impedit est aliquid.\""
    }, 

    {
        id: 5,
        author: "Author5",
        description1: "\"Five: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime.\"",
        img: "images/image5.jpg",
        quote: "Author5 Quote",
        description2: "\"Five: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis quia, in impedit est aliquid.\""
    }
]

// Declaring Variables
let author = document.querySelector(".author");
let description1 = document.querySelector(".description1");
let img = document.querySelector(".img");
let quote = document.querySelector(".quote");
let description2 = document.querySelector(".description2");
let random = document.querySelector(".random");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let interval;
let counter = 0;
let container = document.querySelector(".container");

// Function to initiate contents
function initiate(){
    author.innerHTML = data[counter].author;
    description1.innerHTML = data[counter].description1;
    img.src = data[counter].img;
    quote.innerHTML = data[counter].quote;
    description2.innerHTML = data[counter].description2;
    
}

// Calling/Invoking the Initiating function
window.addEventListener("DOMContentLoaded", ()=>{
    initiate();
    interval = setInterval(next, 3000);
});

// Generating random function


random.addEventListener("click", ()=>{
    let randomData = Math.floor(Math.random()*data.length);
    // console.log(randomData);
    counter = randomData;
    initiate();
})

right.addEventListener("click", next);
left.addEventListener("click", ()=>{
    counter--;
    if(counter < 0) {
        counter = data.length -1;
    }
    initiate();
});

function next(){
    counter++;
    if(counter > data.length-1) {
        counter = 0;
    }
    initiate();
}
container.addEventListener("mouseenter",()=>{
    clearInterval(interval);
});
container.addEventListener("mouseleave", ()=>{
    interval = setInterval(next, 3000);
    });




