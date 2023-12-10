// Traverse the DOM to select certain areas in HTML
var timer = document.getElementsByClassName("timer");
var quizArea = document.getElementsByClassName("quiz-area");
var title = document.getElementsByClassName("title");
var questionsText = document.getElementsByClassName("questions-text");
var button = document.getElementsByClassName("button");
var startButton = document.getElementById("start-button");

// Create questions in arrays
var questions = [
    {
        question: "Who invented Javascript?",
        options: ["Chris Beard", "Guido van Rossum", "Brendan Eich", "Larry Page"],
        answer: 2
    },
    {
        question: "What is a primitive data type?",
        options: ["Number", "String", "Boolean", "All of the above"],
        answer: 3
    },
    {
        question: "How can you refer to a global object?",
        options: ["this", "that", "there", "those"],
        answer: 0
    },
    {
        question: "How can you declare a variable?",
        options: ["var", "let", "const", "All of the above"],
        answer: 3
    }
  ];

// Create function for beginning of quiz
// Clears previous content and generates first question
function startQuiz() {
    startButton.addEventListener("click", function() {
        quizArea[0].innerHTML = ""; // quizArea[0] lets it know to clear the content (children) within the parent (quizArea)
        displayQuestions();
      });
}

// Create function for displaying questions
function displayQuestions() {

}

// Create function for timer
function timer() {

}

// Create function for entering initials for highscore
function enterHighscore() {

}

// Create function for displaying highscores
function showHighscores() {

}

// Initiates the first step in all of the functions
startQuiz();