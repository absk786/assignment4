
// function to stop and reset the game and timer
// function which determines the right answer
// function to store the initials function to keep the high scores function to submit the scores
// function to clear reset the score table

let finishGameTimeEl = 0;
let currentTimeEl = document.getElementById('currentTimeEl')
let startGame =document.getElementById('startBtn');
let answerContainer = document.querySelector('.answerSection');
let questionContainer = document.querySelector('.questionSection');
let questionDisplay = document.querySelector('.questionStyle');
let questionNumber = 0;
let nextQuestionBtn = document.getElementById('nextQuestion');
let questionData = [
    {
        title:"This is question1", 
        choices:["question 1 answer 1",'question 1 answer 2','question 1 answer 3','question 1 answer 4'],
        answer:'a'
    },
    {
        title:"this is question2", 
        choices:["question 2 answer 1",'question 2 answer 2','question 2 answer 3','question 2 answer 4'],
        answer:'a'
    },{
        title:"this is question3", 
        choices:["question 3 answer 1",'question 3 answer 2','question 3 answer 3','question 3 answer 4'],
        answer:'a'
    },{
        title:"this is question4", 
        choices:["question 4 answer 1",'question 4 answer 2','question 4 answer 3','question 4 answer 4'],
        answer:'a'
    },
]
let correctAns1 = questionData[0].choices[1];
let correctAns1 = questionData[2].choices[3];
let correctAns1 = questionData[3].choices[0];
let correctAns1 = questionData[4].choices[1];

// this function starts the game time and displays it 
let timeHandler = function () {
    let startGameTimeEl = 100;
    let timeInterval = setInterval(function () {
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
        window.alert("game over");
    }
        }, 1000);
}

// this function will create the answer buttons on the page
 function answerButtonHandler (btnID) {

    question = document.createElement('p');
    question.className ='questionStyle';
    question.textContent = questionData[questionNumber].title;
    console.log(questionData[questionNumber].title);
    questionContainer.appendChild(question);

    answerBtn1 = document.createElement('button');
    answerBtn1.className = 'answerBtn';
    answerBtn1.setAttribute = ('btn-id', btnID);
    answerBtn1.textContent = questionData[questionNumber].choices[0];
    answerContainer.appendChild(answerBtn1);

    answerBtn2 = document.createElement('button');
    answerBtn2.className = 'answerBtn';
    answerBtn2.setAttribute = ('btn-id', btnID);
    answerBtn2.textContent = questionData[questionNumber].choices[1];
    answerContainer.appendChild(answerBtn2);

    answerBtn3 = document.createElement('button');
    answerBtn3.className = 'answerBtn';
    answerBtn3.setAttribute = ('btn-id', btnID);
    answerBtn3.textContent = questionData[questionNumber].choices[2];
    answerContainer.appendChild(answerBtn3);

    answerBtn4 = document.createElement('button');
    answerBtn4.className = 'answerBtn';
    answerBtn4.setAttribute = ('btn-id', btnID);
    answerBtn4.textContent = questionData[questionNumber].choices[3];
    answerContainer.appendChild(answerBtn4);
}

// this functoin will generate the next question
function nextQuestion () {
    console.log('the next question button is working');
    answerButtonHandler(questionNumber);
    questionNumber='';
    questionNumber ++;
    if (questionNumber > questionData.length) {
        window.alert("the game is now finished");
        questionNumber ='';
    }
}

// this function will determine the points logic
let playerAnswer = '';

function determinePoints () {

    if (playerAnswer === ) {

    }


}




startGame.onclick = timeHandler;
nextQuestionBtn.onclick = nextQuestion;


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
