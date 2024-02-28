function myLoadFunction() {
  var element = document.getElementById("pageheading");
  element.firstChild.nodeValue = "New Heading";
  var element = document.getElementById("paragraph");
  element.firstChild.nodeValue = "New paragraph text";
}
document.addEventListener("DOMContentLoaded", myLoadFunction);
