const choices = ["rock", "paper", "scissors"];
const playerChoice = process.argv[2].toLowerCase();
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

if (!choices.includes(playerChoice)) {
  console.log("Invalid choice. Please enter rock, paper, or scissors.");
} else {
  console.log(`You chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  console.log(playRound(playerChoice, computerChoice));
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection;
  computerSelection = computerSelection;

  if (playerSelection === computerSelection) return "It's a tie!";

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
