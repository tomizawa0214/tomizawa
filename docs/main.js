'use strict';

document.querySelector('.nav__toggler--open').onclick = () => {
  const open = document.querySelector('.nav__toggler--open');
  const close = document.querySelector('.nav__toggler--close');
    open.style.visibility = 'hidden';
    close.style.visibility = 'visible';
  close.onclick = () => {
    open.style.visibility = 'visible';
    close.style.visibility = 'hidden';
  }
}

const myFunc = BottomHeight => {
  const myFade = document.querySelectorAll('div.service h2, div.service hr, .service__message, div.works h2, div.works hr, .works__message');
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  let windowHeight = window.innerHeight;
  for (let i = 0; i < myFade.length; i++) {
    let targetElement = myFade[i].getBoundingClientRect(); // 要素の位置をブラウザの表示領域左上を起点とした値
    if (scroll > scroll + targetElement.top - windowHeight + BottomHeight) {
      myFade[i].style.opacity = '1';
      myFade[i].style.transform = 'translateY(0)';
    }
  }
  const myFadeTitle = document.querySelector('.title__text');
  let targetElement = myFadeTitle.getBoundingClientRect(); // 要素の位置をブラウザの表示領域左上を起点とした値
  if (scroll > scroll + targetElement.top - windowHeight + BottomHeight) {
    myFadeTitle.style.opacity = '1';
  }
  const myFadeService = document.querySelectorAll('div.service h3, div.service h4, div.service i, .service__text');
  for (let j = 0; j < myFadeService.length; j++) {
    let targetElement = myFadeService[j].getBoundingClientRect(); // 要素の位置をブラウザの表示領域左上を起点とした値
    if (scroll > scroll + targetElement.top - windowHeight + BottomHeight) {
      myFadeService[j].style.opacity = '1';
      myFadeService[j].style.transform = 'translateX(0)';
    }
  }
}
window.addEventListener('scroll', () => {
  myFunc(100);
});
window.setTimeout('myFunc(0)', 4000);

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