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

function accordion() {
  var str = document.getElementById('navlist');
  if(str.style.display == 'none') {
    str.style.display = 'block';
  } else {
    str.style.display = 'none';
  }
}

document.getElementById('accordion_menu').addEventListener('click', function () {
  accordion();
});

let list = document.getElementsByClassName('menulist');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    accordion();
  });
}

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

window.addEventListener('scroll', () => {
  const Skill = document.querySelector('.inner2');
  let scrollTop = document.scrollingElement.scrollTop;

  if (scrollTop > 70) {
    Skill.classList.add('active');
  } else {
    Skill.classList.remove('active');
  }
});