// var mobile_menu document.getElementById('menu-icon')
//
// mobile_menu.onclick =
//
// function showStuff(id) {
  //   mobile_menu.style.display = 'block';
  // }

  
  var menu_click = function (){

    var list_menu = document.getElementsByClassName("menu")[0];
      list_menu.classList.toggle("show");
  }

  var menu_button_click = document.getElementsByClassName("menu_button");

  menu_button_click.onclick = menu_click;