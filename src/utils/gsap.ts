// Importation de GSAP et ScrollTrigger
import gsap from 'gsap';
/* import ScrollTrigger from 'gsap/ScrollTrigger'; */

// Enregistrement du plugin ScrollTrigger
/* gsap.registerPlugin(ScrollTrigger);

export function gridAnim() {
  gsap.set('.work_video-relative, .work_image-relative', { y: '2rem', opacity: 0 });
  gsap.set('.work_video-relative.is-mea, .work_image-relative.is-mea', { y: '2rem', opacity: 0 });

  gsap.to('.work_video-relative, .work_image-relative', {
    scrollTrigger: {
      markers: false,
      trigger: '.work_collection-list',
      start: '00% 85%',
      end: '100% 85%',
      scrub: true,
    },
    y: '0rem',
    opacity: 1,
    stagger: 0.5,
    duration: 1,
  });
} */

export function gridAnim() {
  gsap.set('.work_video-relative, .work_image-relative', { y: '2rem', opacity: 0 });
  gsap.set('.work_video-relative.is-mea, .work_image-relative.is-mea', { y: '2rem', opacity: 0 });

  gsap.to('.work_video-relative, .work_image-relative', {
    y: '0rem',
    opacity: 1,
    stagger: 0.25,
    duration: 0.5,
  });
}
