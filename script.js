// Prompt user to start quiz
// Once they click the start button, it will display the first quiz question

//select all elements for quiz
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var score = 0; 

//Start
document.getElementById("start").onclick = startQuiz;

function startQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
}

// Attach onclick to choice buttons
//Choice 1
document.getElementById("choice1").onclick = choice1;

function choice1() {
    var choice = document.getElementById("choice1").innerText;
    checkQuestion(choice);
}

// Choice 2
document.getElementById("choice2").onclick = choice2;

function choice2() {
    var choice = document.getElementById("choice2").innerText;
    checkQuestion(choice);
}

// Choice 3
document.getElementById("choice3").onclick = choice3;

function choice3() {
    var choice = document.getElementById("choice3").innerText;
    checkQuestion(choice);
}

// Choice 4
document.getElementById("choice4").onclick = choice4;

function choice4() {
    var choice = document.getElementById("choice4").innerText;
    checkQuestion(choice);

    renderQuestion();
}
runningQuestions = 0;


// //Showing user if their choice is right or wrong
var questionRight = 0;
var questionWrong  = 0;
function checkQuestion() {

    var correctAnswer = questions[runningQuestion].correct; 
   
   // let currentQuestionClass =  `.question${runningQuestion}`

    $("button").on("click", function(){
        let currentBtn = $(this).attr("id");
        if (correctAnswer == currentBtn){
            alert("correct")
            counter = counter + 5;
        } else {
            counter = counter - 5;
            alert("incorrect")
        }
    })

    //let currentQuestionAnswer = $(currentQuestionClass).find()
}
    // Timer 
    //in function, do timer -10 for wrong questions
    var counter = 60;
    var interval = setInterval(function() {
        counter--; 
        
        if (counter <= 0) {
            clearInterval(interval);
            $('timer').HTML("<h3>Time's up!</h3>");
            return;
        }else{
            $('#time').text(counter);
            console.log("Timer -->" + counter);
        }
    }, 1000);

// Variables for questions
// Question choices and correct answers
let questions = [
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choice1: "if i =! 5 then",
        choice2: "if (i <> 5)",
        choice3: "if i <> 5",
        choice4: "if (i != 5)",
        correct: "choice4"
    },
    {
        question: "How does a WHILE loop start?",
        choice1: "while (i <= 10;i++)",
        choice2: "while i = 1 to 10",
        choice3: "while (i <= 10)",
        choice4: "while i <= 10",
        correct: "choice3"

    },
    {
        question: "How does a FOR loop start?",
        choice1: "for (i = 0; i <= 5; i++)",
        choice2: "for (i <= 5; i++)",
        choice3: "for (i = 0; i <= 5)",
        choice4: "for i = 1 to 5",
        correct: "choice1"

    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "alert('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msgBox('Hello World');",
        choice4: " msg('Hello World');",
        correct: "choice1"

    },
    {
        question: "How do you create a function in JavaScript?",
        choice1: "function = myFunction()",
        choice2: "function myFunction()",
        choice3: "function:MyFunction()",
        choice4: "function myFunction",
        correct: "choice2"

    },
    {
        question: "How to write an IF statement in JavaScript?",
        choice1: "if i==5 then",
        choice2: "if (i==5)",
        choice3: "if i==5 then",
        choice4: "if i=5",
        correct: "choice2"

    }
];


var lastQuestion = questions.length - 1;
let runningQuestion = 0;


// Render questions
function renderQuestion() {
    checkQuestion();
    runningQuestion++;
    let q = questions[runningQuestion];
    document.getElementById("question").innerHTML = "<p>" + q.question + "</p>";
    document.getElementById("choice1").innerHTML = q.choice1;
    document.getElementById("choice2").innerHTML = q.choice2;
    document.getElementById("choice3").innerHTML = q.choice3;
    document.getElementById("choice4").innerHTML = q.choice4;

    document.getElementById("choice1").onclick = choice1;
}




