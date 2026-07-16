import './style.css';
import { animate } from 'animejs';

const button = document.querySelector('.anime-btn');

button.addEventListener('mouseenter', () => {
  animate('.anime-btn', {
    scale: 1.2,
    rotate: '5deg',
    duration: 800,
    ease: 'outElastic',
  });
});

button.addEventListener('mouseleave', () => {
  animate('.anime-btn', {
    scale: 1,
    rotate: '0deg',
    duration: 500,
    ease: 'outQuint',
  });
});
