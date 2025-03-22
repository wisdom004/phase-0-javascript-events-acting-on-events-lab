// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor="#000000";
dodger.style.backgroundColor="#FF69B4";
dodger.style.bottom="0px";
dodger.style.left="0px";

document.addEventListener("keydown", function(event){
    console.log(event);
});
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  });

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const gameWidth = 400;
  const dodgerWidth = 40;

  if (left < gameWidth - dodgerWidth) {
    dodger.style.left = `${left + 10}px`;
  }
  }
