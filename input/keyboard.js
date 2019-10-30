class InputDevice{

 constructor(onPress, onRelease, mapping){

  document.addEventListener(onPress, this.keyPress.bind(this));
  document.addEventListener(onRelease, this.keyRelease.bind(this));

  this.mapping = mapping;
  this.bindings = {};
 };

 bind(vk, onPress=()=>{}, onRelease=()=>{}){
  this.bindings[this.mapping[vk]] = new InputObject(onPress, onRelease);
 };

 isKey(vk){
  return this.getKey(vk).state;
 };

 getKey(vk){
  return this.bindings[this.mapping[vk]];
 };

 keyPress(e){

  var k = this.bindings[e.keyCode];

  if(!k) return;

  if(!k.state){
    k.state = 1;
    k.onPress();
   };
 };

 keyRelease(e){

  var k = this.bindings[e.keyCode];

  if(!k) return;

  k.state = 0;
  k.onRelease();
 };
};

class InputObject{

  constructor(onpress=null, onrelease=null){
 
   this.state = 0;
   this.value = 0;
   this.holdTime = 0;
 
   if(onpress) this.onPress = onpress.bind(this);
   if(onrelease) this.onRelease = onrelease.bind(this);
  };
 
  onPress(){};
  onHold(){};
  onRelease(){};
 };
 
InputObject.holdDelay = 1000;

var Keyboard = new InputDevice("keydown", "keyup", __DEFAULT_MAPPING_KEYBOARD);