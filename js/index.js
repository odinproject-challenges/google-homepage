function search() {
  var inputBox = document.getElementsByTagName("input");
  var url = 'https://www.google.com/?gws_rd=ssl#q=' + inputBox[0].value
  var win = window.open(url, '_blank');
  win.focus();
  var l = inputBox.length;
  for (var i = 0; i < l; ++i){
    inputBox[i].value="";
  }
}

function lucky() {
  var inputBox = document.getElementsByTagName("input");
  var url = 'http://dummyimage.com/600x400/000000/00ff00&text=Well+Do+ya%3F';
  var win = window.open(url, '_blank');
  win.focus();
  var l = inputBox.length;
  for (var i = 0; i < l; ++i){
    inputBox[i].value="";
  }
}