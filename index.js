var menubtn = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menubtn.addEventListener("click", function(){
    menu.classList.toggle("hidden");
});