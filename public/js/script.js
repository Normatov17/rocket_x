AOS.init();



/////
var swiper = new Swiper(".mySwiperTestimonials", {
  autoplay: {
    delay: 10000,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  loop: true,
 
});

////
var swiper = new Swiper(".mySwiperProcess", {
  autoplay: {
    delay: 2000,
  },
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  loop: true,
  // loopFillGroupWithBlank: true,
 
});

///
var swiper = new Swiper(".mySwiperServices", {
  cssMode: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 28,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next0",
    prevEl: ".swiper-button-prev0",
  },

  breakpoints: {
    450: {
      slidesPerView:2,
      spaceBetween:28,
    },
    768: {
      slidesPerView: 2,
      spaceBetween:28,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween:20,
    },
  },
  mousewheel: true,
  keyboard: true,
});