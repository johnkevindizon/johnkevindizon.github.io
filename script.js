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

let toggleABOUTStatus = false;

let toggleABOUT = function () {
   let getABOUT = document.querySelector(".about-sidebar");

   if (toggleABOUTStatus === false) {
      getABOUT.style.display = "block";
      toggleABOUTStatus = true;
   } else {
      getABOUT.style.display = "none";
      toggleABOUTStatus = false;
   }
}


let toggleSRBMStatus = false;

let toggleSRBM = function () {
   let getSRBM = document.querySelector(".srbm-sidebar");

   if (toggleSRBMStatus === false) {
      getSRBM.style.display = "block";
      toggleSRBMStatus = true;
   } else {
      getSRBM.style.display = "none";
      toggleSRBMStatus = false;
   }
}


let toggleGUITARStatus = false;

let toggleGUITAR = function () {
   let getGUITAR = document.querySelector(".guitar-sidebar");

   if (toggleGUITARStatus === false) {
      getGUITAR.style.display = "block";
      toggleGUITARStatus = true;
   } else {
      getGUITAR.style.display = "none";
      toggleGUITARStatus = false;
   }
}


// $(document).ready(function(){
//    $('.sub-btn').click(function(){
//       $(this).next('.sub-menu').slideToggle();
//    });
// });
