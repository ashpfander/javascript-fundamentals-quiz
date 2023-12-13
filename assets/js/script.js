// Traverse the DOM to select certain areas in HTML
var timerEl = document.getElementsByClassName("timer");
var quizArea = document.getElementsByClassName("quiz-area");
var startButton = document.getElementById("start-button");
var response = document.querySelector(".response");
var titleElement = document.querySelector(".title");
var textElement = document.querySelector(".body-text");

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
function startQuiz() {
    titleElement.textContent = "Javascript Quiz";
    quizArea[0].appendChild(titleElement);

    textElement.textContent = "New to learning Javascript? Test your knowledge here!";
    quizArea[0].appendChild(textElement);

    startButton.textContent = "Start Quiz";
    quizArea[0].appendChild(startButton);

    // Clears previous content and generates first question
    startButton.addEventListener("click", function() {
        quizArea[0].innerHTML = ""; // quizArea[0] lets it know to clear the content (children) within the parent (quizArea)
        displayQuestions();
        timer();
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
            secondsLeft -= 20;
        }

        // Set a timer to switch to the next question after user selects an option
        setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            quizArea[0].innerHTML = "";
            displayQuestions();
        } else {
            quizArea[0].innerHTML = "";
            enterHighscore();
        }
        }, 1500);
    });
    });

    // Make the buttons visible and stack centered
    optionButtons.style.display = "flex";
    optionButtons.style.alignItems = "center";
    optionButtons.style.flexDirection = "column";
}

var secondsLeft = 100;

// Create function for timer
function timer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl[0].textContent = "Time left: " + secondsLeft;
    
        if(secondsLeft === 0 || currentQuestion === questions.length) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Create function for entering initials for highscore
function enterHighscore() {

    // Add a finished message when the function starts
    titleElement.textContent = "Finished!";
    quizArea[0].appendChild(titleElement);

    // Add a message of the final score when the function starts
    textElement.textContent = "Your final score is " + secondsLeft + ". Please enter your initials to track your scores.";
    quizArea[0].appendChild(textElement);

    // Add area to enter initials
    var enterInitials = document.createElement("input");
    quizArea[0].appendChild(enterInitials);
    enterInitials.style.backgroundColor = "white";

    // Add a submit button to submit initials and score
    var button = document.createElement("button");
    button.textContent = "Submit";
    quizArea[0].appendChild(button);
    button.style.marginLeft = "10px";

    // Add event listener to the submit button to store the initials and score to local storage
    // Clears previous information and goes to next function: showHighscores
    button.addEventListener("click", function() {
        localStorage.setItem("highscore", secondsLeft + " - " + enterInitials.value);
        quizArea[0].innerHTML = "";
        showHighscores();
    });
}

// Resets the quiz if user selects play again after submitting highscore
function resetQuiz() {
    currentQuestion = 0;
    secondsLeft = 100;
    startQuiz();
}

// Create link to showHighscores function through HTML in upper left link
var viewHighscores = document.getElementById("view-highscores");
viewHighscores.addEventListener("click", function() {
    quizArea[0].innerHTML = "";
    showHighscores();
}
);

// Create function for displaying highscores
function showHighscores() {

    // Create title of "Highscores:"
    titleElement.textContent = "Highscores:";
    quizArea[0].appendChild(titleElement);

    // Enters all previous highscores from local storage
    textElement.textContent = localStorage.getItem("highscore");
    quizArea[0].appendChild(textElement);

    // Create a button to clear the current highscores
    var clearButton = document.createElement("button");
    clearButton.textContent = "Clear";
    quizArea[0].appendChild(clearButton);
    clearButton.style.marginRight = "10px";

    // Add event listener for when user clicks clear button, it clears current highscores
    clearButton.addEventListener("click", function() {
        localStorage.clear();
        textElement.innerHTML = "";
    });

    // Create a play again button if the user wants to play again
    var playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    quizArea[0].appendChild(playAgainButton);

    // Create event listener for when user clicks play again and takes them back to beginning of the quiz
    playAgainButton.addEventListener("click", function() {
        quizArea[0].innerHTML = "";
        resetQuiz();
    });
}

// Initiates the first step in all of the functions
startQuiz();