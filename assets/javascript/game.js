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
winSound.src = "..\sounds/WW_Fanfare_Smalll.wav";
var loseSound = new Audio();
loseSound.src = "..\sounds\zelda_oot_gameover.mp3";
var rupeeSound = new Audio("..\sounds/ZSS_Rupee_Blue.wav");



$(document).ready(function() {
    crystalCollectors();
    

    function crystalCollectors(){
        //reset score
        score = 0;
        $("#score").text(score);

        //Generate Random Value
        randValue = Math.ceil(Math.random()*101 + 19);
        

        //Generate Random Crystal Values
        crystal1Value = Math.ceil(Math.random()*12);
        crystal2Value = Math.ceil(Math.random()*12);
        crystal3Value = Math.ceil(Math.random()*12);
        crystal4Value = Math.ceil(Math.random()*12);

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
            console.log(score);
            checkWin(score);
        })

        $("#crystal2").on("click", function(){
            $("#dispWinLose").text("");
            score += crystal2Value;
            rupeeSound.play();
            $("#score").text(score);
            console.log(score);
            checkWin(score);
        })

        $("#crystal3").on("click", function(){
            $("#dispWinLose").text("");
            score += crystal3Value;
            rupeeSound.play();
            $("#score").text(score);
            console.log(score);
            checkWin(score);
        })

        $("#crystal4").on("click", function(){
            $("#dispWinLose").text("");
            score += crystal4Value;
            rupeeSound.play();
            $("#score").text(score);
            console.log(score);
            checkWin(score);
        })
        

        function checkWin(score){

            if(score > randValue){
                //Play Lose Sound
                loseSound.play();
                //Display You Lose!
                numLosses++;
                $("#losses").text(numLosses);
                $("#dispWinLose").text("You Lose...");
                //Restart Game
                crystalCollectors();
            
            } else if(score === randValue){
                //Play Win Sound
                winSound.play();
                //Display You Win!
                numWins++;
                $("#wins").text(numWins);
                $("#dispWinLose").text("You Win!!!");
                //Restart Game
                crystalCollectors();
            }
        }
    }


})

