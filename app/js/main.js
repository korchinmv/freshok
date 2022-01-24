$(function () {

  let flag = false;
  $('.menu-dropdown').click(function () {
    if (!flag) {
      $('.menu-dropdown__item').slideDown();
    } else {
      $('.menu-dropdown__item').slideUp();
    }
    flag = !flag;
  });
});