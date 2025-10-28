const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("close-btn");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
  sideMenu.classList.add("show");
  logo.classList.add("hide");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("show");
  logo.classList.remove("hide");
});
