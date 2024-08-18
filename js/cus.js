document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".btn i");
    const navbarTogglerButton = document.querySelector(".btn");
    const navbarContent = document.getElementById("navbarContent");
  
    navbarTogglerButton.addEventListener("click", function () {
      if (navbarContent.classList.contains("show")) {
        toggler.classList.remove("fa-times");
        toggler.classList.add("fa-bars");
      } else {
        toggler.classList.remove("fa-bars");
        toggler.classList.add("fa-times");
      }
    });
  
    navbarContent.addEventListener("hidden.bs.collapse", function () {
      toggler.classList.remove("fa-times");
      toggler.classList.add("fa-bars");
    });
  
    navbarContent.addEventListener("shown.bs.collapse", function () {
      toggler.classList.remove("fa-bars");
      toggler.classList.add("fa-times");
    });
  });
  