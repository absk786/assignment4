
// function to clear reset the score table

let answerSectionEvent = document.querySelector('#answerSectionEvent');
let finishGameTimeEl = 0;
let currentTimeEl = document.getElementById('currentTimeEl')
let startGame =document.getElementById('startBtn');
let endGame = document.getElementById('endBtn');
let answerContainer = document.querySelector('.answerSection');
let questionContainer = document.querySelector('.questionSection');
let questionDisplay = document.querySelector('.questionStyle');
let questionNumber = 0;
let playerAns ='';
let currentIndex=0;
let questionData = [
    {
        title:"This is question1", 
        choices:["question 1 answer 1",'correct answer','question 1 answer 3','question 1 answer 4'],
        answer:"correct answer"
    },
    {
        title:"this is question2", 
        choices:["correct answer",'question 2 answer 2','question 2 answer 3','question 2 answer 4'],
        answer:"correct answer"

    },{
        title:"this is question3", 
        choices:["question 3 answer 1",'question 3 answer 2','question 3 answer 3','question 3 answer 4'],
        answer:"correct answer"

    },{
        title:"this is question4", 
        choices:["question 4 answer 1",'correct answer','question 4 answer 3','correct answer'],
        answer:"correct answer"

    },
]

// this function starts the game time and displays it 
function timeHandler () {
    let startGameTimeEl = 10;
    console.log(playerAns);
    
    let timeInterval = setInterval (function () {
    if (startGameTimeEl > 1) {
        currentTimeEl.textContent = startGameTimeEl + ' seconds remaining';
        startGameTimeEl--;
        nextQuestion();
        // pointsCalculator ();
    }
    else if (startGameTimeEl === 1) {
        currentTimeEl.textContent = startGameTimeEl + ' second remaining';
        startGameTimeEl--;
    }
    else {
        currentTimeEl.textContent == '';
        clearInterval(timeInterval);
        window.alert("game over");
    }
        }, 1000);
}

// this funtion determines the points logic.
// function pointsCalculator () {
// playerAns = event.target.textContent; 
//     if (this.value === questionData[currentIndex].answer){
//             nextQuestion();
//         } else if (this.value !== questionData[currentIndex].answer) {
//             currentTimeEl -= 10;
//             nextQuestion ();
//         }else if (questionNumber > q) {
//             window.alert("the game is now finished");
//             storeInitials();
// }}

// this functoin will generate the next question
function nextQuestion () {
    let currentQuestion = document.createElement('p');
    currentQuestion = questionData[currentIndex].title;
    let currentAnswersChoice = currentQuestion.choices;
    console.log("current ans choice =",currentAnswersChoice);
    console.log("current question", currentQuestion);
    questionContainer.textContent = currentQuestion[currentIndex].title;
    questionContainer.appendChild(currentQuestion);
   
    for (var i=0; i < currentAnswersChoice.length; i++) {
        let answerBtn = document.createElement('button');
        
        answerBtn.textContent = currentAnswersChoice[i]
        answerBtn.onclick = pointsCalculator;
        answerBtn.setAttribute("class", currentAnswersChoice[i]);
        answerBtn.className = ".answerBtn", currentAnswersChoice[i];
        answerContainer.appendChild(answerBtn);
        currentIndex++;
    }
}

// function to stop and reset the game and timer
function endQuiz () {
    currentTimeEl.textContent == '';
    clearInterval(timeInterval);}

// function to store the initials function to keep the high scores function to submit the scores
function storeInitials () {
}

startGame.onclick = timeHandler;
endGame.onclick= endQuiz;
// answerSectionEvent.addEventListener("click", playerAns);

