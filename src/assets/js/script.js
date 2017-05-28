/* AJAX XML */
var x,xmlhttp,xmlDoc
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "Watch.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("WATCH");

function showDetail(i) {
  document.getElementById("title" + i).innerHTML = x[i-1].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue
  document.getElementById("detail" + i).innerHTML =
  "Size : " + x[i-1].getElementsByTagName("SIZE")[0].childNodes[0].nodeValue +
  "<br>Case Thickness : " + x[i-1].getElementsByTagName("CASETHICKNESS")[0].childNodes[0].nodeValue +
  "<br>Dial color : " + x[i-1].getElementsByTagName("DIALCOLOR")[0].childNodes[0].nodeValue +
  "<br>Movement : " + x[i-1].getElementsByTagName("MOVEMENT")[0].childNodes[0].nodeValue +
  "<br>Strap : " + x[i-1].getElementsByTagName("STRAP")[0].childNodes[0].nodeValue +
  "<br>Strap Width : " + x[i-1].getElementsByTagName("STRAPWIDTH")[0].childNodes[0].nodeValue +
  "<br>Strap Color : " + x[i-1].getElementsByTagName("STRAPCOLOR")[0].childNodes[0].nodeValue +
  "<br>Water Resistant : " + x[i-1].getElementsByTagName("WATERRESISTANT")[0].childNodes[0].nodeValue +
  "<br><br><img src='assets/img/" + x[i-1].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue + "' width='450'>";
}
