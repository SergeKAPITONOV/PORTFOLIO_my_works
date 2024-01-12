const buttonModal = document.getElementById('btnSetReviews'); 
const modalWindow = document.getElementById('modalWindow');
const modalContent = document.getElementById('modalContent');
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