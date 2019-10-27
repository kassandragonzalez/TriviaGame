$(document).ready(function() {
  //event listners
  $("#remaining-time").hide();
  $("#start").on("click", trivia.startGame);
  $(document).on("click", ".option", trivia.guessChecker);
});

var trivia = {
  //trvia properties
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  current: 0,
  timer: 20,
  timerOn: false,
  timerId: "",
  // question options and answers
  questions: {
    q1: "S2E2 introduces Michaels catch phrase...",
    q2: 'In S2E5 "Halloween" What is Jims costume?',
    q3:
      'In S2E8 "Performance Review" Who does Michael quickly dismiss saying "You were totally satisfactory this year"?',
    q4: 'In S2E12 "The Injury" What is Michaels injury?',
    q5: 'In S2E19 "Michaels Birthday" Who has a cancer scare?',
    q6: 'In S3E5 "Initiation" What song does Jim sing to annoy Karen?',
    q7: 'In S6E7 "Koi Pond" Who fell into the koi pond?',
    q8:
      'In S6E19 "Happy Hour" What clothing item transforms Michael into Date Mike?',
    q9: 'In S3E21 "Womens Appreciation" Who gets flashed in the parking lot?',
    q10:
      "In S9E23 what activity does the office choose to do on Darryls last day?"
  },
  options: {
    q1: [
      "Thats what she said",
      "Bears Beats Battlestar Galactica",
      "Question",
      "Did I Stutter?"
    ],
    q2: ["Dave", "Bookface", "Three Hole Punch Jim", "Rational Consumer"],
    q3: ["Oscar", "Angela", "Kevin", "Dwight"],
    q4: [
      "He gets his head stuck in a stair railing",
      "He crashes his car into a telephone pole",
      "He is run over by a co-worker",
      "He burns his foot on a George Foreman Grill"
    ],
    q5: ["Angela", "Dwight", "Kevin", "Michael"],
    q6: [
      "Lovefool by The Cardigans",
      "Kiss Me by Six Pence None the Richer",
      "Barbie Girl by Agua",
      "Macarena by Los Del Rio"
    ],
    q7: ["Dwight", "Angela", "Michael", "Jim"],
    q8: [
      "A backwards golf cap",
      "A bandana",
      "A sumo suit",
      "A sequined glove"
    ],
    q9: ["Meredith", "Creed", "Pam", "Phillis"],
    q10: [
      "Drinks at Poor Richards",
      "Listened to Zepplin in Merediths van",
      "Dance Party",
      "Lunch at Pizza by Alfredos "
    ]
  },
  answers: {
      q1: "Thats what she said",
      q2: "Three Hole Punch Jim",
      q3: "Angela",
      q4: "He burns his foot on a George Foreman Grill",
      q5: "Kevin",
      q6: "Lovefool by The Cardigans",
      q7: "Michael",
      q8: "A backwards golf cap",
      q9: "Phillis",
      q10: "Dance Party"
  },
  // methods to start game
  startGame: function() {
    //restarting game results
    trivia.current = 0;
    trivia.unanswered = 0;
    trivia.incorrect = 0;
    trivia.correct = 0;
    clearInterval(trivia.timerId);

    //show
    $("#game").show();
    $("#results").html("");
    $("#timer").text(trivia.timer);

    $("#start").hide();
    $("#remaining-time").show();

    trivia.nextQuestion();
  },

  nextQuestion: function() {
    //timer set for 20 seconds a question
    trivia.timer = 20;
   // $("#timer").removeClass("last-seconds");
    $("#timer").text(trivia.timer);

    //timer
    if (!trivia.timerOn) {
      trivia.timerId = setInterval(trivia.timerRunning, 1000);
    }

    //gets all the questions then indexes the current questions
    var questionContent = Object.values(trivia.questions)[trivia.current];
    $("#question").text(questionContent);

    //array of all options for the current question
    var questionOptions = Object.values(trivia.options)[trivia.current];

    //creates all the trivia guess options in html
    $.each(questionOptions, function(index, key) {
      $("#options").append(
        $('<button class="option btn btn-info btn-lg"> ' + key + " </button>")
      );
    });
  },
  //method for counter if timer runs out
  timerRunning: function() {
    //timer has time left and questions left to ask
    if (
      trivia.timer > -1 &&
      trivia.current < Object.keys(trivia.questions).length) {
      $("#timer").text(trivia.timer);
      trivia.timer--;
      if (trivia.timer === 4) {
       $("#timer").addClass("last-seconds");
      }
    } else if (trivia.timer === -1) {
      trivia.unanswered++;
      trivia.result = false;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $("#results").html(
        "<h2>Out of time! The answer was " +
          Object.values(trivia.answers)[trivia.current] +
          "</h2>"
      );
    } else if (trivia.current === Object.keys(trivia.questions).length) {
      //adds results of game to page
      $("#results").html(
        "<p>Correct: " +
          trivia.correct +
          "</p> " +
          "<p>Incorrect: " +
          trivia.incorrect +
          "</p>" +
          "<p>Unanswered: " +
          trivia.unanswered +
          "</p>" +
          "<p>Play again!</p>"
      );

      //hide game
      $("#game").hide();

      //show start button for game
      $("#start").show();
    }
  },
  //method for option clicked
  guessChecker: function() {
    //timer ID for gameresult set time
    var resultId;

    //answer to current question being asked
    var currentAnswer = Object.values(trivia.answers)[trivia.current];

    //if text of option equals answer of question, correct
    if ($(this).text() === currentAnswer) {
      $(this).addClass("btn-success").removeClass("btn-info");

      trivia.correct++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $("#results").html("<h2>Correct Answer!</h2>" + correctAnswer);
    }

    //user picked wrong option, incorrect
    else {
      $(this)
        .addClass("btn-danger")
        .removeClass("btn-info");

      //turn button red for incorrect
      trivia.incorrect++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $("#results").html('');
    }
  },

  //method to remove previous question and options
  guessResult: function() {
    //increment to next question set
    trivia.current++;

    //remove options and results
    $(".option").remove();
    $("#results h2").remove();

    //begin next question
    trivia.nextQuestion();
  }
};
