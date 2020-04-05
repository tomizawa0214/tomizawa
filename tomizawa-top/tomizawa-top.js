'use strict';

window.addEventListener('DOMContentLoaded', () => {
  window.onscroll = () => {
    const myFade = document.getElementsByClassName('section-title');
    for (let i = 0; i < myFade.length; i++) {
      const targetElement = myFade[i].getBoundingClientRect();
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight;
      if (scroll > scroll + targetElement.top - windowHeight + 70) {
        myFade[i].style.opacity = '1';
        myFade[i].style.transform = 'translateY(0)';
      }
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const flip = document.getElementsByClassName('flip');
  for (let i = 0; i < flip.length; i++) {
    flip[i].addEventListener('click', () => {
      const targets = document.getElementsByClassName('contact-flip');
      for (let i = 0; i < targets.length; i++) {
        targets[i].classList.toggle('flipped');
      }
    });
  }
});