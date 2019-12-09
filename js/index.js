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
// resize event
const mapPic = document.querySelector('.img-content img');
window.addEventListener('resize', () => {
  mapPic.src = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
});
// key event
const bG = document.querySelector('html');
bG.addEventListener('keydown', (event) => {
    bG.style.backgroundColor = "red";
});
bG.addEventListener('keyup', (event) => {
    bG.style.backgroundColor = "white";
});