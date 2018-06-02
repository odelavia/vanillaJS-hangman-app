'use strict'
import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#remainingGuesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
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

const setWordDifficulty = () => {
    if (document.querySelector("#option-one").checked) {
        console.log('checked')
    }
}
// const setGuessDifficulty =

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

setWordDifficulty()
document.querySelector('#reset').addEventListener('click', startGame)

startGame()

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
