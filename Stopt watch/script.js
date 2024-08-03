// Initialize variables to hold time components
let hours=0
let minutes=0
let seconds=0
let ampm='AM' // Initial value for AM/PM indicator
let interval; // Variable to hold the interval for updating time

function start(){
    interval = setInterval(updateTime, 1000)
}
function pause(){
    clearInterval(interval)
}
function reset(){
    clearInterval(interval)
    hours=0
    minutes=0
    seconds=0
    updateTime()
}
function updateTime(){
    seconds++
    if(seconds===60){   // If seconds reach 60, reset seconds and increment minutes
        seconds=0
        minutes++
        if(minutes===60){  // If minutes reach 60, reset minutes and increment hours
            minutes=0
            hours++
            if(hours===12){  // If hours reach 12, toggle AM/PM
                if(ampm=="AM"){
                    ampm="PM"
                } else{
                    ampm="AM"
                }
            }
        }
    }
    // Update the HTML elements displaying time
    document.getElementById('hours').innerHTML = padZero(hours)
    document.getElementById('mins').innerHTML = padZero(minutes)
    document.getElementById('seconds').innerHTML = padZero(seconds)
}

function padZero(num){
    return num<10 ? "0"+num : num
}

// setInterval(displayTime,500)