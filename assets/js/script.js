// Traverse the DOM to select certain areas in HTML
var timer = document.getElementsByClassName("timer");
var quizArea = document.getElementsByClassName("quiz-area");
var startButton = document.getElementById("start-button");
var response = document.querySelector(".response");

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
        // timer();
      });
}

var currentQuestion = 0;

// Function for displaying the questions and answers
function displayQuestions() {
  
    // Create the question element
    var questionElement = document.createElement("h1");
    questionElement.textContent = questions[currentQuestion].question;
    quizArea[0].appendChild(questionElement);
  
    // Create the option buttons
    var optionButtons = document.createElement("div");
    optionButtons.className = "all-options";
    quizArea[0].appendChild(optionButtons);
  
    // Add the options buttons to the question area
    questions[currentQuestion].options.forEach((option) => {
      var button = document.createElement("button");
      button.className = "button";
      button.textContent = option;
      optionButtons.appendChild(button);

        // Create click event for users selection
        button.addEventListener("click", function() {
        if (questions[currentQuestion].options.indexOf(option) === questions[currentQuestion].answer) {
            response.textContent = "Correct!";
            quizArea[0].appendChild(response);
          } else {
            response.textContent = "Wrong!";
            quizArea[0].appendChild(response);
        }

        // set a timer to switch to the next question after user selects an option
        setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            quizArea[0].innerHTML = "";
            displayQuestions();
        } else {
            enterHighscore();
        }
        }, 2000);
    });
    });

    // Make the buttons visible and stack centered
    optionButtons.style.display = "flex";
    optionButtons.style.alignItems = "center";
    optionButtons.style.flexDirection = "column";
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