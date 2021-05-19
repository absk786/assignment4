
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
let timeRemaining = 3;
let timeInterval;
let submitButtonEl;
let previousScore =[];
let scoresArr = [];
let scoreDataObj;
let getInitial = document.getElementById('getInitial');
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

    },{
        title:"Well done for completing the quiz", 

    },
]

function runGame () {
    timeHandler();
    nextQuestion();
}

// this function starts the game time and displays it 
function timeHandler () {
    timeInterval = setInterval (function () {
    if (timeRemaining > 1) {
        currentTimeEl.textContent = timeRemaining + ' seconds remaining';
        timeRemaining--;
    }
    else if (timeRemaining === 1) {
        currentTimeEl.textContent = timeRemaining + ' second remaining';
        timeRemaining--;
    }
    else {
        currentTimeEl.textContent = '';
        clearInterval(timeInterval);
        removeExistingQuestionAnswerChildEl();
        let timeOutEl = document.createElement('p');
        timeOutEl.textContent = "Sorry! Times Up! Enter your initials below!"
        questionContainer.appendChild(timeOutEl);
        createInitialEl();
    }
        }, 1000);
}

// this funtion determines the points logic.
function pointsCalculator () {
playerAns = event.target.textContent; 
    if (playerAns === questionData[currentIndex].answer){
        removeExistingQuestionAnswerChildEl();
        nextQuestion();
        } else if (playerAns !== questionData[currentIndex].answer) {
            timeRemaining -= 10;
            removeExistingQuestionAnswerChildEl();
            nextQuestion ();
        }else if (currentIndex === questionData.length ) {
            window.alert("the game is now finished");
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
   
    if (currentIndex === questionData.length) {
                removeExistingQuestionAnswerChildEl();
                storeInitials();
    } 
    
}
    currentIndex++;
    
}
// function to store the initials function to keep the high scores function to submit the scores
function createInitialEl () {
    // create the form element so i can add the input element
   let storeInitialParentFormEl = document.createElement("form");
   questionContainer.appendChild(storeInitialParentFormEl); 
    // create the input element
    let storeInitialEl = document.createElement("input");
    storeInitialEl.id = "getInitial";
    storeInitialEl.placeholder = "Type in your initials"
    storeInitialEl.textContent = "Enter initials"
    storeInitialParentFormEl.appendChild(storeInitialEl);
    // create the submit button
    submitButtonEl = document.createElement("button");
    submitButtonEl.id = "submitButton";
    submitButtonEl.textContent= "Submit Initials";
    storeInitialParentFormEl.appendChild(submitButtonEl);
}

function addInitialToStorage () {
    // ev.preventDefault ();
    scoresArr = localStorage.getItem("playerExistingScores") || [];
    // console.log(getInitial.value);
    
    // data obj to store intial
    scoreDataObj ={
    initial:getElementById("getInitial").value,
    // time:need to get time of user
}
    // push information to array
    scoresArr.push(scoreDataObj);
    localStorage.setItem("playerExistingScores", scoresArr);
    console.log(scoreDataObj);

    // loop through scores array and scores object with new content
    for (var i =0; i < scoresArr.length; i++) {
        if (scoresArr.initial === parseInt(scoresArr)) {
            scoresArr[i].initial = "Initials";
    }
}
}

// function to stop and reset the game and timer
function endQuiz () {
    removeExistingQuestionAnswerChildEl ()
    clearInterval(timeInterval);
    currentTimeEl.textContent = '';
    currentIndex=0;
}

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
endGame.onclick= endQuiz;
submitButtonEl.onclick = addInitial;
answerContainer.addEventListener("click", playerAns);


