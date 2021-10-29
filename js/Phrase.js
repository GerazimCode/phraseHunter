/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* This class handles the creation of phrases */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();

    }

    // Methods adds letter placeholders to the display when the game starts
    addPhraseToDisplay(){
        let splitPhrase = this.phrase.split('');
        let phraseDiv = document.getElementById("phrase");
        splitPhrase.forEach(character => {
            let spaceCharacter = `<li class = "space"> </li>`;
            // the example phrase html text file shows "hide letter before the character, this inludes that style"
            let letterCharacter = `<li class = "hide letter ${character}">${character}</li>`;
            if (character === " "){
                phraseDiv.querySelector("ul").insertAdjacentHTML("beforeend", spaceCharacter);
            }else{
                phraseDiv.querySelector("ul").insertAdjacentHTML("beforeend", letterCharacter);
            }
        })
    }

    // checks to see if a letter selected by the player matches a letter in the phrase...
    checkLetter(letter){
        let splitPhrase = this.phrase.split(" ");
        if(splitPhrase.includes(letter)){
            return true;
        }
    }

    // reveals the letter(s) on the board that matches the players selection... 
    showMatchedLetter(letter){
        let phraseDiv = document.querySelector("#phrase");
        let list = phraseDiv.getElementsByTagName("li");
        for(let i=0; i<list.length; i++){
            if(list[i].textContent === letter){
                list[i].classList.add("show");
            }
        }
    }
}