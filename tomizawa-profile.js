$(function() {
  $("#accordion_menu").click(function() {
    $("#navlist").slideToggle();
    return false;
  });
  $(window).resize(function() {
    var win = $(window).width();
    var p = 559;
    if (win > p) {
        $("#navlist").show();
    } else {
        $("#navlist").hide();
    }
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