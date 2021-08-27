var humanScore = 0;
var computerScore = 0;

document.getElementById('hard').onclick = knockHard;
document.getElementById('twice').onclick = knockTwice;
document.getElementById('soft').onclick = knockSoft;

function knockHard() {
  knock("hard");
}
function knockTwice() {
  knock("twice");
}
function knockSoft() {
  knock("soft");
}

function knock(humanKnock) {
  
  computerAnswer = getComputerAnswer();
  
  document.getElementById('status').innerHTML = "<p>You chose to <strong>knock " + humanKnock + "</strong>. My answer is <strong>" + computerAnswer + "</strong>.</p>";
  
  if(humanKnock == 'hard' || 'twice' || 'soft') {
    let waitAnswer = ['Sorry for waiting, please come back later', 'Thanks for waiting, please enter office']

    if(computerAnswer == 'enter') {
      document.getElementById('status').innerHTML += "<p>Please enter office :) </p>";
    } else if (computerAnswer == 'wait') {
      setTimeout(() => {
      document.getElementById('status').innerHTML += waitAnswer[Math.floor(Math.random() * waitAnswer.length)];
      }, 4000)
    } else if (computerAnswer == 'busy') {
      document.getElementById('status').innerHTML += "<p>Please come back later</p>";
    }
    humanScore++;
  }

  document.getElementById('humanScore').innerHTML = humanScore;
  
}

function getComputerAnswer() {
  var answers = ['enter', 'wait', 'busy'];
  var answer = answers[Math.floor(Math.random() * answers.length)];
  return answer;
}
