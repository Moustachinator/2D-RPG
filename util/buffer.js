class Buffer{

 constructor(data=0){

  this.data = new Uint8Array(data);
  this.offset = 0;
 };

 seek(offset=0){

  var oldPos = this.offset;
  this.offset = offset;

  return oldPos;
 };

 getUint8(){
  assert(this.offset < this.data.length);
  return this.data[this.offset++];
 };

 getUint16(){
  return (this.getUint8() << 8 |this.getUint8()) >>> 0;
 };

 getInt16(){

  var result = this.getUint16();
  if(result &0x8000) result -= (1 << 16);

  return result;
 };

 getUint32(){
  return this.getInt32() >>> 0;
 };

 getInt32(){
  return ((this.getUint8() << 24) |(this.getUint8() << 16) |(this.getUint8() <<  8) | (this.getUint8()));
 };

 getString(){

  var str = "";
  while((var chr = this.getUint8()) !== '\0') str += chr;

  return str;
 };

 getDate(){

  var maxTime = this.getUint32() *0x100000000 +this.getUint32();
  var utcTime = macTime *1000 +Date.UTC(1904, 1, 1);

  return new Date(utcTime);
 };

 compress(){

  var b, s, o = 0;

  for(var i=0; i<this.data.length; i++){

   var c = this.data[i];

   if(c == b){
     s++;
    } else{

        this.data.set(o, new Array(s).fill(b));

        o += s;
        s = 0;
        b = c;
       };
  };
 };

 decompress(){

  var s, o = 0;

  for(var i=0; i<this.data.length; i++){
   this.data.set(o, new Array(this.data[i *2]).fill((s = this.data[i *2 +1])));
   o += s;
  };
 };
};