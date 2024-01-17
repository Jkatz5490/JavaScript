'use strict';

// Selecting elements
const player0Element = document.querySelector(`.player--0`);
const player1Element = document.querySelector(`.player--1`);
const score0Element = document.querySelector(`#score--0`);
const score1Element = document.getElementById(`score--1`);
const diceElement = document.querySelector(`.dice`)
// When using class in HTML, select using .
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
// did by myself
// when using ID in HTML, select with hashtag
const currentScore0Element = document.querySelector(`#current--0`);
const currentScore1Element = document.querySelector(`#current--1`);
// ------------------
// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add(`hidden`);

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;


const init = function () {
    currentScore0Element.textContent = 0;
    currentScore1Element.textContent = 0;
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    player0Element.classList.remove(`player--winner`);
    player1Element.classList.remove(`player--winner`);
    player0Element.classList.add(`player--active`);
    player1Element.classList.remove(`player--active`);

    diceElement.classList.add(`hidden`);
    // set all conditions to the inital value
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
};
init();

const switchPlayer = function () {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0Element.classList.toggle(`player--active`);
    player1Element.classList.toggle(`player--active`);
};

// Rolling dice functionality
btnRoll.addEventListener(`click`, function () {
    if (playing) {
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        // 2. Display dice
        diceElement.classList.remove(`hidden`);
        diceElement.src = `dice-${dice}.png`;
        // 3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

// Holding dice functionality
btnHold.addEventListener(`click`, function () {
    // 1. Add current score to active player's score
    if (playing) {
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. Check if player's score is >= 100
        // finish the game
        if (scores[activePlayer] >= 100) {
            playing = false;
            console.log(`Player ${activePlayer} won`);
            // document.querySelector(`.player--${activePlayer}`.classList.add(`player--winner`));
            // document.querySelector(`.player--${activePlayer}`.classList.remove(`player--active`));
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);

            // hide elements once game is won
            diceElement.classList.add(`hidden`);
            // btnRoll.classList.add(`hidden`);
            // btnHold.classList.add(`hidden`);
            // btnHold.classList.add(`hidden`);
        }
        else {
            // switch to the next player
            switchPlayer();
        }
    }


})

btnNew.addEventListener(`click`, init)

