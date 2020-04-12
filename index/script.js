'use strict';

document.querySelectorAll('.nav__toggler--open')[0].onclick = () => {
  const open = document.querySelectorAll('.nav__toggler--open');
  const close = document.querySelectorAll('.nav__toggler--close');
    open[0].style.visibility = 'hidden';
    close[0].style.visibility = 'visible';
  close[0].onclick = () => {
    open[0].style.visibility = 'visible';
    close[0].style.visibility = 'hidden';
  }
}

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
  const myFadeTitle = document.querySelectorAll('.title-text');
  for (let i = 0; i < myFadeTitle.length; i++) {
    let targetElement = myFadeTitle[i].getBoundingClientRect(); // 要素の位置をブラウザの表示領域左上を起点とした値
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = window.innerHeight;
    if (scroll > scroll + targetElement.top - windowHeight + BottomHeight) {
      myFadeTitle[i].style.opacity = '1';
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