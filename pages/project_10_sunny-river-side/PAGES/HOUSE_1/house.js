const galleryCarousel = document.getElementById('galleryCarousel');
const galleryCloseBtn = document.getElementById('galleryClose');
const galleryContent = document.getElementById('galleryContent');
const carouselCloseBtn = document.getElementById('carouselClose');
const carouselSlide = document.getElementById('carouselSlide');
const arrayPhotoItem = document.querySelectorAll('.photo__item');
const arrayCarouselItem = document.querySelectorAll('.carousel-item');
const arrCarouselIndicators = document.querySelectorAll('.item_mark')

function startGallery(){  
  for(const photoItem of arrayPhotoItem){   
    galleryContent.addEventListener('mouseover', event => {
      const indexNow = Array.from(arrayPhotoItem).indexOf(event.target);
      
      photoItem.addEventListener('click', ()=>{
        galleryCarousel.style.opacity = '1';
        galleryCarousel.style.visibility = 'visible';
        carouselSlide.style.transform = 'translateY(0)';    
        clearActiveClassItem();
        clearActiveMark();
        arrayCarouselItem[indexNow].classList.add('active');
        arrCarouselIndicators[indexNow].classList.add('active');  
      });
    });
  };
};
startGallery();

function clearActiveClassItem(){
  arrayCarouselItem.forEach((item)=>{
    item.classList.remove('active')
  });
};
function clearActiveMark(){
  arrCarouselIndicators.forEach((item)=>{
    item.classList.remove('active')
  });
};


carouselCloseBtn.addEventListener('click', ()=>{
  galleryCarousel.style.opacity = '0';
  galleryCarousel.style.visibility ='hidden';
  carouselSlide.style.transform = 'translateX(-50%)';
  carouselSlide.style.transition = '.8s';  
});

galleryCloseBtn.onclick = function(){
  window.close();
  return false;  
};


// console.log(Array.from(arrayPhotoItem));
// console.log(arrayCarouselItem);

// galleryContent.addEventListener('click', event => {
//   const galleryGetIndex = Array.from(arrayPhotoItem).indexOf(event.target);
//   console.log(galleryGetIndex);
// });
 



