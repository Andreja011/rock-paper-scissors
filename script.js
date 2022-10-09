"use strict";

// Scores
let rounds = 0;
let playerScore = 0;
let computerScore = 0;

const restart = document.querySelector(`.restart`);
const rock = document.querySelector(`.rock`);
const paper = document.querySelector(`.paper`);
const scissor = document.querySelector(`.scissor`);
const messages = document.querySelector(`.section-player-scores-result`);
const scorePlayer = document.querySelector(
  `.section-player-scores-card-score.player`
);
const scoreComputer = document.querySelector(
  `.section-player-scores-card-score.computer`
);

restart.addEventListener("click", function () {
  rounds = 0;
  playerScore = 0;
  computerScore = 0;
  messages.textContent = "";
  scorePlayer.textContent = "";
  scoreComputer.textContent = "";
});

rock.addEventListener("click", function () {
  rounds++;
  // console.log(rounds);
  if (rounds < 5) {
    return playRound("rock", computerChoise());
  } else if (rounds === 5 && playerScore > computerScore) {
    messages.textContent = `After ${rounds} rounds, You won!`;
  } else if (rounds === 5 && playerScore < computerScore) {
    messages.textContent = `After ${rounds} rounds, computer won!`;
  } else if (rounds === 5 && playerScore === computerScore) {
    messages.textContent = `After ${rounds} rounds is tie.`;
  }
});

paper.addEventListener("click", function () {
  rounds++;
  // console.log(rounds);
  if (rounds < 5) {
    return playRound("paper", computerChoise());
  } else if (rounds === 5 && playerScore > computerScore) {
    messages.textContent = `After ${rounds} rounds, You won!`;
  } else if (rounds === 5 && playerScore < computerScore) {
    messages.textContent = `After ${rounds} rounds, computer won!`;
  } else if (rounds === 5 && playerScore === computerScore) {
    messages.textContent = `After ${rounds} rounds is tie.`;
  }
});

scissor.addEventListener("click", function () {
  rounds++;
  // console.log(rounds);
  if (rounds < 5) {
    return playRound("scissor", computerChoise());
  } else if (rounds === 5 && playerScore > computerScore) {
    messages.textContent = `After ${rounds} rounds, player won!`;
  } else if (rounds === 5 && playerScore < computerScore) {
    messages.textContent = `After ${rounds} rounds, computer won!`;
  } else if (rounds === 5 && playerScore === computerScore) {
    messages.textContent = `After ${rounds} rounds is tie.`;
  }
});

function computerChoise() {
  const items = ["Rock", "Paper", "Scissor"];
  const choise = items[Math.floor(Math.random() * items.length)].toLowerCase();
  return choise;
}

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
    const playerLoseRock = `You lose. Rock is weaker than ${computerCapitalize}.`;
    messages.classList.add("messages");
    return (
      (scorePlayer.textContent = playerScore),
      (scoreComputer.textContent = computerScore),
      (messages.textContent = playerLoseRock)
    );
  } else if (player === "rock" && computer === "scissor") {
    playerScore++;
    const playerWinRock = `You win. Rock is stronger than ${computerCapitalize}.`;
    messages.classList.add("messages");
    return (
      (scorePlayer.textContent = playerScore),
      (scoreComputer.textContent = computerScore),
      (messages.textContent = playerWinRock)
    );
    // Paper
  } else if (player === "paper" && computer === "rock") {
    playerScore++;
    const playerWinPaper = `You win. Paper is stronger than ${computerCapitalize}.`;
    messages.classList.add("messages");
    return (
      (scorePlayer.textContent = playerScore),
      (scoreComputer.textContent = computerScore),
      (messages.textContent = playerWinPaper)
    );
  } else if (player === "paper" && computer === "scissor") {
    computerScore++;
    const playerLosePaper = `You lose. Paper is weaker than ${computerCapitalize}.`;
    messages.classList.add("messages");
    return (
      (scorePlayer.textContent = playerScore),
      (scoreComputer.textContent = computerScore),
      (messages.textContent = playerLosePaper)
    );
    // Scissor
  } else if (player === "scissor" && computer === "paper") {
    playerScore++;
    const playerWinScissor = `You win. Scissor is stronger than ${computerCapitalize}.`;
    messages.classList.add("messages");
    return (
      (scorePlayer.textContent = playerScore),
      (scoreComputer.textContent = computerScore),
      (messages.textContent = playerWinScissor)
    );
  } else if (player === "scissor" && computer === "rock") {
    computerScore++;
    const playerLoseScissor = `You lose. Scissor is weaker than ${computerCapitalize}. `;
    messages.classList.add("messages");
    return (
      (scorePlayer.textContent = playerScore),
      (scoreComputer.textContent = computerScore),
      (messages.textContent = playerLoseScissor)
    );
    // Draw
  } else if (player === computer) {
    const draw = `Draw. ${
      player.charAt(0).toUpperCase() + player.slice(1)
    } and ${computerCapitalize} are the same.`;
    messages.classList.add("messages");
    return (
      (messages.textContent = draw),
      (scorePlayer.textContent = playerScore),
      (scoreComputer.textContent = computerScore)
    );
  }
};

// const game = function () {
//   for (let i = rounds; rounds < 5; rounds++) {
//     // Getting player choise
//     // const playerChoise = prompt("What is your choise?").toLowerCase();
//     // Getting computer random choise
//     // console.log(playRound(playerChoise, computerChoise()));

//     if (playerScore === computerScore) {
//       return "Tie.";
//     } else if (playerScore > computerScore) {
//       return "You won!";
//     } else return "Computer win!";
//   }
// };

// console.log(game());

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
