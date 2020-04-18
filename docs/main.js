'use strict';

// スクロール量が300に達したらボタン表示。300未満は非表示
window.addEventListener('scroll', () => {
  const pageTopBtn = document.querySelector('.back-to-top');
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll > 300) {
    pageTopBtn.style.opacity = '1';
  } else {
    pageTopBtn.style.opacity = null;
  }
});

// スムーススクロールのフォーマット
const scrollFunc = Point => {
  const point = document.querySelector(Point);　// スクロール先の対象を取得
  const elemY = point.getBoundingClientRect().top;　// 対象Y軸の絶対座標を取得
  const scrollY = window.pageYOffset; // 現在のスクロール量を取得
  const top = elemY - scrollY + (-50); // 対象までのスクロール量を算出
  
  window.scroll({
    top: top, // スクロール量の設定
    behavior: 'smooth' // スクロール動作の設定
  });
}
// ページトップへスムーススクロール
document.querySelector('.back-to-top').onclick = (e) => {　// クリックイベントを設定
  e.preventDefault();
  scrollFunc('html, body');
}
// Serviceへスムーススクロール
document.querySelector('.nav__item--box--service').onclick = (e) => {　// クリックイベントを設定
  e.preventDefault();
  scrollFunc('.service');
}
// Worksへスムーススクロール
document.querySelector('.nav__item--box--works').onclick = (e) => {　// クリックイベントを設定
  e.preventDefault();
  scrollFunc('.works');
}
// Profileへスムーススクロール
document.querySelector('.nav__item--box--profile').onclick = (e) => {　// クリックイベントを設定
  e.preventDefault();
  scrollFunc('.profile');
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
  const myFade = document.querySelectorAll('.service, .works, .profile');
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  let windowHeight = window.innerHeight;
  for (let i = 0; i < myFade.length; i++) {
    let targetElement = myFade[i].getBoundingClientRect(); // 要素の位置をブラウザの表示領域左上を起点とした値
    if (scroll > scroll + targetElement.top - windowHeight + BottomHeight) {
      myFade[i].style.opacity = '1';
      myFade[i].style.transform = 'translateY(0)';
    } else {
      myFade[i].style.opacity = null;
      myFade[i].style.transform = null;
    }
  }
}
// スクロールで発動
window.addEventListener('scroll', () => {
  myFunc(100);
});
// 4秒後に発動
window.setTimeout('myFunc(0)', 4000);