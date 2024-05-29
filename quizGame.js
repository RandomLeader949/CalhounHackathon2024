const quizData = [
    {
        question: "which coder uses python mainly?",
        a: "Jack",
        b: "Jonah",
        c: "Judah",
        d: "Eray",
        correct: "a",
    },
    {
        question: "Which coder edeveloped a ray-tracing system in hatch?",
        a: "Eray",
        b: "Ryan",
        c: "Zach", 
        d: "Jonah",
        correct: "d",
    }
];
const answerEls = document.querySelectorAll('.answer'); // Replace with your actual selector
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const quiz = document.getElementById('quiz');
//...
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false);
}

function getSelected() {
    let answer; // Declare the variable
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){ // Use quizData.length
            loadQuiz();
        } else {
            quiz.innerHTML = ` // Use innerHTML
                <h2>You answered ${score}/${quizData.length} questions correct!</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
