'use strict';
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Correct Number!`;
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(`.message`).textContent = message;
}
document.querySelector(`.message`).textContent = `Start guessing...`;

document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        displayMessage(`No number!`);
        // When player wins
    } else if (guess === secretNumber) {
        displayMessage(`Correct number!`);
        document.querySelector(`.number`).textContent = secretNumber;

        document.querySelector(`body`).style.backgroundColor = `#60b347`;

        document.querySelector(`.number`).style.width = `30rem`;
        // implement highscore if score is higher than current highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector(`.highscore`).textContent = highscore;
        }
        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(`.message`).textContent = guess > secretNumber ? `Too high!` : `Too low!`
            displayMessage(guess > secretNumber ? `Too high!` : `Too low!`)
            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            displayMessage(`You lost the game!`)
            // document.querySelector(`.message`).textContent = `You lost the game!`;
        }
    }
});


document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // <p class="message">Start guessing...</p>
    displayMessage(`Start guessing`);
    // document.querySelector(`.message`).textContent = `Start guessing...`;
    // <p class="label-score">💯 Score: <span class="score">20</span></p>
    document.querySelector(`.score`).textContent = score;
    // <div class="number">?</div>
    document.querySelector(`.number`).textContent = `?`;
    // <input type="number" class="guess" />
    document.querySelector(`.guess`).value = ``;

    document.querySelector(`body`).style.backgroundColor = `#222`;
    // <div class="number">?</div>
    document.querySelector(`.number`).style.width = `15rem`;
});