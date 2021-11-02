/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// This class handles the start and finish of the game, handling interactions, getting a random phrase, checking for a win...


class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase("Programming languages"),
            new Phrase("The Water Cycle"),
            new Phrase("The Oxygen Cycle"),
            new Phrase("Our Solar System"),
            new Phrase("Apples are healthy")
        ];
        this.activePhrase = null;
    }

    // method that randomly chooses the phrase object...
    getRandomPhrase(){
        let randomPhrase = Math.floor(Math.random() * 5);
        return this.phrases[randomPhrase];
    }

    // begins game by selecting a random phrase and displaying it to the user..
    startGame(){
        let overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        let selectedPhrase = this.getRandomPhrase();
        this.activePhrase = selectedPhrase;
        selectedPhrase.addPhraseToDisplay();

    }

    // this methods checks to see if the player has revealed all the letters in the active phrase...
    checkForWin(){
        let letterList = document.querySelector("#phrase ul").children;
        let characterCount = 0;
        let spaceCount = 0;

        for(let i=0; i<letterList.length; i++){
            if(letterList[i].classList.contains("show")){
                characterCount += 1;
            }else if(letterList[i].classList.contains("space")){
                spaceCount += 1;
            }
        }

        return (characterCount + spaceCount) === letterList.length; 
    }

    // this removes a life from the score board by replacing the live heart by a lost heart..
    removeLife(){
        this.missed += 1;
        let score = document.querySelector("#scoreboard ol").children;
        score[this.missed - 1].querySelector("img").src = "images/lostHeart.png";
        if(this.missed === 5){
            this.gameOver("lose");
        }

    }

    // this displays the original overlay and updates depending on the outcome of the game.
    gameOver(status){
        let overlay = document.getElementById("overlay");
        let gameOverMessage = document.getElementById("game-over-message");
        let theOverlayClass = overlay.className;
        // let overlayClass = document.getElementById("overlay");
        // to double check this code and test it for more accuracy...
        // document.removeEventListener("keyup", eventHandler);
        overlay.style.display = "block";
        if(status === "lose"){
            gameOverMessage.textContent = "Game Over";

        }else if( status === "win"){
            gameOverMessage.textContent = "Great Job, You Won!";
        }
        overlay.classList.replace(theOverlayClass, status);
        // this.resetGame();
    }
}