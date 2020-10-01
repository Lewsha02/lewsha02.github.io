const quizData = [
	{
		question: "Какого типа данных нет в JS?",
		a: "String",
		b: "Boolean",
		c: "Symbol",
		d: "Integer",
		correct: "d",
	},
	{
		question: "Какой результат вызова typeof null?",
		a: "null",
		b: "object",
		c: "number",
		d: "string",
		correct: "b",
	},
	{
		question: "Чему равно '1' + 1 в JS?",
		a: "2",
		b: "1",
		c: "11",
		d: "NaN",
		correct: "c",
	},
	{
		question: "В каком стандарте JS появились стрелочные функции?",
		a: "ES5",
		b: "ES6",
		c: "ES7",
		d: "ES8",
		correct: "b",
	},
	{
		question: "В каком году был придуман JS?",
		a: "1995",
		b: "2002",
		c: "2010",
		d: "2020...",
		correct: "a",
	},
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

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

function getSelected() {
	let answer = undefined;

	answersEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers() {
	answersEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener("click", () => {
	// cehck to see the answer
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `<h2>Вы верно ответили на ${score} из ${quizData.length} вопросов</h2> <button onclick="location.reload()">Попробовать еще раз</button>`;
		}
	}
});
