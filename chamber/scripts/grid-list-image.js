const listButton = document.getElementsByClassName("listButton");
const gridButton = document.getElementsByClassName("gridButton");

const listIcon = document.getElementsByClassName("list-icon");
const gridIcon = document.getElementsByClassName("grid-icon");


const normalListSrc = "images/list-icon.webp";
const normalGridSrc = "images/grid-icon.webp";

const hoverListSrc = "images/list-icon-highlight.webp";
const hoverGridSrc = "images/grid-icon-highlight.webp";


listButton.addEventListener("mouseenter", function() {
  listIcon.src = hoverListSrc;
});
gridButton.addEventListener("mouseenter", function() {
    gridIcon.src = hoverGridSrc;
  });

listButton.addEventListener("mouseleave", function() {
  listIcon.src = normalListSrc;
});
gridButton.addEventListener("mouseleave", function() {
    gridIcon.src = normalGridSrc;
  });