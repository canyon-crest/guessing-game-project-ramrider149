// time
date.textContent=time();

// global variables
let score, answer, level;
const levelArr = document.getElementsByName("level")
// event listeners
playBtn.addEventListener("click", play); 
guessBtn.addEventListener("click", makeGuess);

function time(){
    let d = new Date();
    // concatenate date AND time
    let str = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();



    return str;
}
function play(){
    playBtn.disabled = true;
    guessBtn.disabled=false;
    guess.disabled=false;
    for(let i=0; i<levelArr.length; i++){
        levelArr[i].disabled = true;
        if(levelArr[i].checked){
            level= levelArr[i].value;
        }
    }
    answer = Math.floor(Math.random()*level)+1;
    msg.textContent = "Guess a number 1-" + level;
    guess.placeholder = answer;
    score = 0;

}
function makeGuess(){
    let userGuess = parseInt(guess.value);
    if(isNaN(userGuess) || userGuess < 1 || userGuess>level){
        msg.textContent = "INVALID, guess a number!";
        return;
    }
    score++;
    if(userGuess < answer){
        msg.textContent = "TOO LOW, GUESS AGAIN"
    }
    else if(userGuess > answer){
        msg.textContent = "TOO HIGH, GUESS AGAIN"
    }
    else{
        msg.textContent = "CORRECT! It took " + score + " tries.";
    }

}
