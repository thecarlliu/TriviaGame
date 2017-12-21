//tracking variables
var currentQ;
var currentA;
var numIncorrectAnswers = 0;
var numCorrectAnswers = 0;

//q Object contains text for each questions and their respecive answer choices
var q = {
	q1: {
		text: "Name an animal we eat that doesn't eat us",
		a1: "Dragon",
		a2: "Pig",
		a3: "Cow",
		a4: "Chicken"
	},
	q2: {
		text: "Name something people groom themselves with",
		a1: "Laser beams",
		a2: "Comb",
		a3: "Bride",
		a4: "Razor"
	},
	q3: {
		text: "Name something that people are afraid of",
		a1: "The Night Man",
		a2: "Clowns",
		a3: "Disappointment",
		a4: "Bears"
	},
	q4: {
		text: "What does Frank use to scrape the gunk out from underneath his toenails?",
		a1: "Teeth",
		a2: "Thumbtack",
		a3: "Clippers",
		a4: "Toe Knife"
	},
	q5: {
		text: "What is Dennis's least favorite sound?",
		a1: "Dee farting",
		a2: "Money",
		a3: "Himself",
		a4: "The buzzer"
	}
}

//Questions that are left to go through
var qList = [q.q1, q.q2, q.q3, q.q4, q.q5];
//gamePhase. not really necessary, but used as a failsafe checker in my debugging
var gamePhase = 0;

runGame();

//starts the game
function runGame() {
	readyPlayer();
}

//asks the player if they're ready to start the game
//if they are, then the questions start
function readyPlayer() {
	var readyConfirm = confirm("Let's see how well you know the gang! Ready?");
	if (readyConfirm == true) {
		gamePhase = 1;
		rollQuestions();
	}
}

//looks at the first of questions in our qList array
//changes the displays for the question text and answers, appropriately
function rollQuestions() {
	currentQ = qList[0];
	setCorrectAnswer();
	console.log(currentQ);

	var qDisplay = $("<div>", {
		text: qList[0].text
	});
	$(".Question").empty();
	$(".Question").append(qDisplay);

	$(".Answer1").empty();
	$(".Answer2").empty();
	$(".Answer3").empty();
	$(".Answer4").empty();

	$(".Answer1").append(qList[0].a1);
	$(".Answer2").append(qList[0].a2);
	$(".Answer3").append(qList[0].a3);
	$(".Answer4").append(qList[0].a4);

	$(".Timer").empty();
	setTimer();

	//if the "current" correct answer is the one being clicked,
	//then congrats() occurs, else wrong() occurs before moving on to the next question.
	$(".Answer1").on("click", function() {
		if (gamePhase == 1) {
			if (currentA == currentQ.a1) {
				congrats();
			}
			else {
				wrong();
			}
		}
	});
	$(".Answer2").on("click", function() {
		if (gamePhase == 1) {
			if (currentA == currentQ.a2) {
				congrats();
			}
			else {
				wrong();
			}
		}
	});
	$(".Answer3").on("click", function() {
		if (gamePhase == 1) {
			if (currentA == currentQ.a3) {
				congrats();
			}
			else {
				wrong();
			}
		}
	});
	$(".Answer4").on("click", function() {
		if (gamePhase == 1) {
			if (currentA == currentQ.a4) {
				congrats();
			}
			else {
				wrong();
			}
		}
	});
}

