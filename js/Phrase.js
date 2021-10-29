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
            let letterCharacter = `<li class = "hide letter ${character}">${character}</li>`;
            if (character === " "){
                phraseDiv.querySelector("ul").insertAdjacentHTML("beforeend", spaceCharacter);
            }else{
                phraseDiv.querySelector("ul").insertAdjacentHTML("beforeend", letterCharacter);
            }
        })
    }
}