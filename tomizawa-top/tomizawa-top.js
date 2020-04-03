'use strict';

// $(function() {
//   $(window).scroll(function() {
//     $('.service, .service-message, .section1, .section2, .section3, .works, .works-message').each(function() {
//       var position = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > position - windowHeight + 70) {
//         $(this).addClass('active');
//       }
//     });
//   });
// });
// $(document).ready(function(){
//   $('.flip').click(function(){
//     $('.contact-flip').toggleClass('flipped');
//     return false;
//   });
// });

window.addEventListener('DOMContentLoaded', () => {
  const flip = document.getElementsByClassName('flip');
  for (let i = 0; i < flip.length; i++) {
    flip[i].addEventListener('click', () => {
      const targets = document.getElementsByClassName('contact-flip');
      for (let i = 0; i < targets.length; i++) targets[i].classList.toggle('flipped');
    });
  }
});