$(function() {
  $("#slide_button").on("click", function() {
    $("#slide_menu").slideToggle();
    $("#slide_menu").toggleClass("active");
  });
});

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
