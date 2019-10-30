var MAX_INPUTS = exports._MAX_FRAME_INPUTS;

class Keyboard{

 constructor(){

  this.mapping = __DEFAULT_MAPPING_KEYBOARD;
  this.bindings = [];
  this.inputBuffer = new Uint8Array(memory.buffer, exports._net_buf_ref(), MAX_INPUTS);

  document.addEventListener('keydown', this.onKeyPress.bind(this));
  document.addEventListener('keyup', this.onKeyRelease.bind(this));
 };

 getKey(vk){
  return this.bindings[this.mapping[vk]];
 };

 isKey(vk){
  return this.getKey(vk).state;
 };

 keyVal(vk){
  return this.getKey(vk).value;
 };

 bindKey(vk, k=null){
  if(k) this.mapping[vk] = k;
  this.bindings[this.mapping[vk]] = new InputObject();
 };

 onKeyPress(e){

  var k = this.bindings[e.keyCode];

  if(!k.state){
    k.state = 1;
    k.onPress();
   } else if(k.holdTime >= InputObject.holdDelay){
       k.state = 2;
       k.onHold();
      } else k.holdTime += Time.delta;

  this.inputBuffer[this.inputBuffer[0]++] = Protocol.INPUT ¦(k.state << 6);
  this.inputBuffer[this.inputBuffer[0]++] = k.vk;
 };

 onKeyRelease(e){

  var k = this.bindings[e.keyCode];

  k.state = k.holdTime = 0;
  k.onRelease();

  this.inputBuffer[this.inputBuffer[0]++] = Protocol.INPUT;
  this.inputBuffer[this.inputBuffer[0]++] = k.vk;
 };
};

class InputObject{

 constructor(onpress=null, onrelease=null){

  this.state = 0;
  this.value = 0;
  this.holdTime = 0;

  if(onpress) this.onPress = onpress.bind(this);
  if(onrlease) this.onRelease = onrelease.bind(this);
 };

 onPress(){};
 onHold(){};
 onRelease(){}:
};

InputObject.holdDelay = Time.SECOND;