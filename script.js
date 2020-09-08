// Prompt user to start quiz
// Once they click the start button, it will display the first quiz question

//select all elements for quiz
var start = document.getElementById("start");
var quiz = document.getElementById("quiz"); 
var question = document.getElementById("question");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var scoreDiv = document.getElementById("score");
var timer = 60;
 
// Variables for questions
let questions = [];
var lastQuestion = questions.length -1;
let runningQuestion = 0;

// Render questions
function renderQuestion(){
    let q = questions.[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>"; 
    choice1.innerHTML = q.choice1; 
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4; 
}

// Render timer
var questionRight
var questionWrong

function renderTimer(){
    if (timer ) //confused how to get timer to respond to right or wrong responses 
}
//Hide start button and render questions based on clicks
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
start.addEventListener("click",startQuiz
//Start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderTimer();
    timer= setInterval(renderCounter ,1000);
}

// Question choices and correct answers
    let questions = [
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choice1: "if i =! 5 then",
        choice2: "if (i <> 5)",
        choice3: "if i <> 5",
        choice4: "if (i != 5)",
        correct: "4"
    },
    {   question: "Question 2: How does a WHILE loop start?",
        choice1: "while (i <= 10;i++)",
        choice2: "while i = 1 to 10",
        choice3: "while (i <= 10)",
        choice4: "while i <= 10",
        correct: "3"

    },
    {   question: "Question 3: How does a FOR loop start?",
        choice1: "for (i = 0; i <= 5; i++)",
        choice2: "for (i <= 5; i++)",
        choice3: "for (i = 0; i <= 5)",
        choice4: "for i = 1 to 5",
        correct: "1" 

    },
    {   question: "Question 4: How do you write 'Hello World' in an alert box?",
        choice1:  "alert("Hello World");",
        choice2:  "alertBox("Hello World");",
        choice3:  "msgBox("Hello World");",
        choice4:  " msg("Hello World");",
        correct:  "1"

    },
    {   question: "Question 5: How do you create a function in JavaScript?",
        choice1: "function = myFunction()",
        choice2: "function myFunction()",
        choice3: "function:MyFunction()",
        choice4: "function myFunction",
        correct: "2"

    },
    {   question: "Question 6:  How to write an IF statement in JavaScript?"
        choice1: "if i==5 then",
        choice2: "if (i==5)",
        choice3: "if i==5 then",
        choice4: "if i=5",
        correct: "2"

    }
];
