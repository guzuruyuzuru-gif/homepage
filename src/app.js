import './style.css';
import { animate, stagger } from 'animejs';

const button = document.querySelector('.trigger-btn');

button.addEventListener('click', () => {
  animate('.bar', {
    translateY: ['100%', '0%'],

    delay: stagger(100),

    duration: 800,
    ease: 'outElastic(1, .6)',
  });
});
