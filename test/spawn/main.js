function init(){

 level = new Level();
 level.spawn();

 var cnvs = document.createElement("canvas");
 ctx = cnvs.getContext("2d");
 document.body.appendChild(cnvs);


 Keyboard.bind(Key.Up, ()=>{
  var entity = level.entities.data;
  entity.x += 5;
  ctx.fillRect(entity.x, entity.y, entity.width, entity.height);
 });

 //document.setInterval(level.update, 200);
};