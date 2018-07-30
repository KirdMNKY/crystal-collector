/*
    Crystal Collectors Game
        - Michael Soto -
*/


//Global Variables
var numWins = 0;
var numLosses = 0;
var score = 0;
var randValue = 1;
var crystal1Value = 0;
var crystal2Value = 0;
var crystal3Value = 0;
var crystal4Value = 0;
var winSound = new Audio();
winSound.src = "assets/sounds/WW_Fanfare_Small.wav";
var loseSound = new Audio();
loseSound.src = "assets/sounds/zelda_oot_gameover.mp3";
var rupeeSound = new Audio("assets/sounds/ZSS_Rupee_Blue.wav");



$(document).ready(function() {
    crystalCollectors();
    
    function crystalCollectors(){
        //reset score
        score = 0;
        $("#score").text(score);
        console.log(score);

        //Generate Random Value
        randValue = Math.ceil(Math.random()*101 + 19);
        

        //Generate Random Crystal Values
        crystal1Value = Math.ceil(Math.random()*12);
        console.log("red crystal: " + crystal1Value);
        crystal2Value = Math.ceil(Math.random()*12);
        console.log("blue crystal: " + crystal2Value);
        crystal3Value = Math.ceil(Math.random()*12);
        console.log("orange crystal: " + crystal3Value);
        crystal4Value = Math.ceil(Math.random()*12);
        console.log("green crystal" + crystal4Value);

        // var showRand = document.getElementById("randNum");
        // var showRand = $("#randNum");
        // var showWins = document.getElementById("wins");
        // var showWins = $("#wins");
        //var showLosses = document.getElementById("losses");
        // var showLosses = $("#losses");
        //var showScore = document.getElementById("score");
        // var showScore = $("#score");
        //Display Random Number
        //showRand.textContent = randValue; //give error cannot set property 'textContent' of null

        $("#randNum").text(randValue); //works

        //On Click Events
        $("#crystal1").on("click", function(){
            $("#dispWinLose").text("");
            score += crystal1Value;
            rupeeSound.play();
            $("#score").text(score);
            checkWin();
            return;
        })

        $("#crystal2").on("click", function(){
            $("#dispWinLose").text("");
            score += crystal2Value;
            rupeeSound.play();
            $("#score").text(score);
            checkWin();
            return;
        })

        $("#crystal3").on("click", function(){
            $("#dispWinLose").text("");
            score += crystal3Value;
            rupeeSound.play();
            $("#score").text(score);
            checkWin();
            return;
        })

        $("#crystal4").on("click", function(){
            $("#dispWinLose").text("");
            score += crystal4Value;
            rupeeSound.play();
            $("#score").text(score);
            checkWin();
            return;
        })
        
    } //End of crystalCollectors function

        function checkWin(){

            if(score > randValue){
                alert(score);
                //Play Lose Sound
                loseSound.play();
                //Display You Lose!
                numLosses++;
                $("#losses").text(numLosses);
                $("#dispWinLose").text("You Lose...");
                //Restart Game

                //reset score
                score = 0;
                $("#score").text(score);
                console.log(score);

                //Generate Random Value
                randValue = Math.ceil(Math.random()*101 + 19);
                

                //Generate Random Crystal Values
                crystal1Value = Math.ceil(Math.random()*12);
                $("#value1").text(crystal1Value);
                crystal2Value = Math.ceil(Math.random()*12);
                $("#value2").text(crystal2Value);
                crystal3Value = Math.ceil(Math.random()*12);
                $("#value3").text(crystal3Value);
                crystal4Value = Math.ceil(Math.random()*12);
                $("#value4").text(crystal4Value);

                // var showRand = document.getElementById("randNum");
                // var showRand = $("#randNum");
                // var showWins = document.getElementById("wins");
                // var showWins = $("#wins");
                //var showLosses = document.getElementById("losses");
                // var showLosses = $("#losses");
                //var showScore = document.getElementById("score");
                // var showScore = $("#score");
                //Display Random Number
                //showRand.textContent = randValue; //give error cannot set property 'textContent' of null

        $("#randNum").text(randValue); //works
            
            } else if(score === randValue){
                alert(score);
                //Play Win Sound
                winSound.play();
                //Display You Win!
                numWins++;
                $("#wins").text(numWins);
                $("#dispWinLose").text("You Win!!!");
                //Restart Game

                //reset score
                score = 0;
                $("#score").text(score);
                console.log(score);

                //Generate Random Value
                randValue = Math.ceil(Math.random()*101 + 19);
                

                //Generate Random Crystal Values
                crystal1Value = Math.ceil(Math.random()*12);
                $("#value1").text(crystal1Value);
                crystal2Value = Math.ceil(Math.random()*12);
                $("#value2").text(crystal2Value);
                crystal3Value = Math.ceil(Math.random()*12);
                $("#value3").text(crystal3Value);
                crystal4Value = Math.ceil(Math.random()*12);
                $("#value4").text(crystal4Value);

                // var showRand = document.getElementById("randNum");
                // var showRand = $("#randNum");
                // var showWins = document.getElementById("wins");
                // var showWins = $("#wins");
                //var showLosses = document.getElementById("losses");
                // var showLosses = $("#losses");
                //var showScore = document.getElementById("score");
                // var showScore = $("#score");
                //Display Random Number
                //showRand.textContent = randValue; //give error cannot set property 'textContent' of null

                $("#randNum").text(randValue); //works
            }
        } //End of checkWin function
    })




