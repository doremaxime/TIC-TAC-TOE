'use strict';


$(document).ready(function() {
  $('circle').on('click', function () {
    let message = $('<span>x</span>');
    $(this).append(message);
    $(this).remove();
  });
});
