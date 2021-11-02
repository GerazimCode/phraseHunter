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
        overlay.style.display = "block";
        if(status === "lose"){
            gameOverMessage.textContent = "You Lost! Relax and Try Again!";

        }else if( status === "win"){
            gameOverMessage.textContent = "Great Job, You Won!";
        }
        overlay.classList.replace(theOverlayClass, status);
        
        // following code resets the game after the user wins or loses the game...
        let div = document.getElementById("phrase")
        let ul = div.firstElementChild;
        while (ul.firstChild){
            ul.firstChild.remove();
        }

        // resets the keyboard...
        let keyboard = document.getElementById("qwerty");
        let buttons = keyboard.getElementsByTagName("button");
        for (let i=0; i<buttons.length; i++){
            buttons[i].disabled = false;
            buttons[i].className = "key";
        }

        // resets all of the heart images
        let scoreboard = document.getElementById("scoreboard");
        let heartImages = scoreboard.getElementsByTagName("img");
        for (let i=0; i<heartImages.length; i++){
            heartImages[i].src = "images/liveHeart.png";
        }
    }

    // function that handles the onscreen keyboard button clicks/handles also the interaction of the player has won...
    handleInteraction(letter){
        let keyboard = document.getElementById("qwerty");
        let buttons = keyboard.getElementsByTagName("button");

        if (this.activePhrase.checkLetter(letter)){

            // adds the chosen css class when the chosen letter in in the phrase
            for(let i=0; i<buttons.length; i++){
                if(buttons[i].textContent === letter){
                    buttons[i].disabled = true;
                    buttons[i].classList.add("chosen");
                }
            }

            this.activePhrase.showMatchedLetter(letter);
            this.checkForWin();
            if(this.checkForWin()){
                this.gameOver("win");
            }
            // adds the wrong css class when the clicked letter is not in the phrase...
        } else{
            for(let i=0; i<buttons.length; i++){
                if(buttons[i].textContent === letter){
                    buttons[i].disabled = true;
                    buttons[i].classList.add("wrong");
                }
            }
            this.removeLife();
        }
    }
}