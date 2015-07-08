// var title1 = document.getElementById('title1');
//
var handle_title_click = function (){
  var info_id=this.getAttribute("data-info");
  var info= document.getElementById(info_id);
  if (info.className== "info show"){
    info.className="info";
  }
  else {
    info.className = "info show";
  }
}
// title1.onclick=handle_title_click;

var titles = document.getElementsByClassName("title");

for (var i=0; i < titles.length; i++){
  titles[i].onclick=handle_title_click;
}
