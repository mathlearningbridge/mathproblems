let coins = 0;
let currentAnswer = 0;

function generateProblem() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  currentAnswer = a + b;
  document.getElementById("problem").textContent = `What is ${a} + ${b}?`;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === currentAnswer) {
    coins += 10;
    document.getElementById("feedback").textContent = "Correct! +10 coins 🎉";
  } else {
    document.getElementById("feedback").textContent = "Oops! Try again.";
  }
  document.getElementById("currency").textContent = `Coins: ${coins}`;
  generateProblem();
}

window.onload = generateProblem;
