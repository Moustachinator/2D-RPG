class Token{

 static generate(){
  return ((Math.random() *0xffff) +(Math.random() *0xffff) +(Math.random() *0xffff) +(Math.random() *0x0fff |0x4000) +(Math.random() *0x3fff |0x8000) |(4 << (Math.random() *0xffff)) |(2 << (Math.random() *0xffff)) |(Math.random() *0xffff)).toString(16);
 };
};