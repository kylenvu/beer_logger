const g_profile_image = document.getElementById("g-profile-img");
const btn_start = document.getElementById("nav_btn_start");
const btn_login = document.getElementById("nav_btn_login");

var profile_image_url = window.sessionStorage.getItem("profile_image_url") || "";
g_profile_image.src = profile_image_url;

function move_to_start() {
  location.href = "form_page.html";
};

function move_to_login() {
  location.href = "login.html";
};

btn_start.onclick = function() {
  move_to_start();
};

btn_login.onclick = function() {
  move_to_login();
};
