'use strict';

document.getElementById('accordion_menu').addEventListener('click', () => {
  document.getElementById('navlist').classList.toggle('open');
});

window.addEventListener('DOMContentLoaded', () => {
  window.onscroll = () => {
    const myFade = document.getElementsByClassName('inner2');
    for(let i = 0; i < myFade.length; i++) {
      const targetElement = myFade[i].getBoundingClientRect(); //ターゲット要素の高さ
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;  //スクロール
      const windowHeight = window.innerHeight;  //ウィンドウの高さ
      if (scroll > scroll + targetElement.top - windowHeight + 70) {
        myFade[i].style.opacity = '1';
        myFade[i].style.transform = 'translateY(0)';
      }
    }
  }
});