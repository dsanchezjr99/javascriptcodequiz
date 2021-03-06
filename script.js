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
            title: "What is the typeof operator?",
            choices: ["The Way to Tell how large the font is", "typeof doesn't exist in JavaScript", "I'm not sure", "An Operator that can examine a value and tell you what type it is"],
            answer: "An Operator that can examine a value and tell you what type it is"
        },

        {
            title: "Which built-in method calls a function for each element in the array?",
            choices: ["while", "loop", "forEach", "None of the above"],
            answer: "forEach()",
        },

        {
            title: "Which of the following is an Advantage of using Javascript",
            choices: ["Less server interaction", "Immediate feedback to the visitors", "increased interactivity", "All of the Above"],
            answer: "All of the Above"
        },

        {
            title: "Which of the following is the correct syntax to print a page using JavaScript",
            choices: ["window.print()", "browser.print()", "navigator.print()", "document.print()",],
            answer: "window.print()"
        },

        {
            title: "Inside which HTML element do we put the JavaScript?",
            choices: ["<js>", "<javascript>", "<scripting>", "<script>"],
            answer: "<script>"
        }
]

let time = questions.length * 20

// Beginning of the Quiz

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

    let titleEl = document.getElementById("questions-title");
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {
        let choiceSelect = document.createElement("button");
        choiceSelect.setAttribute("class", "choice");
        choiceSelect.setAttribute("value", choice);
        choiceSelect.textContent = i + 1 + "." + choice;
        choiceSelect.onclick = questionClickHandler;
        choicesEl.appendChild(choiceSelect);

    });
}

function questionCLick(){
    if (this.value !== questions[questionIndex].answer){
        time -=10;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time
    }
    questionIndex++;
    if (questionIndex === questions.length){
        quizEnd();
    } else{
        getQuestion();
    }
}

function quizEnd() {
    clearInterval(timerId);
    let endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hidden")
}

let finalScoreEl = document.getElementById("final-score");
function clockTick(){
    time--;
    timerEl.textContent = time;
    if(time <= 0) {
        quizEnd();
    }
}

submitButtonEL.onclick = () => {
    let input = intialsEL.value;
    console.log(time);
    console.log(input);

    let leaderBoard = [];
    let topScores = JSON.parse(localStorage.getItem("score"));
    if(topScores){
        leaderBoard.push(...topScores);
    }

    leaderBoard.push({"user":input,"score":time});
    console.log(leaderBoard);

    
    //getting Final Score

    let table = ()=> {
        for(let i = 0; i < leaderBoard.length; i++){
            leaderBoard += names [i] + "," + scores[i];
            let list = document.createElement("li");
            list.setAttribute("value", highScores[i]);
            highScores.appendChild("high-score");
        }
    }
    localStorage.setItem("score", JSON.stringify(leaderBoard));
    console.log("Hello")

};

startButtonEl.onclick = ()=> {
    startQuiz();
}
