let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];


function generateQuestion() {

    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    operator = operators[Math.floor(Math.random() * operators.length)];

    if (operator === "+") {
        correctAnswer = num1 + num2;
    } else if (operator === "-") {
        correctAnswer = num1 - num2;
    } else if (operator === "*") {
        correctAnswer = num1 * num2;
    }
    document.getElementById("question").innerText = `${num1} ${operator} ${num2}`;
}

function checkAnswer() {
  const answerInput = document.getElementById("answer");
  const userAnswer = Number(answerInput.value);
  const messageElement = document.getElementById("message");

  const previousCorrectAnswer = correctAnswer;

  if (answerInput.value !== "" && userAnswer === previousCorrectAnswer) {
    score++;
    messageElement.style.color = "green";
    messageElement.innerText = "Correct!";
  } else {
    messageElement.style.color = "red";
    messageElement.innerText = `Wrong! Correct answer was ${previousCorrectAnswer}`;
  }

  document.getElementById("score").innerText = score;

  answerInput.value = "";

  if (score >= 5) {
    document.getElementById("div-questions").style.display = "none";
    document.getElementById("div-success").style.display = "block";
  } else {
    generateQuestion();
  }
}

function playAgain() {
  score = 0;
  document.getElementById("score").innerText = score;
  document.getElementById("message").innerText = "";
  document.getElementById("answer").value = "";

  document.getElementById("div-questions").style.display = "block";
  document.getElementById("div-success").style.display = "none";

  generateQuestion();
}

generateQuestion();