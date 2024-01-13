const inputTitle = document.getElementById('inputTitle')
const createBtn = document.getElementById('create')
const listGroup = document.getElementById('listGroup')

// console.log(inputTitle.value);

// const notesArray = ['Массивы', 'Объекты'];
const notesArray = [
    // {
    //     title: 'Массивы',
    //     completed: false,
    // },
    // {
    //     title: 'Объекты',
    //     completed: false,
    // },
]

function getRender (){
    listGroup.innerHTML = ''
    if (notesArray.length === 0){
        listGroup.innerHTML = '<p>нет заметок </p>'
    }
    for (let i = 0; i < notesArray.length; i++){
        listGroup.insertAdjacentHTML('beforeend', getNoteTemplate(notesArray[i], i))
    }

    // for (let noteTitle of notesArray){
    //     listGroup.insertAdjacentHTML('beforeend', getNoteTemplate(noteTitle))
    // }

    // listGroup.insertAdjacentHTML('beforeend', getNoteTemplate(notesArray[0]))
    // listGroup.insertAdjacentHTML('beforeend', getNoteTemplate(notesArray[1]))
   
    // listGroup.insertAdjacentHTML(
    //     'beforeend', 
    //     `<li
    //         class="list-group-item d-flex justify-content-between align-items-center"
    //     >
    //         <span>${notesArray[0]}</span>
    //         <span>
    //             <span class="btn btn-small btn-success">&check;</span>
    //             <span class="btn btn-small btn-danger">&times;</span>
    //         </span>
    //     </li>` 
    // )
    // listGroup.insertAdjacentHTML(
    //     'beforeend', 
    //     `<li
    //         class="list-group-item d-flex justify-content-between align-items-center"
    //     >
    //         <span>${notesArray[1]}</span>
    //         <span>
    //             <span class="btn btn-small btn-success">&check;</span>
    //             <span class="btn btn-small btn-danger">&times;</span>
    //         </span>
    //     </li>` 
    // )
};
getRender ()

createBtn.onclick = function (){
    if (inputTitle.value.length === 0){
        return
    }
    const newNoteTitle = {
        title: inputTitle.value,
        completed: false,
    }
    // listGroup.innerHTML =         
    // listGroup.insertAdjacentHTML('beforeend', getNoteTemplate(newNoteTitle))
    notesArray.push(newNoteTitle)
    getRender ()
    inputTitle.value = ''   
};

listGroup.onclick = function (event){
    if (event.target.dataset){
        const indexBtn = parseInt(event.target.dataset.index)
        const typeBtn = event.target.dataset.type

        if (typeBtn === 'toggle'){
            notesArray[indexBtn].completed = !notesArray[indexBtn].completed
        } else if(typeBtn === 'remove'){
            notesArray.splice(indexBtn, 1)
        }
        getRender()
    }
};

function getNoteTemplate(noteTitle, indexTitle){
    // console.log(noteTitle.completed);
    return `
    <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
            <span class="${noteTitle.completed ? 'text-decoration-line-through' : ''}">${noteTitle.title}</span>
            <span>
                <span class="btn btn-small btn-${noteTitle.completed ? 'warning' : 'success'}" data-index="${indexTitle}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-type="remove" data-index="${indexTitle}">&times;</span>
            </span>
    </li>`        
};