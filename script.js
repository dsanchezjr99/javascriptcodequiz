// variables

let questionIndex = 0;
let timerId;
let timerEl = document.getElementById("timer");
let startButtonEl = document.getElementById("start-button");
let choicesEl = document.getElementById("choices");
let intialEl = document.getElementById("intial");
let questionsEl = document.getElementById("questions");
let submitEl = document.getElementById("submit");
let scores = [];
let highscores = document.getElementById("highscores");

// Quiz Questions

let questions = [
        {
            title: "What is the typeof operator?"
            choices: ["The Way to Tell how large the font is", "typeof doesn't exist in JavaScript", "I'm not sure", "An Operator that can examine a value and tell you what type it is"],
            answer: "An Operator that can examine a value and tell you what type it is"
        }

        // {
        //     title: "What is the typeof operator?"
        //     choices: ["The Way to Tell how large the font is", "typeof doesn't exist in JavaScript", "I'm not sure", "An Operator that can examine a value and tell you what type it is"],
        //     answer: "An Operator that can examine a value and tell you what type it is"
        // }

        // {
        //     title: "What is the typeof operator?"
        //     choices: ["The Way to Tell how large the font is", "typeof doesn't exist in JavaScript", "I'm not sure", "An Operator that can examine a value and tell you what type it is"],
        //     answer: "An Operator that can examine a value and tell you what type it is"
        // }

        // {
        //     title: "What is the typeof operator?"
        //     choices: ["The Way to Tell how large the font is", "typeof doesn't exist in JavaScript", "I'm not sure", "An Operator that can examine a value and tell you what type it is"],
        //     answer: "An Operator that can examine a value and tell you what type it is"
        // }

        // {
        //     title: "What is the typeof operator?"
        //     choices: ["The Way to Tell how large the font is", "typeof doesn't exist in JavaScript", "I'm not sure", "An Operator that can examine a value and tell you what type it is"],
        //     answer: "An Operator that can examine a value and tell you what type it is"
        // }
]

let time = questions.length * 20

// Quiz Begins

function startQuiz() {
    let startScreenEl = document.getElementById("homepage");

    startScreenEl.setAttribute("class", "hidden");

    questionsEl.removeAttribute("class");

    timerId = setInterval(clockTick, 1200);
    timerEl.textContent = time; 

    getQuestion();
}

function getQuestion() {

    letCurrentQuestion = questions[questionIndex];
}
