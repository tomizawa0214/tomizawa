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