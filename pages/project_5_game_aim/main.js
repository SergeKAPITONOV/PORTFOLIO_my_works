const startBtn = document.getElementById('beginGame')
const screenArray = document.querySelectorAll('.screen')
const timeListBtn = document.getElementById('timeList')
const timeEl = document.getElementById('time')
const board = document.getElementById('board')
const colorArray = ['#FF0033', '#FF9933', '#FFFF33', '#339933', '#0033FF', '#000099', '#330099',]
let timeAdd = 0
let scoreGame = 0


startBtn.addEventListener('click', event => {
    event.preventDefault()
    screenArray[0].classList.add('up')
})

timeListBtn.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        timeAdd = parseInt(event.target.getAttribute('data-time'))
        screenArray[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')){
        scoreGame++
        event.target.remove()
        creatRndCircle()
    }

})
// // debug
// startGame()

function startGame() {
    setInterval(desreaseTime, 1000)
    creatRndCircle()
    // timeEl.innerHTML = `00:${timeAdd}`
    setTime(timeAdd)
}

function desreaseTime() {
    if (timeAdd === 0) {
      finishGame()  
    } else {
        let current = --timeAdd
        if (current < 10){
            current = `0${current}`
        }
        // timeEl.innerHTML = `00:${current}`
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    // timeEl.parentNode.remove()
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчет: <span class="primary">${scoreGame}</span></h1>`
}

function creatRndCircle() {
    const circleElement = document.createElement('div')
    const sizeCircle = getRndNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    // const sizeBord = board.getBoundingClientRect()
    // console.log(sizeBord);
    const colorRandom = getRandomColors()
    const x = getRndNumber(0, width-sizeCircle)
    const y = getRndNumber(0, height-sizeCircle)

    circleElement.classList.add('circle')
    circleElement.style.width = `${sizeCircle}px`
    circleElement.style.height = `${sizeCircle}px`
    circleElement.style.top = `${y}px`
    circleElement.style.left = `${x}px`
    circleElement.style.backgroundColor = `${colorRandom}`
    circleElement.style.boxShadow = `0 0 2px ${colorRandom}, 0 0 10px ${colorRandom}`

    board.append(circleElement)
}

function getRndNumber(min, max) {
    return Math.round(Math.random() * (max-min)+min)    
}

function getRandomColors(){
    const indexColor = Math.floor(Math.random() * colorArray.length)
    return colorArray[indexColor]
}