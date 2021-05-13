// function to start the game and timer
// Function handleTimer - timer logic 
// function to stop and reset the game and timer
// functoin which determines the points logic
// function which displays the next question
// function which determines the right answer
// function which takes the questiom data and populates it and stores the information
// function to store the initials function to keep the high scores function to submit the scores
// function to clear reset the score table

let startGameTimeEl = 100;
let finishGameTimeEl = 0;
// let timeIntervalEl = (currentTime(),1000); 
let answerContainer = document.querySelector('.answerSection');
let questionDisplay = document.querySelector('.questionStyle');
let nextQuestoin = document.querySelector('.nextButton');

var questionData = [
{
    title:"question1", 
    choices:["q1a1",'q1b1','q1c1','q1d1'],
    answer:'a'
},
{
    title:"question2", 
    choices:["q2a2",'q2b2','q2c2','q2d2'],
    answer:'a'
},{
    title:"question3", 
    choices:["q3a3",'q3b3','q3c3','q3d3'],
    answer:'a'
},{
    title:"question4", 
    choices:["q4a4",'q4b4','q4c4','q4d4'],
    answer:'a'
},
]
// this function will create the answer buttons on the page
let answerButtonHandler = function (btnID) {
    question = document.createElement('title');
    question.className ='questionStyle';
    question.textContent = questionData[0].title;
    
    answerBtn1 = document.createElement('button');
    answerBtn1.className = 'answerBtn';
    answerBtn1.setAttribute = ('btn-id', btnID);
    answerBtn1.textContent = questionData[0].choices[0];
    answerContainer.appendChild(answerBtn1);

    answerBtn2 = document.createElement('button');
    answerBtn2.className = 'answerBtn';
    answerBtn2.setAttribute = ('btn-id', btnID);
    answerBtn2.textContent = questionData[0].choices[1];
    answerContainer.appendChild(answerBtn2);

    answerBtn3 = document.createElement('button');
    answerBtn3.className = 'answerBtn';
    answerBtn3.setAttribute = ('btn-id', btnID);
    answerBtn3.textContent = questionData[0].choices[2];
    answerContainer.appendChild(answerBtn3);

    answerBtn4 = document.createElement('button');
    answerBtn4.className = 'answerBtn';
    answerBtn4.setAttribute = ('btn-id', btnID);
    answerBtn4.textContent = questionData[0].choices[3];
    answerContainer.appendChild(answerBtn4);
}
answerButtonHandler ();

// event listnerers
mainArea.eventListerners('click', questionPasser);


let oldQuestion;
let newQuestion;

let questionPasser = function () {
   
    for (q=0; q=4; q++) {
        
    }

}

questionPasser();

// let t;
// for (t=0; t<startGameTimeEl;t--);

// let currentTime = function()  {
//     startGameTimeEl--;
//     console.log(currentTime);
// }

// let currentTime = function (){

// }  

//     startGameTimeEl -=1 = currentTimeEl;

//     console.log(currentTimeEl);
// }


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
