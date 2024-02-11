let play=document.querySelector(".play")
let pause=document.querySelector(".pause")
let Reset=document.querySelector(".reset")
var [hr,min,sec,ms]=[0,0,0,0];
let displayTime;

let element=document.querySelector("h1")


let interval=null;

const start = () => {
   interval= setInterval(stopwatch,10)
}
const stop = () => {
    interval && clearInterval(interval)
}
const reset = () => {
    stop();
    [hr,min,sec,ms]=[0,0,0,0];
    displayTime=` 0${hr}:0${min}:0${sec}:0${ms}`
    element.innerText=displayTime;
}

const stopwatch = () => {
    ms++
    if(ms>=100){
        ms=0;
        sec++
    }
    if(sec>=60){
        sec=0;
        min++
    }
    if(min>=60){
        min=0;
        hr++
    }
    
    displayTime=`${addZerro(hr)}:${addZerro(min)}:${addZerro(sec)}:${ms}`
    // addZerro(displayTime)
    element.innerText=displayTime;
    console.log(displayTime)
}

let addZerro=(value)=>{
    return value<10 ? `0${value}` : value;
}

play.addEventListener('click',start)
pause.addEventListener('click',stop)
Reset.addEventListener('click',reset)