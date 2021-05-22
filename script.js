
// let answerSectionEvent = document.querySelector('#answerSectionEvent');
let answerContainer = document.querySelector('.answerSection');
let questionContainer = document.querySelector('.questionSection');
let currentTimeEl = document.getElementById('currentTimeEl')
let startGame =document.getElementById('startBtn');
let finishGameTimeEl = 0;
let playerAns ='';
let currentIndex=0;
let timeRemaining = 10;
let timeInterval;
let submitButtonEl = document.getElementById("#f")
let previousScore =[];
let scoresArr = [];
let scoreDataObj;
let getInitial = document.getElementById('getInitial');
let userTimeScore;
let inputInitials;
let scoreBoard;
let timeOutEl;
let questionData = [
    {
        title:" What does the following block of code do: $('#test').hide();", 
        choices:["This hides the class'test' ",'This appends the id "test" ','This hides the element Id "test"','This hides the test tag'],
        answer:"This hides the element Id 'test'"
    },
    {
        title:"What does $(this) mean? ", 
        choices:["Select the current HTML element",'Append the selected element to its parent','Add a <p> tag to the selected element','All of above'],
        answer:"Select the current HTML element"

    },{
        title:"What does $('ul li:first-child') mean", 
        choices:["Select a the first column",'Select the first <li> element of the first <ul>','Select the first <ul> of the first <li> elemtn','This code is invalid'],
        answer:"Select the first <li> element of the first <ul>"

    },{
        title:"What does the following mean: '$('p').click();' ", 
        choices:["This assigns a click event to all paragraphs on the page",'This assigns a click event to all lists on the page','This assigns appends a paragraph to the currently selected elemnt','This is a call of the p function'],
        answer:"This assigns a click event to all paragraphs on the page"

    }
    ,{
        title:"What does the focus () functoin do?", 
        choices:["The focus () method attaches an event handler function to an HTML form field",'The focus () method attaches an event handler function to an <input>','This assigns appends a paragraph to the currently selected elemnt','This is a function to bold the text'],
        answer:"The focus () method attaches an event handler function to an HTML form field"

    }
    ,{
        title:"Which method inerts content at the end of the selected elements?", 
        choices:["atEnd()",'append ()','nextTo ()','atBottom()'],
        answer:"append()"
    },{
        title:"What does remove() method do?", 
        choices:["Removes the selected element and its child elements",'Removes the child elements from the selected elements','Both of the above','None of the above'],
        answer:"append()"
    }
]

function runGame () {
    
    if (timeOutEl === "undefined")  { 
    timeHandler();
    nextQuestion();
    }

    else if (timeOutEl !== "undefined") {
    
    // removeExistingQuestionAnswerChildEl();
    timeHandler();
    nextQuestion();  } 
    console.log("Rungame function was called");
}

// this function starts the game time and displays it 
function timeHandler () {
    clearInterval(timeInterval);
    timeInterval = setInterval (function () {
    if (timeRemaining > 1) {
        currentTimeEl.textContent = timeRemaining + ' seconds remaining';
        timeRemaining--;
    }
    else if (timeRemaining > 1 || currentIndex === questionData.length) {
        clearInterval(timeInterval);
        timeRemaining = userTimeScore;
        console.log(userTimeScore);
        // createInitialEl();
    }
    else if (timeRemaining === 1) {
        currentTimeEl.textContent = timeRemaining + ' second remaining';
        timeRemaining--;
        console.log(questionData.length);
        console.log(currentIndex);
    }
    else {
        currentTimeEl.textContent = '';
        clearInterval(timeInterval);
        removeExistingQuestionAnswerChildEl();
        timeOutEl = document.createElement('p');
        timeOutEl.textContent = "Game Over! Enter your initials below!"
        questionContainer.appendChild(timeOutEl);
        createInitialEl();
        userTimeScore = timeRemaining;
        console.log(timeRemaining);
    }
        }, 1000);
        console.log("time handler function was called");
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
}
console.log("points calculator function was called");
answerContainer.addEventListener("click", playerAns);
}

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
// this function creates the elements of storing initials
function createInitialEl () {
    // create the form element so i can add the input element
   let storeInitialParentFormEl = document.createElement("form");
   questionContainer.appendChild(storeInitialParentFormEl); 
    // create the input element
    let storeInitialEl = document.createElement("input");
    // give it an id of getInitial
    storeInitialEl.id = "getInitial";
    // give it a placeholder default value
    storeInitialEl.placeholder = "Type in your initials"
    // add it to the parent elemtn
    storeInitialParentFormEl.appendChild(storeInitialEl);
    // create the submit button
    submitButtonEl = document.createElement("button");
    // give it an id
    submitButtonEl.id = "submitButton";
    // give the button its text 
    submitButtonEl.textContent= "Submit Initials";
    // add the button to the parent
    storeInitialParentFormEl.appendChild(submitButtonEl);
    // storeInitialEl.textContent
    submitButtonEl.addEventListener("click", addInitialToStorage);
}

function addInitialToStorage (event) {
    event.preventDefault();
    inputInitials = document.getElementById("getInitial").value;
    console.log(inputInitials);

    console.log("addInitialToStorage is called");
    // ev.preventDefault ();
    scoresArr = JSON.parse(localStorage.getItem("playerExistingScores")) || [];
    
    //     // data obj to store intial
    scoreDataObj ={
    name:inputInitials
        // initial:getElementById("getInitial").value,  <= this is not working
        // time:need to get time of user
    }
    console.log(scoreDataObj);
    // push information to array
    scoresArr.push(scoreDataObj);
    console.log(scoresArr);
    localStorage.setItem("playerExistingScores", JSON.stringify(scoresArr));
    console.log(scoreDataObj);
    console.log("add initials to storage function was called");
    gameOver();
}

// function to stop and reset the game and timer
function gameOver () {
    questionContainer.textContent = "";
    var displayScoresArr = JSON.parse(localStorage.getItem("playerExistingScores"));
    console.log(displayScoresArr);
    for (var a=0; a < 5; a++) {
        let listScoreEl = document.createElement("li");
        listScoreEl.textContent =  displayScoresArr[a].name;
        questionContainer.appendChild(listScoreEl);
    } 
    let storgeClearButton = document.createElement("button");
    storgeClearButton.textContent = "Clear Scores";
    questionContainer.appendChild(storgeClearButton);
    // submitButtonEl.addEventListener("click", localStorage.clear());

// $(document).ready(function(){

// $('#submitButton').on("click", function (){

//     let allUserScores = $("questionContainer").append("<p>");
//     allUserScores.textContent = scoresArr;
//  })

// });
    // create a P tag and text.content of array
    console.log("endQuiz function was called");
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
    
    if (removeAnswerChild0 !== null) {
        removeAnswerParent.removeChild(removeAnswerChild0);
    }
    if (removeAnswerChild1 !== "undefined") {
        removeAnswerParent.removeChild(removeAnswerChild1);
    }
    if (removeAnswerChild2 !== "undefined") {
        removeAnswerParent.removeChild(removeAnswerChild2);
    }
    if (removeAnswerChild3 !== "undefined") {
        removeAnswerParent.removeChild(removeAnswerChild3);
    }
    if (removeQuestionChild !== "undefined") {
        removeQuestionParent.removeChild(removeQuestionChild);  
        
    }
    console.log("removeExistingQuestionAnswerChildEl  function was called");
}

startGame.onclick = runGame;


