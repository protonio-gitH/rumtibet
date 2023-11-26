import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

let swiper = null;
let swiper2 = null;
let swiper3 = null;

function swiperOneInit(){
    if(!swiper){
        swiper = new Swiper('.swiper', {
            
            direction: 'horizontal',
            
            spaceBetween: 20,
            
        });
    }  
      
};

function swiperTwoInit(){
    if (!swiper2){
        swiper2 = new Swiper('.swiper2', {
            
            direction: 'horizontal',
            
            
        });  
    }
};

function swiperThreeInit(){
    if (!swiper3){
        swiper3 = new Swiper('.swiper3', {
            direction: 'horizontal',
            
            slidesPerView:4,
            
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
        swiper2.destroy();
        swiper3.destroy();
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