//our "timer" is set. which in reality is setTimeout being called a ton
//with the timer display changing for each second. tedious, but it works.
//definitely not the most efficient way.
function setTimer() {
	$(".Timer").text("Time Remaining: 10 seconds");
	setTimeout(nineSecondsLeft, 1000);
	setTimeout(eightSecondsLeft, 2000);
	setTimeout(sevenSecondsLeft, 3000);
	setTimeout(sixSecondsLeft, 4000);
	setTimeout(fiveSecondsLeft, 5000);
	setTimeout(fourSecondsLeft, 6000);
	setTimeout(threeSecondsLeft, 7000);
	setTimeout(twoSecondsLeft, 8000);
	setTimeout(oneSecondLeft, 9000);
	setTimeout(timesUp, 10000);
}
function nineSecondsLeft() {
	if (gamePhase == 1){
		$(".Timer").text("Time Remaining: 9 seconds");
	}
}
function eightSecondsLeft() {
	if (gamePhase == 1){
		$(".Timer").text("Time Remaining: 8 seconds");
	}
}
function sevenSecondsLeft() {
	if (gamePhase == 1){
		$(".Timer").text("Time Remaining: 7 seconds");
	}
}
function sixSecondsLeft() {
	if (gamePhase == 1){
		$(".Timer").text("Time Remaining: 6 seconds");
	}
}
function fiveSecondsLeft() {
	if (gamePhase == 1){
		$(".Timer").text("Time Remaining: 5 seconds");
	}
}
function fourSecondsLeft() {
	if (gamePhase == 1){
		$(".Timer").text("Time Remaining: 4 seconds");
	}
}
function threeSecondsLeft() {
	if (gamePhase == 1){
		$(".Timer").text("Time Remaining: 3 seconds");
	}
}
function twoSecondsLeft() {
	if (gamePhase == 1){
		$(".Timer").text("Time Remaining: 2 seconds");
	}
}
function oneSecondLeft() {
	if (gamePhase == 1){
		$(".Timer").text("Time Remaining: 1 seconds");
	}
}
function timesUp() {
	if (gamePhase == 1){
		$(".Timer").text("Time is Up!");
		showCorrectAnswer();
		numIncorrectAnswers++;
	}
}

//shows the correct answer regardless of what the user picks, acts as our transition to the next question
//with some time to kill until the next question.
function showCorrectAnswer() {
	gamePhase = 2;
	$(".Timer").empty();
	$(".Question").text("The Correct Answer was "+currentA+". Ten seconds until the next question! Get ready!");
	setTimeout(nextQ, 10000);
}

//removes the first question in our qList, so that rollQuestions() can be called again,
//thus showing the "next question" in the list.
function nextQ() {
	gamePhase = 1;
	qList.splice(0,1);
	console.log(qList);
	if (qList.length > 0) {
		rollQuestions();
	}
	else if (qList.length == 0) {
		gameOver();
	}
}

//sets the currentA (current correct answer) based on what the currentQ is
function setCorrectAnswer() {
	if (currentQ == q.q1) {
		currentA = q.q1.a1;
	}
	else if (currentQ == q.q2) {
		currentA = q.q2.a3;
	}
	else if (currentQ == q.q3) {
		currentA = q.q3.a1;
	}
	else if (currentQ == q.q4) {
		currentA = q.q4.a4;
	}
	else if (currentQ == q.q5) {
		currentA = q.q5.a4;
	}
}

//congrats the user, increments numCorrectAnswers
function congrats() {
	$(".Timer").empty();
	alert("You chose the right answer!");
	numCorrectAnswers++;
	showCorrectAnswer();
	console.log(numCorrectAnswers);
}

//disappointment, the user is shamed, numIncorrectAnswers is incremented
function wrong() {
	$(".Timer").empty();
	alert("Wrong Answer! SHAME SHAME SHAME");
	numIncorrectAnswers++;
	showCorrectAnswer();
	console.log(numIncorrectAnswers);
}

//when there are no questions left in qList,
//resets the game
function gameOver() {
	gamePhase = 3;
		if (gamePhase == 3 && numCorrectAnswers+numIncorrectAnswers == 5) {
		$(".Answer1").empty();
		$(".Answer2").empty();
		$(".Answer3").empty();
		$(".Answer4").empty();

		$(".Question").text("Game Over! Let's see how you did!");
		$(".Answer1").text("Correct Answers: "+numCorrectAnswers);
		$(".Answer2").text("Incorrect Answers: "+numIncorrectAnswers);
		$(".Answer3").text("Play Again!");

		qList = [q.q1, q.q2, q.q3, q.q4, q.q5];
		$(".Answer3").on("click", function() {
			if (gamePhase == 3) {
				runGame();
			}
		});
	}
}
