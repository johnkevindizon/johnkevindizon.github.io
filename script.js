//  const toggleButton = document.getElementsByClassName('toggle-button')[0]
//  const navlinks = document.getElementsByClassName('links')[0]

//  toggleButton.addEventListener('click', () => {
//     navlinks.classList.toggle('active')
//  })


let toggleNavStatus = false;

let toggleNav = function () {
   let getSidebar = document.querySelector(".nav-sidebar");
   let getSidebarUl = document.querySelector(".nav-sidebar ul");
   let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");


      if (toggleNavStatus === false) {
         getSidebarUl.style.visibility = "visible";
         getSidebar.style.width = "120px";
         getSidebar.style.opacity = "1";
         getSidebar.style.background = "rgba(175, 174, 174, 0.2)";
         

         // let Arraylength = getSidebarLinks.Length;
         // for (let i = 0; i < array.length; i++) {
         //    getSidebarLinks[i].style.opacity = "1";
         // }
         toggleNavStatus = true;
      }
      else if (toggleNavStatus === true) {
       
         getSidebar.style.width = "0";
         getSidebar.style.opacity = "0";


         // let Arraylength = getSidebarLinks.Length;
         // for (let i = 0; i < array.length; i++) {
         //    getSidebarLinks[i].style.opacity = "0";
         // }
         
         getSidebarUl.style.visibility = "hidden";
         toggleNavStatus = false;
      }
}