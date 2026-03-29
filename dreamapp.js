// Unit 0: Foundations | Final Practice: Dream Application

// Pseudocode – from the user input match them with either an indoor plant or outdoor plant based off of their preference and 
// match them with a plant based off of how much sun the plant would get at the location they would be placing it. 

const readline = require('readline-sync');
let userName = readline.question("Please enter your name:")
console.log(`Welcome ${userName} to plants app.\nPlease answer a few questions to be paired with a plant!`);
const question = readline.question("Are you looking for an 'indoor' or 'outdoor' plant?");

if (question === 'indoor'){
    console.log("An indoor plant is a great choice and can liven up your home.");
} else if (question === 'outdoor'){
    console.log("An outdoor plant is great choice to add variety to a lawn space.");
} else {
    console.log("Please try again and answer either 'indoor' or 'outdoor'.");
}
if (question === 'indoor'){
    const sunLight = readline.question("Will the plant have access to sunlight? ('yes'/'no')");
    if (sunLight === "yes"){
        const questionSun = readline.questionInt("How much sunlight will this plant have access to throughout the day? ")
            if (questionSun >= 5){
                console.log(`${userName}, I recommend Hibiscus, catcti, Aloe Vera, or Jade plants. These all love direct bright sun.`)
            } else if (questionSun < 5 && questionSun > 0){
                console.log(`${userName}, I recommend Spider plant, fern or Lucky bamboo. They should work out great for that amount of sun.`);
            } else if (questionSun === 0){
                console.log(`${userName}, I recommend a ZZ, Snake, Pothos, or Cast Iron plants. These all do great with little to no sun.`);
            }      
            } 
    } else if (sunLight === "no"){
        console.log(`${userName}, I recommend a ZZ, Snake, Pothos, or Cast Iron plants. These all do great with little to no sun.`)
    }
// 
// Output:
// $ node dreamapp.js
// Please enter your name:Alex
// Welcome Alex to plants app.
// Please answer a few questions to be paired with a plant!
// Are you looking for an 'indoor' or 'outdoor' plant?indoor
// An indoor plant is a great choice and can liven up your home.
// Will the plant have access to sunlight? ('yes'/'no')yes
// How much sunlight will this plant have access to throughout the day? 3
// Alex, I recommend Spider plant, fern or Lucky bamboo. They should work out great for that amount of sun.

// Comments - In this piece of code, I exemplified a few different skills from various modules. 
// From the Values, Data Types, and Operations module I used a few primitive data types i.e. string 
// number and Boolean, proper camelCase usage, Readline Sync question() and questionInt() and 
// creating and using objects. From the Stringing Characters Together module I created a new line a 
// string using /n, and utilized template literals with `backticks and ${}. From the Control Structures 
// and Logic module I used comparison operators (<=, <, ===), logical operator &&, and conditionals if, 
// else, if else. For this example I completed the indoor plant option but did not complete if the user 
// chose outdoor for this exercise.

// Pseudocode – build an array of the types of indoor plants sorted by row based off of the amount of sunlight they tolerate. 

let indoorPlants = [
    ["Hibiscus", "catcti", "Aloe Vera"],
    ["Spider plant", "fern", "Lucky bamboo"],
    ["Snake", "Pothos", "Cast Iron"]
];
for (let i = 0; i < indoorPlants.length; i++){
console.log(indoorPlants[i])
}
// Output
// $ node dreamapp.js
// [
//   [ 'Hibiscus', 'catcti', 'Aloe Vera' ],
//   [ 'Spider plant', 'fern', 'Lucky bamboo' ],
//   [ 'Snake', 'Pothos', 'Cast Iron' ]
// ]

// Pseudocode - I want to add Jade to row one and ZZ to row three. 

let newRowOne = indoorPlants[0].push("Jade");
let newRowTwo = indoorPlants[2].push("ZZ");
console.log(indoorPlants)
// Output:
// [
//   [ 'Hibiscus', 'catcti', 'Aloe Vera', 'Jade' ],
//   [ 'Spider plant', 'fern', 'Lucky bamboo' ],
//   [ 'Snake', 'Pothos', 'Cast Iron', 'ZZ' ]
// ]

// Comments - In this second example I used skills from the Building and Using Arrays modules 
// where I created an array using proper syntax, I printed to console using a for statement 
// logging each plant, and I added a plant to two different rows in sub arrays using the .push method. 