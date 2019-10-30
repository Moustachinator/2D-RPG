class GameObject{

 constructor(){

  this.x = 0;
  this.y = 0;
  this.xf = 0;
  this.yf = 0;
  this.xF = 0;
  this.yF = 0;
  this.xv = 0;
  this.yv = 0;

  this.width = 20;
  this.height = 20;

  this.drawable = null;
  //this.animator = new Animator();
 };

 draw(){
  //ctx.drawImage(this.drawable.texture.imageData, this.animator.frame.x, this.animator.frame.y, this.animator.frame.width, this.animator.frame.height, this.x, this.y, this.drawble.width, this.drawable.height);
 };

 init(x, y, def){

  this.x = x;
  this.y = y;

  this.typeID = def.id;

  for(var k in def){

   var v = def[k];

   if(typeof(v) == "object"){
     this.merge(v);
    } else this[k] = v;
  };
 };

 update(){

  this.animator.update();
  this.drawable.drawData.push(this.animator.frame.x, this.animator.frame.y, this.animator.frame.width, this.animator.frame.height, this.x, this.y);

  this.move();
 };

 move(){

  this.xa = this.xf /this.mass;
  this.ya = this.yf /this.mass;

  this.xv += this.xa *this.xF;
  this.yv += this.ya *this.yF;

  this.x += this.xv;
  this.y += this.yv;
 };

 despawn(){
  this.entityNode.reinsert(-1);
 };

 lookAt(x, y){
  this.theta = -(Math.atan2(x- this.x +this.width /2, (y- this.y +this.height /2)) *(180 /Math.PI));
 };

 onCollisionEnter(entity){};
 onCollisionExit(entity){};
 onCollisionStay(entity){};
};
