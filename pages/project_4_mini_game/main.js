const boardFlash = document.getElementById('board')
const colorArray = ['red', 'blue', 'green', 'yellow', 'purple']
const squaresNumber = 500

for (let i=0; i<squaresNumber; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> 
    setColor(square))

    square.addEventListener('mouseleave', ()=> 
    removeColor(square))
    
    boardFlash.append(square)
}

function setColor(element){
    const colorRandom = getRandomColors()
    element.style.backgroundColor = colorRandom
    element.style.boxShadow = `0 0 2px ${colorRandom}, 0 0 10px ${colorRandom}`

}

function removeColor(element){
    element.style.backgroundColor = '#1D1D1D'
    element.style.boxShadow = '0 0 2px #000000'
}

function getRandomColors(){
    const indexColor = Math.floor(Math.random() * colorArray.length)
    return colorArray[indexColor]
}