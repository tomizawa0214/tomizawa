'use strict';

// window.addEventListener('DOMContentLoaded', () => {
//   (window.onscroll || window.onload ) = () => {
//     const myFade = document.querySelectorAll('.section, .section-title, .lead');
//     for (let i = 0; i < myFade.length; i++) {
//       let targetElement = myFade[i].getBoundingClientRect(); // 要素の位置をブラウザの表示領域左上を起点とした値
//       let scroll = document.documentElement.scrollTop || document.body.scrollTop;
//       let windowHeight = window.innerHeight;
//       if (scroll > scroll + targetElement.top - windowHeight + 100) {
//         myFade[i].style.opacity = '1';
//         myFade[i].style.transform = 'translateY(0)';
//       }
//     }
//   }
// });

window.addEventListener('scroll', () => {
  const myFade = document.querySelectorAll('.section, .section-title, .lead');
  for (let i = 0; i < myFade.length; i++) {
    let targetElement = myFade[i].getBoundingClientRect(); // 要素の位置をブラウザの表示領域左上を起点とした値
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = window.innerHeight;
    if (scroll > scroll + targetElement.top - windowHeight + 100) {
      myFade[i].style.opacity = '1';
      myFade[i].style.transform = 'translateY(0)';
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const myFade = document.querySelectorAll('.section, .section-title, .lead');
  for (let i = 0; i < myFade.length; i++) {
    let targetElement = myFade[i].getBoundingClientRect(); // 要素の位置をブラウザの表示領域左上を起点とした値
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = window.innerHeight;
    if (scroll > scroll + targetElement.top - windowHeight + 0) {
      myFade[i].style.opacity = '1';
      myFade[i].style.transform = 'translateY(0)';
    }
  }
});

// window.addEventListener('DOMContentLoaded', () => {
//   window.onscroll = () => {
//     const myFade = document.querySelectorAll('.section, .section-title, .lead');
//     for (let i = 0; i < myFade.length; i++) {
//       let targetElement = myFade[i].getBoundingClientRect(); // 要素の位置をブラウザの表示領域左上を起点とした値
//       let scroll = document.documentElement.scrollTop || document.body.scrollTop;
//       let windowHeight = window.innerHeight;
//       if (scroll > scroll + targetElement.top - windowHeight + 100) {
//         myFade[i].style.opacity = '1';
//         myFade[i].style.transform = 'translateY(0)';
//       }
//     }
//   }
//   window.onload = () => {
//     const myFade = document.querySelectorAll('.section, .section-title, .lead');
//     for (let i = 0; i < myFade.length; i++) {
//       let targetElement = myFade[i].getBoundingClientRect(); // 要素の位置をブラウザの表示領域左上を起点とした値
//       let scroll = document.documentElement.scrollTop || document.body.scrollTop;
//       let windowHeight = window.innerHeight;
//       if (scroll > scroll + targetElement.top - windowHeight + 100) {
//         myFade[i].style.opacity = '1';
//         myFade[i].style.transform = 'translateY(0)';
//       }
//     }
//   }
// });

// window.addEventListener('DOMContentLoaded', () => {
//   window.onscroll = () => {
//     var elemObj = document.getElementsByClassName('section-title');
//     if(isVerticalScrolledIntoView((elemObj)) == true ) {
//       elemObj.style.opacity = '1';
//       elemObj.style.transform = 'translateY(0)';
//     }
//   }
// });

// function isVerticalScrolledIntoView(elem) {
//   var documentElement = null;
//   if (navigator.userAgent.toLowerCase().match(/webkit|msie 5/)) {
//       // Webkit系（Safari, Chrome, iOS）、IE5はbody要素
//       documentElement = document.body;
//   } else {
//       // IE（6以上）、Firefox、Operaはhtml要素
//       documentElement = document.documentElement;
//   }
//   var docViewTop = documentElement.scrollTop;
//   var docViewBottom = docViewTop + documentElement.clientHeight;
//   var elemTop = elem.offsetTop;
//   var elemBottom = elemTop;
//   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


// var elemObj = document.getElementsByClassName('section-title');
// for (let i = 0; i < elemObj.length; i++) {
//   if(isVerticalScrolledIntoView(elemObj)) {
//             elemObj.style.opacity = '1';
//             elemObj.style.transform = 'translateY(0)';
//   }
// }

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