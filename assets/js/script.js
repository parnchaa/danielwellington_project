var x,xmlhttp,xmlDoc
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "Watch.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("WATCH");

function showDetail(i) {
  document.getElementById("title" + i).innerHTML = x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue
  document.getElementById("detail" + i).innerHTML =
  "Size : " + x[i].getElementsByTagName("SIZE")[0].childNodes[0].nodeValue +
  "<br>Case Thickness : " + x[i].getElementsByTagName("CASETHICKNESS")[0].childNodes[0].nodeValue +
  "<br>Dial color : " + x[i].getElementsByTagName("DIALCOLOR")[0].childNodes[0].nodeValue +
  "<br>Movement : " + x[i].getElementsByTagName("MOVEMENT")[0].childNodes[0].nodeValue +
  "<br>Strap : " + x[i].getElementsByTagName("STRAP")[0].childNodes[0].nodeValue +
  "<br>Strap Width : " + x[i].getElementsByTagName("STRAPWIDTH")[0].childNodes[0].nodeValue +
  "<br>Strap Color : " + x[i].getElementsByTagName("STRAPCOLOR")[0].childNodes[0].nodeValue +
  "<br>Water Resistant : " + x[i].getElementsByTagName("WATERRESISTANT")[0].childNodes[0].nodeValue
  // "<br><br><img src=assets/img" +
  // x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue+">";
}
