// Displaying value for slider
$(document).ready(function() {

  const $valueSpan = $('.valueSpan');
  const $value = $('#beer_range');
  $valueSpan.html($value.val());
  $value.on('input change', () => {

    $valueSpan.html($value.val());
  });
});


// JS Code for Editing Brewery List

const btn_add_brewer = document.getElementById("btn_add_brewer");
const btn_rmv_brewer = document.getElementById("btn_remove_brewer");
const brewer_list = document.getElementById("form_control_select_brewer");
const brewer_list_copy = document.getElementById("form_control_select_brewer_copy");
const txt_new_brewery = document.getElementById("txt_input_add_brewer");

function add_brewer() {
  // Create a new option element
  var new_brewery = txt_new_brewery.value;
  var opt = document.createElement('option');

  // Set the name and class of new brewery
  opt.textContent = new_brewery;
  opt.setAttribute('class', new_brewery);

  // Clone for appending
  var opt_clone = opt.cloneNode(true);

  // Append new breweries
  brewer_list.appendChild(opt);
  brewer_list_copy.appendChild(opt_clone);
  alert("Done");
};

function rmv_brewer() {
  var old_brewery = brewer_list_copy.value;
  var rmv_brewery = brewer_list.getElementsByClassName(old_brewery)[0];
  var rmv_brewery_copy = brewer_list_copy.getElementsByClassName(old_brewery)[0];
  rmv_brewery.parentNode.removeChild(rmv_brewery);
  rmv_brewery_copy.parentNode.removeChild(rmv_brewery_copy);
}

btn_add_brewer.onclick = function() {
  add_brewer();
}

btn_rmv_brewer.onclick = function() {
  rmv_brewer();
}

// JS Code for Editing Style List

const btn_add_style = document.getElementById("btn_add_style");
