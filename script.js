"use strict";

// const playerChoise = prompt("What is your choise?").toLowerCase();

const getComputerChoice = function () {
  const items = ["Rock", "Paper", "Scissors"];
  const choise = items[Math.floor(Math.random() * items.length)];
  return choise.toLowerCase();
};

console.log(getComputerChoice());

// rock wins over scissors and losses over paper
// scissors wins over paper and losses over rock
// paper wins over rock and losses over scissors
