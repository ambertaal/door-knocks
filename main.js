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
    if(computerAnswer == 'enter') {
      document.getElementById('status').innerHTML += "<p>Please enter office :) </p>";
    } else if (computerAnswer == 'wait') {
      document.getElementById('status').innerHTML += "<p>Please come back later or enter office</p>";
    } else if (computerAnswer == 'busy') {
      document.getElementById('status').innerHTML += "<p>Please come back later</p>";
    }
    humanScore++;
  }

  document.getElementById('humanScore').innerHTML = humanScore;
  
}

function getComputerAnswer() {
  var plays = ['enter', 'wait', 'busy'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}
