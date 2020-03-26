// $(function() {
//   $("#accordion_menu").click(function() {
//     $("#navlist").slideToggle();
//     return false;
//   });
//   $(window).resize(function() {
//     var win = $(window).width();
//     var p = 559;
//     if (win > p) {
//         $("#navlist").show();
//     } else {
//         $("#navlist").hide();
//     }
//   });
// });

document.getElementById('accordion_menu').addEventListener('click', function () {
  document.getElementById('navlist').classList.toggle('open');
});

// (function(window,document) {
//   var _toggleMenuButton = document.getElementById('accordion_menu');
//   var _toggleMenu = document.getElementById('navlist');
//   var _clientH;
//   init();
//   function init() {
//     _toggleMenu.style.height = 'auto';
//     _clientH = _toggleMenu.clientHeight;
//     _toggleMenu.style.height = '0px';
//     _toggleMenuButton.addEventListener('click', function(){clickToggle();},false);
//   }
//   function clickToggle() {
//     var lastH = _toggleMenu.style.height;
//     _toggleMenu.style.height = (lastH == '' || lastH == '0px') ? _clientH + 'px' : '0px';
//   }
// })(window,document);

// function accordion() {
//   var str = document.getElementById('navlist');
//   if(str.style.display == 'none') {
//     str.style.display = 'block';
//   } else {
//     str.style.display = 'none';
//   }
// }

// document.getElementById('accordion_menu').addEventListener('click', function () {
//   accordion();
// });

// let list = document.getElementsByClassName('menulist');

// for (let i = 0; i < list.length; i++) {
//   list[i].addEventListener('click', function () {
//     accordion();
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const accordionTrigger = document.getElementById('accordion_menu');

//   for (let i = 0; 1 < accordionTrigger.length; i++) {

//     accordionTrigger[i].nextElementSibling.style.height = accordionTrigger[i].nextElementSibling.scrollHeight + 'px';

//     accordionTrigger[i].addEventListener('click', (e) => {
//       let currentElement = e.currentTarget;
//       let accordionTarget = currentElement.nextElementSibling;

//       if (accordionTarget.style.height) {
//         currentElement.removeAttribute('accordion_menu');
//         accordionTarget.style.height = null;
//       } else {
//         currentElement.setAttribute('accordion_menu');
//         accordionTarget.style.height = accordionTarget.scrollHeight + 'px';
//       }
//     });
//   }
// });

// $(function() {
//   $(window).scroll(function() {
//     $('.inner2').each(function() {
//       var position = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > position - windowHeight + 70) {
//         $(this).addClass('active');
//       }
//     });
//   });
// });

// window.addEventListener('scroll', () => {
//   const Skill = document.querySelector('.inner2');
//   let scrollTop = document.scrollingElement.scrollTop;

//   if (scrollTop > 400) {
//     Skill.classList.add('active');
//   } else {
//     Skill.classList.remove('active');
//   }
// });

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