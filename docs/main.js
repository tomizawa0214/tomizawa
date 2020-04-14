'use strict';

// スクロール量が300に達したらボタン表示。300未満は非表示
window.addEventListener('scroll', () => {
  const pageTopBtn = document.querySelector('.back-to-top');
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll > 300) {
    pageTopBtn.style.opacity = '1';
  } else {
    pageTopBtn.style.opacity = '0';
  }
});

// html,bodyのトップまでスムーズスクロール
document.querySelector('.back-to-top').onclick = () => {
  anime.remove('html, body');
  anime({
    targets: 'html, body',
    scrollTop: 0,
    dulation: 200,
    easing: 'easeOutCubic',
  });
}

// アコーディオンメニュー表示の付け替え
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

// 指定要素が画面内に入ったらフェードイン
const myFunc = BottomHeight => {
  const myFade = document.querySelectorAll('.service, .works, .footer');
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
}
window.addEventListener('scroll', () => {
  myFunc(100);
});
window.setTimeout('myFunc(0)', 4000);

// window.addEventListener('DOMContentLoaded', () => {
//   const flip = document.getElementsByClassName('flip');
//   for (let i = 0; i < flip.length; i++) {
//     flip[i].addEventListener('click', () => {
//       const targets = document.getElementsByClassName('contact-flip');
//       for (let i = 0; i < targets.length; i++) {
//         targets[i].classList.toggle('flipped');
//       }
//     });
//   }
// });