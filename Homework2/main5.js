const pomodoroHomeButton= document.querySelector("#pomodoro-home");
const pomodoroLongBrake= document.querySelector("#pomodoro-long-brake");
const pomodoroShortBrake= document.querySelector("#pomodoro-short-brake");

const pomodoroTimer = document.querySelector('#pomodoro-clock');
const startButton = document.querySelector('#pomodoro-start');
const stopButton = document.querySelector('#pomodoro-stop');
const resetButton = document.querySelector('#pomodoro-reset');


var isClockRunning=0;


function pomodoroHomeButtonFunction() {
    var x = document.getElementById("pomodoro-start");
    var y= document.getElementById("pomodoro-stop");
    var z= document.getElementById("pomodoro-reset");

    if (x.style.display === "none" && y.style.display==="none" && z.style.display==="none" ) {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
    }
}

var isClockRunning=true;

// Required variables
var session_seconds = "00";
var session_minutes = 25;
var minutes_interval="00"; 
var seconds_interval="00";

// Starting template for the timer

function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    // Check if the seconds and minutes counter has reached 0
    // If reached 0 then end the session
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        // Clears the interval i.e. stops the counter
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);
      }
        
      session_seconds = 60;
    }
}
function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
    
}
function start_timer() {
    session_seconds = 59;
    session_minutes = 24;
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
  
  // Start the countdown
 minutes_interval = setInterval(minutesTimer, 60000);
 seconds_interval = setInterval(secondsTimer, 1000);
  

  // Functions
  // Function for minute counter

  // Function for second counter
  
}
function stop_timer(){

    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
} 
function reset_timer(){
    session_seconds = "00";
    session_minutes = 25;
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
}   
 
function pomodoroLongBrakeFunction(){

    var x = document.getElementById("pomodoro-start");
    var y= document.getElementById("pomodoro-stop");
    var z= document.getElementById("pomodoro-reset");

    if (x.style.display === "none" && y.style.display==="none" && z.style.display==="none" ) {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
    }
   
    session_seconds = 59;
    session_minutes = 09;
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
}

function pomodoroShortBrakeFunction(){

    var x = document.getElementById("pomodoro-start");
    var y= document.getElementById("pomodoro-stop");
    var z= document.getElementById("pomodoro-reset");

    if (x.style.display === "none" && y.style.display==="none" && z.style.display==="none" ) {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
    }
   
    session_seconds = 59;
    session_minutes = 04;
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
}