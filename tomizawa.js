$(function() {
  $(window).scroll(function() {
    $('.service, .service-message, .section1, .section2, .section3, .works, .works-message').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 70) {
        $(this).addClass('active');
      }
    });
  });
});
