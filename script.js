var hamburger = document.querySelector(".fa-bars");
var times = document.querySelector(".fa-times");
const showSideBar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
};
const hideSideBar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
};
hamburger.addEventListener("click", showSideBar);
times.addEventListener("click", hideSideBar);
