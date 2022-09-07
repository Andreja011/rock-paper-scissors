"use strict";

// Scores
let rounds = 0;
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector(`.rock`);
const paper = document.querySelector(`.paper`);
const scissor = document.querySelector(`.scissor`);
const messages = document.querySelector(`.section-player-scores-result`);

rock.addEventListener("click", function () {
  console.log(playRound("rock", computerChoise()));
});
paper.addEventListener("click", function () {
  console.log(playRound("rock", computerChoise()));
});
scissor.addEventListener("click", function () {
  console.log(playRound("scissor", computerChoise()));
});
const computerChoise = function () {
  const items = ["Rock", "Paper", "Scissor"];
  const choise = items[Math.floor(Math.random() * items.length)].toLowerCase();
  return choise;
};
// Play round
const playRound = function (player, computer) {
  // Capitalize first letter
  // const playerCapitalize = player.charAt(0).toUpperCase() + player.slice(1);
  const computerCapitalize =
    computer.charAt(0).toUpperCase() + computer.slice(1);
  // Comparation
  // Rock
  if (player === "rock" && computer === "paper") {
    computerScore++;
    const playerLoseRock = `You lose. Rock is weaker than ${computerCapitalize}.
    Score is: Player ${playerScore}, Computer ${computerScore}.`;
    messages.classList.add("messages");
    return (messages.textContent = playerLoseRock);
  } else if (player === "rock" && computer === "scissor") {
    playerScore++;
    const playerWinRock = `You win. Rock is stronger than ${computerCapitalize}.
    Score is: Player ${playerScore}, Computer ${computerScore}.`;
    messages.classList.add("messages");
    return (messages.textContent = playerWinRock);
    // Paper
  } else if (player === "paper" && computer === "rock") {
    playerScore++;
    return `You win. Paper is stronger than ${computerCapitalize}.
    Score is: Player ${playerScore}, Computer ${computerScore}.`;
  } else if (player === "paper" && computer === "scissor") {
    computerScore++;
    return `You lose. Paper is weaker than ${computerCapitalize}. 
    Score is: Player ${playerScore}, Computer ${computerScore}.`;
    // Scissor
  } else if (player === "scissor" && computer === "paper") {
    playerScore++;
    return `You win. Scissor is stronger than ${computerCapitalize}.
    Score is: Player ${playerScore}, Computer ${computerScore}.`;
  } else if (player === "scissor" && computer === "rock") {
    computerScore++;
    return `You lose. Scissor is weaker than ${computerCapitalize}. 
    Score is: Player ${playerScore}, Computer ${computerScore}.`;
    // Draw
  } else if (player === computer) {
    return `Draw. ${
      player.charAt(0).toUpperCase() + player.slice(1)
    } and ${computerCapitalize} are the same. 
    Score is: Player ${playerScore}, Computer ${computerScore}.`;
  }
};

const game = function () {
  for (let i = rounds; rounds < 5; rounds++) {
    // Getting player choise
    // const playerChoise = prompt("What is your choise?").toLowerCase();
    // Getting computer random choise
    // console.log(playRound(playerChoise, computerChoise()));

    if (playerScore === computerScore) {
      return "Tie.";
    } else if (playerScore > computerScore) {
      return "You won!";
    } else return "Computer win!";
  }
};

console.log(game());

// New Excersise
// Create three buttons, one for each selection.

// Add an event listener to the buttons that call your playRound function
// with the correct playerSelection every time a button is clicked.
// (you can keep the console.logs for this step)
// Add a div for displaying results
// and change all of your console.logs into DOM methods.
// Display the running score,
// and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code
// to make it work for this.
// That’s OK! Reworking old code is an important part of a programmer’s life.
