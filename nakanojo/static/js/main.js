'use strict'

// ===================================================
// コピーライトの年を設定
// ===================================================
$(function () {
  let d = new Date()
  let year = d.getFullYear()
  $('.copy-year').append(year)
})

// ===================================================
// エラーアラート
// ===================================================
function dispLogin(txt) {
  let userVal = document.user.user.value
  if (userVal == '名前を選択') {
    window.alert(txt)
  }
}

// ===================================================
// 削除確認
// ===================================================
$('.dialog').each(function() {
  $(this).appendTo('main');
})

let scrollPos
$('.selection__list--col--delete').each(function() {
  $(this).on('click', function() {
    let target = $(this).data('target')
    let modal = document.getElementById(target)
    scrollPos = $(window).scrollTop()
    $(modal).fadeIn(300)
    $('body').css({
      position: 'fixed',
      top: -scrollPos,
      left: 0,
      height: 'auto'
    })
  })
})
$('.dialog__content--form--cancel,.dialog__bg').on('click', function() {
  $('.dialog').fadeOut(300)
  $('body').css({
    position: 'relative',
    top: 0,
    left: 0,
    height: '100%'
  })
  $(window).scrollTop(scrollPos)
})