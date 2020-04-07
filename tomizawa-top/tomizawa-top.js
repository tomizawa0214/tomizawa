'use strict';

const myFunc = BottomHeight => {
  const myFade = document.querySelectorAll('.section, .section-title, .lead');
  for (let i = 0; i < myFade.length; i++) {
    let targetElement = myFade[i].getBoundingClientRect(); // 要素の位置をブラウザの表示領域左上を起点とした値
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = window.innerHeight;
    if (scroll > scroll + targetElement.top - windowHeight + BottomHeight) {
      myFade[i].style.opacity = '1';
      myFade[i].style.transform = 'translateY(0)';
    }
  }
}

window.addEventListener('scroll', () => {
  myFunc(100);
});

window.addEventListener('DOMContentLoaded', () => {
  myFunc(0);
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