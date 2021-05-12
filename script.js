// function to start the game and timer
// Function handleTimer - timer logic 
// function to stop and reset the game and timer
// functoin which determines the points logic
// function which displays the next question
// function which determines the right answer
// function which takes the questiom data and populates it and stores the information
// function to store the initials function to keep the high scores function to submit the scores
// function to clear reset the score table

var questions = [
{
    title:"question1", 
    choices:["a",'b','c','d'],
    answer:'a'
},
{
    title:"question2", 
    choices:["a",'b','c','d'],
    answer:'a'
},{
    title:"question3", 
    choices:["a",'b','c','d'],
    answer:'a'
},
]
var index = 0;
var time = 100
console.log(questions[i]);
function test () {
    if (this.value !== questions[index].answer) {
        time -= 10;
    }
    index++;
}

function test2 () {
    var currentquestion = questions[index]
    title.textContent = currentquestion.title;
    currentquestion.choices.forEach(function(choice,i){
        var choicebtn = document.createElement('button')
        choicebtn.textContent = i+1+' ' + choice
    })
}
