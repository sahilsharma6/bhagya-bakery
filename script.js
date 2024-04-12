const menuBar = document.querySelector(".menu-bar");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");

console.log(6);
menuBar.addEventListener("click", () => {
  console.log("clicked");
  menuBar.classList.toggle("cm");

  nav.classList.toggle("cn");
});
