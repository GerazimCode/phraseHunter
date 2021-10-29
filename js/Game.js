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
}