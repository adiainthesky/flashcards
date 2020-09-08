$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initially-hidden").fadeIn();
    $(".initially-showing").fadeOut();
  });
});