class Path{

 constructor(){};

 static name(path){
  return path.split('.')[0];
 };

 static ext(path){
  return /\.([0-9a-z]+)(?:[\?#]|$)/.exec(path)[0];
 };
};