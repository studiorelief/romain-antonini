import './index.css';

/* import { filterLogic } from '$utils/filterLogic'; */
import { gridAnim } from '$utils/gsap';
import { alljQuery, updateAll, updateCategorie } from '$utils/jquery';
import { loadScript } from '$utils/loadScript';
import { imageSlide } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Load GSAP functions
  gridAnim();

  // Load Swiper Image
  imageSlide();

  // Load jQuery
  alljQuery();
  $('[fs-cmsfilter-field="categorie"]').click(function () {
    updateCategorie();
  }),
    $('#filter-all').click(function () {
      setTimeout(function () {
        updateAll();
      }, 500); // Délai de 500 millisecondes (0,5 seconde)
    });

  // Load FS Attributes
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
  ]);

  // Load FilterLogic
});
