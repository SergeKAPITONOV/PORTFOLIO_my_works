const item = document.querySelector('.item')
const placeHolderArray = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)
    
for (const placeHolder of placeHolderArray){ 
    placeHolder.addEventListener('dragover', dragOver)
    placeHolder.addEventListener('dragenter', dragEnter)
    placeHolder.addEventListener('dragleave', dragLeave)
    placeHolder.addEventListener('drop', dragDrop)
}

function dragStart(event) {
    event.target.classList.add('hold')
    setTimeout( () => event.target.classList.add('hide'), 0)    
}

function dragEnd(event) {
    // event.target.classList.remove('hold', 'hide')
    // event.target.classList.remove('hide')
    event.target.className = 'item'
}

function dragOver(event) {
    // preventDefault - перемещение карточки по элементам HTML
    event.preventDefault()
}

function dragEnter(event) {
    event.target.classList.add('hovered')
}

function dragLeave(event) {
    event.target.classList.remove('hovered')
}

function dragDrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}
