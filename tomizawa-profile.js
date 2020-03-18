$(function() {
  $(window).scroll(function() {
    $('.inner2').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 70) {
        $(this).addClass('active');
      }
    });
  });
});
