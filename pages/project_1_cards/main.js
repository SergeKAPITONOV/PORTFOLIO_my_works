const slideRow = document.querySelectorAll('.slide');

function addSlidesStart(actieSlide){    
    slideRow[actieSlide].classList.add('active') 
    
    for (const slide of slideRow) {
        slide.addEventListener('click', ()=> {
            clearActiveClasses()        
            slide.classList.add('active')
        })
    }
    
    function clearActiveClasses(){
        slideRow.forEach((slide) => {
            slide.classList.remove('active')    
        })
    }    
}

addSlidesStart(2)