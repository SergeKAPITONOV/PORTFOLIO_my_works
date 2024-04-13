const buttonModal = document.getElementById('blockContactPhone'); 
const modalWindow = document.getElementById('qrWindow');
const modalContent = document.getElementById('qrContent');
const modalClose = document.getElementById('modalClose');

// console.log(buttonModal);
// console.log(modalWindow);
// console.log(modalContent);
// console.log(modalClose);


buttonModal.addEventListener('click', () => {
    modalWindow.style.opacity = '1';
    modalWindow.style.visibility = 'visible';
    modalContent.style.transform = 'translateY(0)';
});

modalClose.addEventListener('click', () =>{
    modalWindow.style.opacity = '0';
    modalWindow.style.visibility = 'hidden';
    modalContent.style.transform = 'translateY(-50%)';
});

window.addEventListener('click', (event) =>{
    if(event.target == modalWindow){
        modalWindow.style.opacity = '0';
        modalWindow.style.visibility = 'hidden';
        modalContent.style.transform = 'translateY(-50%)';
    }
});