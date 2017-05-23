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
  document.getElementById("showCD").innerHTML =
  "Artist: " +
  x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " +
  x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
  "<br><br><img src=res/" +
  x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue+">";
}
