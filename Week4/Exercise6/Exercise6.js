//function to update page heading upon clicking on the heading
function updatePageHeadingOnClick() {
  var element1 = document.getElementById("headingElement");
  element1.firstChild.nodeValue = "New Heading upon clicking the heading";
}

//function to update page heading upon mouse entering the heading
function updatePageHeadingOnMouseEnter() {
  var element1 = document.getElementById("headingElement");
  element1.firstChild.nodeValue = "New Heading upon mouse entering the heading";
}

//function to update page heading upon mouse exiting the heading
function updatePageHeadingOnMouseLeave() {
  var element1 = document.getElementById("headingElement");
  element1.firstChild.nodeValue = "Just a heading";
}

//function to update paragraph upon clicking on the paragraph
function updateParagraphOnClick() {
  var element2 = document.getElementById("paragraphElement");
  element2.firstChild.nodeValue =
    "New paragraph text upon clicking the paragraph";
}

//function to update paragraph upon mouse entering on the paragraph
function updateParagraphOnMouseEnter() {
  var element2 = document.getElementById("paragraphElement");
  element2.firstChild.nodeValue =
    "New paragraph text upon mouse entering the paragraph";
}

//function to update paragraph upon mouse exiting the paragraph
function updateParagraphOnMouseLeave() {
  var element2 = document.getElementById("paragraphElement");
  element2.firstChild.nodeValue = "Just a paragraph";
}

//function to be invoked upon loading the page
function loadPageFunction() {
  var element1 = document.getElementById("headingElement");
  element1.addEventListener("click", updatePageHeadingOnClick);
  element1.addEventListener("mouseenter", updatePageHeadingOnMouseEnter);
  element1.addEventListener("mouseleave", updatePageHeadingOnMouseLeave);

  var element2 = document.getElementById("paragraphElement");
  element2.addEventListener("click", updateParagraphOnClick);
  element2.addEventListener("mouseenter", updateParagraphOnMouseEnter);
  element2.addEventListener("mouseleave", updateParagraphOnMouseLeave);
}

document.addEventListener("DOMContentLoaded", loadPageFunction);
