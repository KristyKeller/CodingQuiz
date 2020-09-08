// Prompt user to start quiz
// Once they click the start button, it will display the first quiz question
const start = document.getElementById("start");
const quiz = document.getElementById("quiz"); 

var timer = 60;
var questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6"]; 
    {
        Question1: "How to write an IF statement for executing some code if "i" is NOT equal to 5?"
        choice1: "if i =! 5 then",
        choice2: "if (i <> 5)",
        choice3: "if i <> 5",
        choice4: "if (i != 5)",
        answer: choice4
    }

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