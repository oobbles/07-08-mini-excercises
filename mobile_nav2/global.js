// var mobile_menu document.getElementById('menu-icon')
//
// mobile_menu.onclick =
//
// function showStuff(id) {
  //   mobile_menu.style.display = 'block';
  // }

  
  //var menu_click = 
  // var list = "";
  
  function menuCreate(){

    var list = document.getElementsByClassName("menu")[0];
    // list.classList.toggle("visible");
    if (is_visible === false){
      list.style.visibility = 'visible';
      is_visible = true;}
      else {
        list.style.visibility = 'hidden';
        is_visible = false; 
      }
    
      return false;
    }
    var is_visible = false
    
    // var menu_button_click = document.getElementsByClassName("menu_button");

    // menu_button_click.onclick = menuCreate();
  
    //menu_click;
  
    // var list_menu = document.getElementById("menu2");
    // //[0];
    //   list_menu.classList.toggle("visible");
    //   alert("Hi");
    //function menuCreate(){

    //var list = document.getElementsByClassName("menu")[0];
        // list.classList.toggle("visible");
        // var menu_button_click = document.getElementsByClassName("menu_button");

        // menu_button_click.onclick = menuCreate();
  