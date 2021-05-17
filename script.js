
// function to clear reset the score table

// let answerSectionEvent = document.querySelector('#answerSectionEvent');
let answerContainer = document.querySelector('.answerSection');
let questionContainer = document.querySelector('.questionSection');
let currentTimeEl = document.getElementById('currentTimeEl')
let startGame =document.getElementById('startBtn');
let endGame = document.getElementById('endBtn');
let finishGameTimeEl = 0;
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
        choices:["question 3 answer 1",'correct answer','question 3 answer 3','question 3 answer 4'],
        answer:"correct answer"

    },{
        title:"this is question4", 
        choices:["question 4 answer 1",'correct answer','question 4 answer 2','question 4 answer 3'],
        answer:"correct answer"

    },
]

function runGame () {
    timeHandler();
    nextQuestion();
}

// this function starts the game time and displays it 
function timeHandler () {
    let startGameTimeEl = 20;    
    let timeInterval = setInterval (function () {
    if (startGameTimeEl > 1) {
        currentTimeEl.textContent = startGameTimeEl + ' seconds remaining';
        startGameTimeEl--;
    }
    else if (startGameTimeEl === 1) {
        currentTimeEl.textContent = startGameTimeEl + ' second remaining';
        startGameTimeEl--;
    }
    else {
        currentTimeEl.textContent == '';
        clearInterval(timeInterval);
        removeExistingQuestionAnswerChildEl();
        storeInitials ();
    }
        }, 1000);
}

// this funtion determines the points logic.
function pointsCalculator () {
playerAns = event.target.textContent; 
    if (playerAns === questionData[currentIndex].answer){
        removeExistingQuestionAnswerChildEl();
        nextQuestion();
        } else if (this.value !== questionData[currentIndex].answer) {
            // startGameTimeEl -= 10;
            console.log(questionData[currentIndex].answer);
            removeExistingQuestionAnswerChildEl();
            nextQuestion ();
        }else if (currentIndex === questionData.length ) {
            window.alert("the game is now finished");
            // storeInitials();
}}

// this function will generate the next question
function nextQuestion () {
    let currentQuestion = questionData[currentIndex];
    let questionEl = document.createElement('p');
    questionEl.textContent = currentQuestion.title;
    questionContainer.appendChild(questionEl);    
    let currentAnswersChoice = currentQuestion.choices;
    
    for (var i=0; i < currentAnswersChoice.length; i++) {        
        let answerBtn = document.createElement('button');
        answerBtn.setAttribute("class", currentAnswersChoice[i]);
        answerBtn.className = "answerBtn";
        answerBtn.textContent = currentAnswersChoice[i];
        answerContainer.appendChild(answerBtn);
        answerBtn.onclick = pointsCalculator;
    }
    currentIndex++;
}
// function to store the initials function to keep the high scores function to submit the scores
function storeInitials () {
}
// function to stop and reset the game and timer
function endQuiz () {
    currentTimeEl.textContent == '';
    clearInterval(timeInterval);}
// this function will remove the existing elements of the question and answer
function removeExistingQuestionAnswerChildEl (){
    let removeAnswerParent = document.getElementById("answerSectionEvent");
    let removeAnswerChild0 = removeAnswerParent.getElementsByTagName("button")[0];
    let removeAnswerChild1 = removeAnswerParent.getElementsByTagName("button")[1];
    let removeAnswerChild2 = removeAnswerParent.getElementsByTagName("button")[2];
    let removeAnswerChild3 = removeAnswerParent.getElementsByTagName("button")[3];
    let removeQuestionParent = document.getElementById("questionSectionEvent");
    let removeQuestionChild = removeQuestionParent.getElementsByTagName("p")[0];
    removeAnswerParent.removeChild(removeAnswerChild0);
    removeAnswerParent.removeChild(removeAnswerChild1);
    removeAnswerParent.removeChild(removeAnswerChild2);
    removeAnswerParent.removeChild(removeAnswerChild3);
    removeQuestionParent.removeChild(removeQuestionChild);

    
}

startGame.onclick = runGame;
// endGame.onclick= endQuiz;
answerContainer.addEventListener("click", playerAns);
