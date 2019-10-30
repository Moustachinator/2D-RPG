class List{

 constructor(size=1, id=0){

  this.l = 0;
  this.root = this;
  this.next = this;
  this.prev = this;
  this.data = null;

  //this.id = id == 0? this.length(): id;
this.id = this.length();
  for(var i=0; i<size; i++) this.push();
 };

 map(callback){};
 traverse(){};

 push(data){

  var node = this.root.prev;

  if(node.data !== null){
    if(this.length() < this.maxLength()){
      this.expand();
     } else return;
   };

  node.root = this.root;
  this.root.length++;

  node.reinsert(1);
 };

 length(){
  return this.root.l;
 };

 maxLength(){
  return this.root.maxLength;
 };

 expand(amount){

  for(var i=0; i<amount; i++){

   var node = new List(size);
   node.root = this.root;

   node.prev = this.root.prev;
   node.next = this.root.next;

   this.root.prev.next = node;
   this.root.prev = node;

   node.data = null;
  };
 };

 reinsert(index){

  var node = this.get(index);

  this.next = node.next;
  node.next = this;

  this.prev.next = this.next;
  this.next.prev = this.prev;

  this.prev = node;
 };

 get(index){

  var node = this;

  for(var i=0; i<index; i++){

   if(i == index) break;
   node = node.next;
  };

  return node;
 };

 remove(){

  this.prev.next = this.next;
  this.next.prev = this.prev;

  this.root.prev.next = this;
  this.prev = this.root.prev;

  this.root.prev = this;
  this.next = this.root;

  this.data = null;
 };
};