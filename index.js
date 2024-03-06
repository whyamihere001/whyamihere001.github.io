document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("myButton");

  function getRandomPosition() {
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxPosX = windowWidth - buttonWidth;
    const maxPosY = windowHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * maxPosX);
    const randomY = Math.floor(Math.random() * maxPosY);

    return { x: randomX, y: randomY };
  }

  button.addEventListener("click", function() {
    const randomPosition = getRandomPosition();
    button.style.left = randomPosition.x + "px";
    button.style.top = randomPosition.y + "px";
  });
});