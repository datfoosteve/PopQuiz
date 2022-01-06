    // code the click event from the start button to start the timer
        

    // code timer
    // code question - Array of objects;

    // Answer form question by clicking using the click event handler
    //
    // Check if question boolean is true, move on to next qurestion on click event(choices)
                                //is false, subtract from timer 10 seconds and then move on to question from click event.(choices)

    // Post some sort of message stating the game is over page

    //Final conditions is when the timer reaches 0 or all the questions are answers
    // Then - use local storage to store initials (string) of the player.
var mainEl = document.getElementById("#main");
var timerEl = document.getElementById("#countDown");
var gameTimer = 30;
var timeInterval;


  const startButtonEl = document.querySelector('#start');
 
startButtonEl.addEventListener('click', startTimer);





const startTimer = () => {
timeInterval = setInterval(function (){

if(gameTimer > 1){
    // Update screen with new time
    timerEl.textContent = gameTimer + ' seconds remaining';
    gameTimer--;

}
 else if(gameTimer < 1 )
 {
    timerEl.textContent = '';
    clearInterval(timeInterval);
    // Update Screen that the game is over and timer is cleared
}

}, 1000);


}

