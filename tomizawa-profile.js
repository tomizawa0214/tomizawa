document.getElementById('accordion_menu').addEventListener('click', function () {
  document.getElementById('navlist').classList.toggle('open');
});

window.addEventListener("DOMContentLoaded", function() {
  window.onscroll = function (){
    var myFade = document.getElementsByClassName("inner2");
    for(var i = 0; i < myFade.length; i++){
      var targetElement = myFade[i].getBoundingClientRect(); //ターゲット要素の高さ
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;  //スクロール
      var windowHeight = window.innerHeight;  //ウィンドウの高さ
      if (scroll > scroll + targetElement.top - windowHeight + 70){
        myFade[i].style.opacity = "1";
        myFade[i].style.transform = "translateY(0)";
      }
    }
  }
}, false);