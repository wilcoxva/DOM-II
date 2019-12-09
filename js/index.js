// Your code goes here
// mouse events 
const busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseenter', (event) => {
  busImg.style.transform = "scale(.9)";
  busImg.style.transition = "all 0.3s";
});
busImg.addEventListener('mouseleave', (event) => {
  busImg.style.transform = "scale(1.0)";
  busImg.style.transition = "all 0.3s";
});
busImg.addEventListener('mousedown', (event) => {
    busImg.style.display = "none";
});
busImg.addEventListener('mouseup', (event) => {
    busImg.style.display = "block";
});
// resize event
const mapPic = document.querySelector('.img-content img');
window.addEventListener('resize', () => {
  mapPic.src = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
  event.stopPropagation();
});
// key event
const bG = document.querySelector('html');
bG.addEventListener('keydown', (event) => {
    bG.style.backgroundColor = "red";
});
bG.addEventListener('keyup', (event) => {
    bG.style.backgroundColor = "white";
});
// wheel & dblclick event
const middle = document.querySelector('.content-section');
middle.addEventListener('wheel', (event) => {
    middle.style.backgroundColor = "blue";
});
middle.addEventListener('dblclick', (event) => {
    middle.style.backgroundColor = "white";
});
// click event
const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('click', (event) => {
    funBus.style.fontSize = "7rem";
});
// preventing default
let links = document.querySelectorAll("nav a")
links.forEach(element => {
  element.addEventListener("click", function(event){
        event.preventDefault()
      })
});