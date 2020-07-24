// Displaying value for slider
$(document).ready(function() {

  const $valueSpan = $('.valueSpan');
  const $value = $('#beer_range');
  $valueSpan.html($value.val());
  $value.on('input change', () => {

    $valueSpan.html($value.val());
  });
});
