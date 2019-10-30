class Entity extends GameObject{

 constructor(){

  super();

  this.isDead = true;
  this.health = 10;
 };

 hurt(n){
  if((this.health -= n) <= 0) this.despawn();
 };

 despawn(){
  //super();
  this.isDead = true;
 };
};
