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