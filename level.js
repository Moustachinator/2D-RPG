class Level{

 constructor(){

  this.entities = new List(10);
 };

 update(){
  this.entities.map((entity)=>{entity.update();});
 };

 spawn(x=0, y=0, id=0){

  if(this.entities.length == this.MAX_ENTITIES){
    console.log("Max Entities Reached!");
    return;
   };

  var node = this.entities.prev;
  var entity = node.data;
  if(entity == undefined) entity = node.data = new Entity();

  if(!entity.isDead) return;

  var def = Registry.entity[id];
  entity.init(x, y, def);

  node.reinsert(1);
 };
};