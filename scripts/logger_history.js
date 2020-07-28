const main = document.querySelector("main");
const display_element = document.getElementById("display_logged_history");
var history_log = window.sessionStorage.getItem("history_arr_str");
var history_to_display = JSON.parse(history_log);

function display_beer_name(beer) {
  if (beer.name_of_drink != "") {
    return `${beer.select_brewer} - ${beer.select_style} : ${beer.name_of_drink}`;
  } else {
    return `${beer.select_brewer} - ${beer.select_style}`;
  }

}

function display_func(beer) {
  return `
    <div class="beer-entry border border-danger shadow">
      <h3>${display_beer_name(beer)}</h3>
      <ul class="beer-entry-info">
        <li class="beer-entry-img-li">
          <img class="beer-entry-img" src=${beer.image_url}></img>
        </li>

        <li>
          Rating: ${beer.beer_range}
        </li>

        <li>
          Description: ${beer.beer_description}
        </li>
      </ul>
    </div>
  `
};

window.addEventListener("DOMContentLoaded", function(event) {
  display_element.innerHTML = `
    ${history_to_display.map( display_func ).join('')}
  `
});
