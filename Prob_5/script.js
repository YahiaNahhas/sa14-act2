const animatedDiv = document.getElementById('animatedDiv');
const animateButton = document.getElementById('animateButton');
let isMoving = false;

animateButton.addEventListener('click', function() {
  if (!isMoving) {
    isMoving = true;
    animatedDiv.style.transition = 'transform 0.5s ease-in-out';
    animatedDiv.style.transform = 'translateX(300px)';
  } else {
    isMoving = false;
    animatedDiv.style.transition = 'transform 0.5s ease-in-out';
    animatedDiv.style.transform = 'translateX(0)';
  }
});
