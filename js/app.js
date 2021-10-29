/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// create an event listener for the start game button the user sees...

let game;

let button = document.getElementById("btn__reset");
// starts game when the start game button is clicked...
button.addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
})


