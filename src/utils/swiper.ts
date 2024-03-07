import 'swiper/css';

import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

function imageSlide() {
  new Swiper('.swiper', {
    modules: [Navigation, Mousewheel, Keyboard],
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: '4%',
    centeredSlides: true,
    //* bug on loop à régler
    loop: true,
    grabCursor: true,
    slideToClickedSlide: true,
    /* autoHeight: true, */
    speed: 1500,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      thresholdDelta: 1,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      // Navigation arrows
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slideActiveClass: 'is-active',
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 'auto',
        spaceBetween: '4%',
      },
      // tablet
      768: {
        slidesPerView: 1,
        spaceBetween: '4%',
        centeredSlides: false,
      },
      // desktop
      992: {
        slidesPerView: 1,
        spaceBetween: '4%',
      },
    },
  });
}

export { imageSlide };
