const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "#F0EDD4";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "#181D31";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});

window.onload = function () {
  let bar = document.querySelectorAll(".bar");
  bar.forEach((progress) => {
    let value = progress.getAttribute("data-value");
    progress.style.width = `${value}%`;
    let count = 0;
    let progressAnimation = setInterval(() => {
      count++;
      progress.setAttribute("data-text", `${count}%`);
      if (count > value) {
        clearInterval(progressAnimation);
      }
    }, 25);
  });
};
