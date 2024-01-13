const outputTime = document.getElementById('outputTime')
const fullBtn = document.getElementById('fullBtn')
const dateBtn = document.getElementById('dateBtn')
const timeBtn = document.getElementById('timeBtn')

let modeScreen = 'time'


// fullBtn.onclick = function(){
//     modeScreen = 'full'
//     upDate()
// }
fullBtn.onclick = bindMode('full')

// dateBtn.onclick = function(){
//     modeScreen = 'date'
//     upDate()
// }
dateBtn.onclick = bindMode('date')

// timeBtn.onclick = function(){
//     modeScreen = 'time'
//     upDate()
// }
timeBtn.onclick = bindMode('time')

// ! Функция замыкания
function bindMode(name){
    return function(){
        modeScreen = name
        upDate()
    }
}


// outputTime.textContent =  format(modeScreen)

// setInterval( ()=>{
    //     outputTime.textContent = format(modeScreen)
    //     }, 1000)
setInterval(upDate, 1000)

function upDate(){
    outputTime.textContent = format(modeScreen)
}
    
upDate()
function format(formatMode){
    const nowTime = new Date()
    switch (formatMode){
        case 'time' :
            return nowTime.toLocaleTimeString()
            // return nowTime.toLocaleTimeString()+ '  .  ' +nowTime.getMilliseconds(1000)
        case 'date' :
            return nowTime.toLocaleDateString()
        case 'full' :
            return nowTime.toLocaleDateString()+ '| |' +nowTime.toLocaleTimeString()
        default :
            return nowTime.toLocaleTimeString()
    }
}





