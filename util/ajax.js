var KB = 1000;
var MB = KB *1000;
var GB = MB *1000;

class Ajax{

 constructor(){};

 static send(method, url, form_data, progress_bar){

  if(window.XMLHttpRequest){
    var xhttp = new XMLHttpRequest()
   } else{
       var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
      };

  xhttp.onreadystatechange = () => {
   if(xhttp.readyState == 4 && xhttp.status == 200) this.onreceive(JSON.parse(xhttp.responseText));
  }.bind(xhttp);

  xhttp.open(method, url);
  xhttp.send()

  return xhttp;
 };

 static sendFile(fileSelector){

  var form_data = new FormData();
  var file = fileSelector.files[0];

  if(file.size > 5 *MB) return;

  form_data.append('file_upload', file);

  return Ajax.send("post", "profile.php?action=edit&field=icon", form_data, $('icon-upload-progress-bar'));
 };
};
