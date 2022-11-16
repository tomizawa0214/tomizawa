'use strict'

// ===================================================
// コピーライトの年を設定
// ===================================================
$(function () {
  let d = new Date();
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