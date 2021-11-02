// create an event listener for the start game button the user sees...

let game;

let button = document.getElementById("btn__reset");
// starts game when the start game button is clicked...
button.addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
})

// event listerner that handles the pressing of oncreen keyboard...
let keyboard = document.getElementById("qwerty");
keyboard.addEventListener("click", (e) => {
    let target = e.target;

    if (target.tagName ==="BUTTON"){
        game.handleInteraction(target.textContent);
    }
})


