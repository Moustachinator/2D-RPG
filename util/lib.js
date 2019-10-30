function overlap(x1, y1, w1, h1, x2, y2, w2, h2){
 return !(((x1 +w1 -1) < x2) || ((x2 +w2 -1) < x1) || ((y1 +h1 -1) < y2) || ((y2 +h2 -1) < y1));
};

function $(id){
 return document.getElementById(id)
};

function toggle(id){

 var el = $(id);
 el.style.display = el.style.display == ""? "none": "";
};

function rotate(){
 var player_center = {x: player_1_data.x+100/2, y: player_1_data.y+30/2};
 var theta = Math.atan2(event.pageX- player_center.x, (event.pageY- player_center.y))*(180/Math.PI);

 player_1_data.rotation = -theta;
};

function serialise(str){

 var array = [];

 for(var i=0; i<str.length; i++){
  array[i] = str[i];
 };

 return array;
};

function showSidePanel(){

 toggle('side-panel');
 if(document.body.style.overflow == 'hidden'){document.body.style.overflow = '';} else{document.body.style.overflow = 'hidden'};
};