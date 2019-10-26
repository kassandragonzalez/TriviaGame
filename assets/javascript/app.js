$(document).ready(function(){


    //event listners
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);
    
})

var trivia = {
    //trvia properties 
}
