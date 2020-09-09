// Prompt user to start quiz
// Once they click the start button, it will display the first quiz question

//select all elements for quiz
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var score = 0; //might be set wrong 
var timer = 60;

//Start
document.getElementById("start").onclick = startQuiz;
console.log("click");

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}

// }
// Attach onclick to choice buttons
//Choice 1
document.getElementsByClassName("choice1").onclick = choice1;
console.log("click");

function choice1() {
    alert("Test");
    document.getElementsByClassName("choice1").innerHTML;
    // vis = 0
}

// Choice 2
document.getElementsByClassName("choice2").onclick = choice2;
console.log("click");

function choice2() {
    alert("Test");
    document.getElementsByClassName("choice2").innerHTML;
    // vis = 0
}

// Choice 3
document.getElementsByClassName("choice3").onclick = choice3;
console.log("click");

function choice3() {
    alert("Test");
    document.getElementsByClassName("choice3").innerHTML;
    // vis = 0
}

// Choice 4
document.getElementsByClassName("choice4").onclick = choice4;
console.log("click");

function choice4() {
    alert("Test");
    document.getElementsByClassName("choice4").innerHTML;
    // vis = 0
}

//Showing user if their choice is right or wrong
var questionRight
var questionWrong
function checkQuestion(correct) {
    if (questionRight == questions[runningQuestion].correct) {
        console.log(questionRight);
        //answer is correct
        score++;
        document.write("CORRECT!");
    }
    else {
        (questionWrong == questions[runningQuestion].wrong);
        console.log(questionWrong);
        //answer is incorrect 
        document.write("INCORRECT!");
        score--;
    }
}


// Render timer
// function setTime() {
//         timer = setInterval(function() {
//       secondsLeft = 60;
//       timerId.textContent = secondsLeft + "Time's up ";

//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//       }

//     }, 1000);
//   }

//   function sendMessage() {
//     timeEl.textContent = " ";

//   }

//   setTime();
//confused how to get timer to respond to right or wrong responses 



// Variables for questions
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
    {
        question: "How does a WHILE loop start?",
        choice1: "while (i <= 10;i++)",
        choice2: "while i = 1 to 10",
        choice3: "while (i <= 10)",
        choice4: "while i <= 10",
        correct: "3"

    },
    {
        question: "How does a FOR loop start?",
        choice1: "for (i = 0; i <= 5; i++)",
        choice2: "for (i <= 5; i++)",
        choice3: "for (i = 0; i <= 5)",
        choice4: "for i = 1 to 5",
        correct: "1"

    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "alert('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msgBox('Hello World');",
        choice4: " msg('Hello World');",
        correct: "1"

    },
    {
        question: "How do you create a function in JavaScript?",
        choice1: "function = myFunction()",
        choice2: "function myFunction()",
        choice3: "function:MyFunction()",
        choice4: "function myFunction",
        correct: "2"

    },
    {
        question: "How to write an IF statement in JavaScript?",
        choice1: "if i==5 then",
        choice2: "if (i==5)",
        choice3: "if i==5 then",
        choice4: "if i=5",
        correct: "2"

    }
];


var lastQuestion = questions.length - 1;
let runningQuestion = 0;


// Render questions
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
}




