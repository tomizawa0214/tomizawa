$(function() {
  $("#accordion_menu").click(function() {
    $("#navlist").slideToggle();
    return false;
  });
  // $(window).resize(function() {
  //   if ($('.menulist').css('float') == 'left') {
  //       $("#navlist").show();
  // } else {
  //       $("#navlist").hide();
  //       }
  // });
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
