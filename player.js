class Player extends GameObject{

 constructor(){

  super();

  this.inputDevice = Keyboard;
 };

 update(){

  var xv, yv = 0;

  if(this.inputDevice.isKey(Key.Up)){
    yv = 2;
   } else if(this.inputDevice.isKey(Key.Down)) yv = -2;

  if(this.inputDevice.isKey(Key.Right)){
    xv = 2;
   } else if(this.inputDevice.isKey(Key.Left)) xv = -2;

  this.applyForce(xv, yv);

  super();
 };
};
