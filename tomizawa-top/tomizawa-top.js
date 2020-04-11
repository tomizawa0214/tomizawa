'use strict';

document.getElementById('bar-open').onclick = () => {
  const open = document.getElementById('bar-open');
  const close = document.getElementById('bar-close');
    open.style.visibility = 'hidden';
    close.style.visibility = 'visible';
  close.onclick = () => {
    open.style.visibility = 'visible';
    close.style.visibility = 'hidden';
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

// function isVerticalScrolledIntoView(elem) {
//   let documentElement = null;
//   documentElement = document.documentElement;
//   let docViewTop = documentElement.scrollTop;
//   let docViewBottom = docViewTop + documentElement.clientHeight;
//   let elemTop = elem.offsetTop;
//   let elemBottom = elemTop;
//   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }
// window.addEventListener('DOMContentLoaded', () => {
//   window.onscroll =() => {
//     let elemObj = document.querySelectorAll('.section, .section-title, .lead');
//     if (isVerticalScrolledIntoView(elemObj[1])) {
//       elemObj.style.opacity = '1';
//       elemObj.style.transform = 'translateY(0)';
//     }
//     const myFade = document.querySelectorAll('.section, .section-title, .lead');
//     for (let i = 0; i < myFade.length; i++) {
//       const targetElement = myFade[i].getBoundingClientRect();
//       const scroll = document.documentElement.scrollTop || document.body.scrollTop;
//       const windowHeight = window.innerHeight;
//       if (scroll > scroll + targetElement.top - windowHeight + 70) {
//         myFade[i].style.opacity = '1';
//         myFade[i].style.transform = 'translateY(0)';
//       }
//     }
//   }
// });


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