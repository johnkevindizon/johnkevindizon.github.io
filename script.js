

let toggleNavStatus = false;

let toggleNav = function () {
   let getSidebar = document.querySelector(".nav-sidebar");
   let getSidebarUl = document.querySelector(".nav-sidebar ul");

   if (toggleNavStatus === false) {
      getSidebar.classList.add("open");
      getSidebarUl.style.visibility = "visible";
      toggleNavStatus = true;
   } else {
      getSidebar.classList.remove("open");
      getSidebarUl.style.visibility = "hidden";
      toggleNavStatus = false;
   }
}