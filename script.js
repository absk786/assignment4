
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
let question = document.createElement('p');
let answerBtn1 = document.createElement('button');
let answerBtn2 = document.createElement('button');
let answerBtn3 = document.createElement('button');
let answerBtn4 = document.createElement('button');
let playerAns ='';
let questionData = [
    {
        title:"This is question1", 
        choices:["question 1 answer 1",'correct answer','question 1 answer 3','question 1 answer 4'],
    },
    {
        title:"this is question2", 
        choices:["correct answer",'question 2 answer 2','question 2 answer 3','question 2 answer 4'],
    },{
        title:"this is question3", 
        choices:["question 3 answer 1",'question 3 answer 2','question 3 answer 3','question 3 answer 4'],
    },{
        title:"this is question4", 
        choices:["question 4 answer 1",'correct answer','question 4 answer 3','correct answer'],
    },
]
let ans0 = questionData[0].choices[1];
let ans1 = questionData[1].choices[1];
let ans2 = questionData[2].choices[0];
let ans3 = questionData[3].choices[2];
let answers = [ans0, ans1, ans2, ans3];

// this function starts the game time and displays it 
function timeHandler () {
    createQuestionAnswerElement();
    nextQuestion();
    let startGameTimeEl = 100;
    console.log(playerAns);
    
    let timeInterval = setInterval (function () {
    if (startGameTimeEl > 1) {
        currentTimeEl.textContent = startGameTimeEl + ' seconds remaining';
        startGameTimeEl--;
        pointsCalculator ();
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

function pointsCalculator () {
playerAns = event.target.textContent; 
    if (playerAns === answers[q]){
            nextQuestion();
        } else if (playerAns !== answers[q]) {
            currentTimeEl -= 10;
            nextQuestion ();
        }else if (questionNumber > q) {
            window.alert("the game is now finished");
            storeInitials();
}}

// this functoin will generate the next question
function nextQuestion (q) {
    for (q=0; q < questionNumber; q++);
    answerButtonHandler(q);
    questionNumber ++;
}
// this funtion determines the points logic.
// this function will create the question and answer buttons on the page
 function answerButtonHandler () {
    question.textContent = questionData[questionNumber].title; 
    answerBtn1.textContent = questionData[questionNumber].choices[0];
    answerBtn2.textContent = questionData[questionNumber].choices[1];
    answerBtn3.textContent = questionData[questionNumber].choices[2];
    answerBtn4.textContent = questionData[questionNumber].choices[3];
}

// function to create the question and answer dom elements
function createQuestionAnswerElement () { 
    question.className ='questionStyle';
    questionContainer.appendChild(question);

    answerBtn1.className = 'answerBtn';
    answerContainer.appendChild(answerBtn1);

    answerBtn2.className = 'answerBtn';
    answerContainer.appendChild(answerBtn2);

    answerBtn3.className = 'answerBtn';
    answerContainer.appendChild(answerBtn3);

    answerBtn4.className = 'answerBtn';
    answerContainer.appendChild(answerBtn4);

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
answerSectionEvent.addEventListener("click", playerAns);

// var index = 0;
// var time = 100
// console.log(questions[i]);
// function score () {
//     if (this.value !== questions[index].answer) {
//         time -= 10;
//     }
//     index++;
// }

// function test2 () {
//     var currentquestion = questions[index]
//     title.textContent = currentquestion.title;
//     currentquestion.choices.forEach(function(choice,i){
//         var choicebtn = document.createElement('button')
//         choicebtn.textContent = i+1+' ' + choice
//     })
// }
