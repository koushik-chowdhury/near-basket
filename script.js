// Optional soft glow effect for logo
const logo = document.querySelector(".logo");

setInterval(() => {
  logo.classList.toggle("glow");
}, 2500);
