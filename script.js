// Prompt user to start quiz
// Once they click the start button, it will display the first quiz question
const start = document.getElementById("start");
const quiz = document.getElementById("quiz"); 
const question = document.getElementById("question");
const 
var timer = 60;
var questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6"]; 
// Question render
let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;
function renderQuestion (){
    let q= questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>"; 
    choice1.innerHTML = q.choice1; 
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
} 
// Question choices and correct answers
    let questions = [
    {
        Question1: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choice1: "if i =! 5 then",
        choice2: "if (i <> 5)",
        choice3: "if i <> 5",
        choice4: "if (i != 5)",
        correct: "4"
    },
    {   Question2: "Question 2: How does a WHILE loop start?",
        choice1: "while (i <= 10;i++)",
        choice2: "while i = 1 to 10",
        choice3: "while (i <= 10)",
        choice4: "while i <= 10",
        correct: "3"

    },
    {   Question3: "Question 3: How does a FOR loop start?",
        choice1: "for (i = 0; i <= 5; i++)",
        choice2: "for (i <= 5; i++)",
        choice3: "for (i = 0; i <= 5)",
        choice4: "for i = 1 to 5",
        correct: "1" 

    },
    {   Question4: "Question 4: How do you write 'Hello World' in an alert box?",
        choice1:  "alert("Hello World");",
        choice2:  "alertBox("Hello World");",
        choice3:  "msgBox("Hello World");",
        choice4:  " msg("Hello World");",
        correct:  "1"

    },
    {   Question5: "Question 5: How do you create a function in JavaScript?",
        choice1: "function = myFunction()",
        choice2: "function myFunction()",
        choice3: "function:MyFunction()",
        choice4: "function myFunction",
        correct: "2"

    },
    {   Question6: 
        choice1: "if i==5 then",
        choice2: "if (i==5)",
        choice3: "if i==5 then",
        choice4: "if i=5",
        correct: "2"

    }
];
// //Array of objects to store questions using a string comparison (reference gandalf activity)

// if(choice3Clicked) {
//     if(questions[currentQuestion]){
//         [choice3Clicked.id] === questions
// }
// else 
// // Correct answer, you lose x amount of seconds 
// // Wrong answer, you lose x amount of seconds, will need sections
// currentQuestion++
// displayQuestion ();