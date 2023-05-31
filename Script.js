
let  display =  document.querySelector('.display')

let  startbtn = document.querySelector('.start')

let stopbtn = document.querySelector('.stop')

let resetbtn = document.querySelector('.reset')

let startTime , intervalId


function start() {

    startTime = Date.now()

    intervalId = setInterval(()=>{

        let elapsedtime = Date.now() - startTime

        let sec = Math.floor(elapsedtime /1000)

        let min = Math.floor(sec/60)

        let hour = Math.floor(min/60)

        let formattedtime = `${pad(hour)}: ${pad(min)}: ${pad(sec)}` ;

       display.textContent = formattedtime


    } , 1000)
    
}


function stop(){
    clearInterval(intervalId)
}

function reset(){
    clearInterval(intervalId)
    display.textContent = '00:00:00'
}

function pad(number){
    return number < 10 ? '0' +  number : number ;
}


startbtn.addEventListener('click' , start)

stopbtn.addEventListener('click' , stop)

resetbtn.addEventListener('click' , reset)



























