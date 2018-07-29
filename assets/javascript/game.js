/*
    Crystal Collectors Game
        - Michael Soto -
*/

//Variables
var randValue = 0;
var numWins = 0;
var numLosses = 0;
var score;
var crystal1Value = 0;
var crystal2Value = 0;
var crystal3Value = 0;
var crystal4Value = 0;
var showRand = document.getElementById("randNum");
//var showRand = $(#randNum)
var showWins = document.getElementById("wins");
//var showWins = $(#wins)
var showLosses = document.getElementById("losses");
//var showLosses = $(#losses)
var showScore = document.getElementById("score");
//var showScore = $(#score)

//Generate random number
randValue = Math.ceil(Math.random()*101 + 19);
console.log(randValue);

//Generate Crystal Values
crystal1Value = Math.ceil(Math.random()*12);
crystal2Value = Math.ceil(Math.random()*12);
crystal3Value = Math.ceil(Math.random()*12);
crystal4Value = Math.ceil(Math.random()*12);
console.log("crystal 1: " + crystal1Value);
console.log("crystal 2: " + crystal2Value);
console.log("crystal 3: " + crystal3Value);
console.log("crystal 4: " + crystal4Value);

//Display Random Number
//showRand.textContent = randValue; //give error cannot set property 'textContent' of null
//$("#randNum").text(randValue); //does nothing

//On Click Events
$("#crystal1").on("click", function(){
    alert("crystal 1 clicked");
    score += crystal1Value;
    showScore.text = score;
    console.log(score);
})

$("#crystal2").on("click", function(){
    score += crystal2Value;
    showScore.text = score;
    console.log(score);
})

$("#crystal3").on("click", function(){
    score += crystal3Value;
    showScore.text = score;
    console.log(score);
})

$("#crystal4").on("click", function(){
    score += crystal4Value;
    showScore.text = score;
    console.log(score);
})


