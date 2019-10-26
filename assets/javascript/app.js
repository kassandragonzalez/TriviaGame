$(document).ready(function(){


    //event listners
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);
    
})

var trivia = {
    //trvia properties 
    correct: 0, 
    incorrect: 0,
    unanswered: 0, 
    currentSet: 0, 
    timer: 30, 
    timerOn: false,
    timerId: "",
   // question options and answers
   questions: {
    q1: 'S2E2 introduces Michaels catch phrase...',
    q2: 'In S2E5 "Halloween" What is Jims costume?',
    q3: 'In S2E7 "Performance Review" Who does Michael quickly dismiss saying "You were totally satisfactory this year"?',
    q4: 'In S2E12 "The Injury" What is Michaels injury?',
    q5: 'In S2E19 "Michaels Birthday" Who has a cancer scare?',
    q6: 'In S3E5 "Initiation" What song does Jim sing to annoy Karen?', 
    q7: 'In S6E7 "Koi Pond" Who fell into the koi pond?',
    q8: 'In S6E19 "Happy Hour" What clothing item transforms Michael into Date Mike?', //110
    q9: 'In S3E21 "Womens Appreciation" Who gets flashed in the parking lot?',
    q10: 'In S9E23 what activity does the office choose to do on Darryls last day?',
   }
}
