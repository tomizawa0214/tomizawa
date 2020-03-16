$(function() {
  var effect_pos = 300;
  var effect_move = 50;
  var effect_time = 0.8;

  $('.service').css({
    opacity: 0,
    transform: 'translateY('+ effect_move +'px)',
    transition: effect_time + 's'
  });

  $(window).on('scroll load', function(){
    var scroll_top = $(this).scrollTop();
    var scroll_btm = scroll_top + $(this).height();
    effect_pos = scroll_btm - effect_pos;

    $('.service').each( function() {
      var this_pos = $(this).offset().top;
      if ( effect_pos > this_pos ) {
        $(this).css({
          opacity: 1,
          transform: 'translateY(0)'
        });
      }
    });
  });
});
