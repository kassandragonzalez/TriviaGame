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
  timer: 30,
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
      'In S6E19 "Happy Hour" What clothing item transforms Michael into Date Mike?', //110
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

    $('#game').show();
    $('#results').html(''); 
    $('#timer').text(trivia.timer);
    $('#start').hide();
    $('#remaining-time').show();

    
  }
};
