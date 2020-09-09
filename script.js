// Prompt user to start quiz
// Once they click the start button, it will display the first quiz question

//select all elements for quiz
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var correctAnswer = document.getElementById("correctAnswer");
var scoreDiv = document.getElementById("score");
var timer = 60;

// Variables for questions
 // Question choices and correct answers
 let questions = [
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: {
        a: "if i =! 5 then",
        b: "if (i <> 5)",
        c: "if i <> 5",
        d: "if (i != 5)",
        },
        correct: "d"
    },
    {
        question: "How does a WHILE loop start?",
        a: "while (i <= 10;i++)",
        b: "while i = 1 to 10",
        c: "while (i <= 10)",
        d: "while i <= 10",
        correct: "3"

    },
    {
        question: "How does a FOR loop start?",
        a: "for (i = 0; i <= 5; i++)",
        b: "for (i <= 5; i++)",
        c: "for (i = 0; i <= 5)",
        d: "for i = 1 to 5",
        correct: "1"

    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "alert('Hello World');",
        b: "alertBox('Hello World');",
        c: "msgBox('Hello World');",
        d: " msg('Hello World');",
        correct: "1"

    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function = myFunction()",
        b: "function myFunction()",
        c: "function:MyFunction()",
        d: "function myFunction",
        correct: "2"

    },
    {
        question: "How to write an IF statement in JavaScript?",
        a: "if i==5 then",
        b: "if (i==5)",
        c: "if i==5 then",
        d: "if i=5",
        correct: "2"

    }
];

// Build questions
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    a.innerHTML = q.a;
    b.innerHTML = q.b;
    c.innerHTML = q.c;
    d.innerHTML = q.d;
}

var lastQuestion = questions.length - 1;
let runningQuestion = 0;

function buildQuiz (){
const output = [];

// For each question:
question.forEach(
    (currentQuestion, questionNumber) => {
// Store possible answers
        var answers = [];
// For each possible answer 
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}"> 
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`    
            );
            }
//add question and its answers to the output
`<div class="question"> $
        });
    }



//   //Check answers 
//   function checkQuestion() {
//     if(questionRight === questions[runningQuestion].correct) {
// //answer is correct
// score++;
// document.write("CORRECT!");
// }
// else {
//     (questionWrong === questions[runningQuestion].wrong);
// //answer is incorrect 
// document.write("INCORRECT!");
// score--;
// }
//   }



// Render timer
// var questionRight
// var questionWrong

// function renderTimer(){
//     if (timer ) //confused how to get timer to respond to right or wrong responses 
// }
//Hide start button and render questions based on clicks
document.getElementById("start").onclick = startQuiz;
console.log("click"); 
//Start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}
