import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

let swiper = null;
let swiper2 = null;
let swiper3 = null;

function swiperOneInit(){
    if(!swiper){
        swiper = new Swiper('.swiper', {
            slidesPerView:'auto',   
            direction: 'horizontal',
            
            spaceBetween: 20,
            
            
        });
    }  
      
};

function swiperTwoInit(){
    if (!swiper2){
        swiper2 = new Swiper('.swiper2', {
            slidesPerView:"auto", 
            direction: 'horizontal',
            spaceBetween: 24,
            
            
        });  
    }
};

function swiperThreeInit(){
    if (!swiper3){
        swiper3 = new Swiper('.swiper3', {
            direction: 'horizontal',
            
            slidesPerView:"1",
            spaceBetween: 20,

            breakpoints: {
                390:{
                    slidesPerView:"auto",
                }
            }
            
        });  
    }
};


if (document.documentElement.clientWidth < 768){
    
    swiperOneInit();
    swiperTwoInit();
    swiperThreeInit();
};



function swiperDestroy() {
    if (swiper && swiper2 && swiper3){
        swiper.destroy();
        swiper = null;
        swiper2.destroy();
        swiper2 = null;
        swiper3.destroy();
        swiper3 = null;
    }
};




window.addEventListener('resize',(e) =>{
    
  if (document.documentElement.clientWidth <= 768) {
    
    swiperOneInit();
    swiperTwoInit();
    swiperThreeInit();
    
  } else {
    
    swiperDestroy();
  }
    
});


