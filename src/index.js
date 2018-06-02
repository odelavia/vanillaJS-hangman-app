'use strict'
import Hangman from './hangman'
import getPuzzle from './requests'
import hangman from './hangman';

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#remainingGuesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
    console.log(`you have ${game1.remainingGuesses} remaining guesses`)
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split(' ').forEach((word) => {
        const divEl = document.createElement('div')
        divEl.className = "space"
        word.split('').forEach((letter) => {
            const letterEl = document.createElement('span')
            letterEl.textContent = letter
            divEl.appendChild(letterEl)
        })
        puzzleEl.appendChild(divEl)
    })
}

let initialWordDifficulty = document.querySelector('.words-radio-group > input[type=radio]:checked ').nextSibling.innerHTML
console.log(`word value is ${initialWordDifficulty}`)

let initialGuessDifficulty = document.querySelector('.guesses-radio-group > input[type=radio]:checked').nextSibling.innerHTML
console.log(`initial guess value is ${initialGuessDifficulty}`)

const startGame = async () => {
    const puzzle = await getPuzzle(initialWordDifficulty)
    game1 = new Hangman(puzzle, initialGuessDifficulty)
    console.log(game1.word.join(''))
    render()
}
const startNewDifficulty = () => {
    document.querySelector('.words-form').addEventListener('change', (e) => {
        let wordDifficulty = document.querySelector('.words-radio-group > input[type=radio]:checked ').nextSibling.innerHTML
        console.log(`word value is ${wordDifficulty}`)
        initialWordDifficulty = wordDifficulty
        startGame()
    })
}
const startGuessDifficulty = () => {
    document.querySelector('.guesses-form').addEventListener('change', (e) => {
        let guessDifficulty = document.querySelector('.guesses-radio-group > input[type=radio]:checked ').nextSibling.innerHTML
        console.log(`new initial guess value is ${guessDifficulty}`)
        const tempInitialGuessDifficulty = initialGuessDifficulty
        initialGuessDifficulty = guessDifficulty
        if (game1.remainingGuesses != tempInitialGuessDifficulty) {
            startGame()
        } else {
            const sameGame = async () => {
                const puzzle = await startGame.puzzle
                game1.remainingGuesses = guessDifficulty
                console.log(game1.word.join(''))
                render()
                console.log(`remaining guess value is ${game1.remainingGuesses}`)
            }
            sameGame()
        }
    })
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
startNewDifficulty()
startGuessDifficulty()

// ---------------------------------------
// Animate man
// var animate = function () {
// drawArray[9]();
// }

// // Hangman
// let canvas =  function(){

//     const myStickman = document.getElementById("stickman");
//     let context = myStickman.getContext('2d');
//     context.beginPath();
//     context.strokeStyle = "#fff";
//     context.lineWidth = 2;
// };

// let head = function(){
//     const myStickman = document.getElementById("stickman");
//     let context = myStickman.getContext('2d');
//     context.beginPath();
//     context.arc(60, 25, 10, 0, Math.PI*2, true);
//     context.stroke();
// }

// let draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
//     context.moveTo($pathFromx, $pathFromy);
//     context.lineTo($pathTox, $pathToy);
//     context.stroke(); 
// }

// let frame1 = function() {
//     draw (0, 150, 150, 150);
// };

// let frame2 = function() {
//     draw (10, 0, 10, 600);
// };

// let frame3 = function() {
//     draw (0, 5, 70, 5);
// };

// let frame4 = function() {
//     draw (60, 5, 60, 15);
// };

// let torso = function() {
//     draw (60, 36, 60, 70);
// };

// let rightArm = function() {
//     draw (60, 46, 100, 50);
// };

// let leftArm = function() {
//     draw (60, 46, 20, 50);
// };

// let rightLeg = function() {
//     draw (60, 70, 100, 100);
// };

// let leftLeg = function() {
//     draw (60, 70, 20, 100);
// };

// const drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
