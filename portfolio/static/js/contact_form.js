'use strict';

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

// (function () {
//   const navList = document.querySelectorAll('.nav__item--box--service, nav__item--box--works, nav__item--box--skill, nav__item--box--profile');
//   for (let i = 0; i < navList.length; i++) {
//     navList[i].addEventListener('click', () => {
//       const opening = document.querySelector('.opening');
//       opening.style.display = 'none';
//     });
//   }
// }());