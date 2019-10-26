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
    
}
