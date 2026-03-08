// 1 hour = 3600 seconds
let time = 3600;

let timer = null;

// display on screen
function updateTimer() {

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    document.getElementById("timer").innerText =
        hours + ":" + minutes + ":" + seconds;
}


// start button
function startTimer() {

    if(timer !== null){
        return;
    }

    timer = setInterval(function () {

        if(time > 0){
            time--;
            updateTimer();
        }
        else{
            clearInterval(timer);
            alert("Timer Finished");
        }

    },1000);
}


// pause button
function pauseTimer(){

    clearInterval(timer);
    timer = null;

}

// reset button
function resetTimer(){

    clearInterval(timer);
    timer = null;

    time = 3600;

    updateTimer();
}
// show starting time
updateTimer();