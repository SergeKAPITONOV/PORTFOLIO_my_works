const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const containerSlide = document.querySelector('.slide__pitures-block')
const slidesCount = mainSlide.querySelectorAll('div').length
const houseTwoBtn = document.getElementById('houseTwo')
const houseThreeBtn = document.getElementById('houseThree')
const houseFiveBtn = document.getElementById('houseFive')

let activeSlideIndex = 0

sideBar.style.top = `-${(slidesCount - 1) * 800}px`

upButton.addEventListener('click', ()=> {
    changeSlide('up')
})

downButton.addEventListener('click', ()=> {
    changeSlide('down')
})

document.addEventListener('keydown', event  => {
    if (event.key === 'ArrowUp'){
        changeSlide('up')
    } else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up'){
        activeSlideIndex ++        
        if (activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex --        
        if (activeSlideIndex < 0){
            activeSlideIndex = slidesCount - 1
        }
    }

    const heightDiv = containerSlide.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * heightDiv}px)`
    sideBar.style.transform = `translateY(${activeSlideIndex * heightDiv}px)`
       
}

// Секция "footer"
houseTwoBtn.addEventListener('click', ()=> {
    mainSlide.style.transform = `translateY(-${1 * 800}px)`
    sideBar.style.transform = `translateY(${1 * 800}px)`
})

houseThreeBtn.addEventListener('click', ()=> {
    mainSlide.style.transform = `translateY(-${1 * 1600}px)`
    sideBar.style.transform = `translateY(${1 * 1600}px)`
})

houseFiveBtn.addEventListener('click', ()=> {
    mainSlide.style.transform = `translateY(-${1 * 2400}px)`
    sideBar.style.transform = `translateY(${1 * 2400}px)`
})

