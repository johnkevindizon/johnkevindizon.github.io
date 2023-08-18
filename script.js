// SIDEBAR
$(document).ready(function(){
   $('.sub-btn').click(function(){
      $(this).next('.sub-menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
   });

   $('.menu-btn').click(function(){
      $('.side-bar').addClass('active');
      $('menu-btn').css("visibility", "hidden");
   });
   $('.close-btn').click(function(){
      $('.side-bar').removeClass('active');
      $('menu-btn').css("visibility", "visible");
   });
});



//DROPDOWN FOR SONGS
var dropdownContent = document.getElementById("dropdown-content-Songs");
var dropdownToggle = document.getElementById("dropdown-toggle-Songs");
dropdownToggle.addEventListener("click", function(event) {
  event.stopPropagation();
  dropdownContent.classList.toggle("show");
});
dropdownContent.addEventListener("click", function(event) {
  event.stopPropagation();
});
window.addEventListener("click", function(event) {
  if (!event.target.matches("#dropdown-toggle-Songs")) {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  }
});
// Add event listeners to links inside the dropdown
var dropdownLinks = dropdownContent.getElementsByTagName("a");
for (var i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].addEventListener("click", function() {
    dropdownContent.classList.remove("show");
  });
}



//ROTATION OF THE UP and DOWN ICON
$(document).ready(function(){
  $('.arrowRotate').click(function(){
    //  $(this).next('.sub-menu').slideToggle();
     $(this).find('.fa-caret-down').toggleClass('rotate2');
  });
});
$(document).ready(function(){
  $('.arrowRotate').click(function(){
    //  $(this).next('.sub-menu').slideToggle();
     $(this).find('.fa-caret-up').toggleClass('rotate3');
  });
});



// SEARCH BAR FOR SONGS
const searchInput = document.getElementById("searchSongsInput");
const itemList = document.getElementById("Nsonglists").getElementsByTagName("a");
searchInput.addEventListener("input", function() {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 0; i < itemList.length; i++) {
    const textContent = itemList[i].textContent.toLowerCase();

    // Check if the search term characters are found in the anchor tag's content
    if (textContent.includes(searchTerm)) {
      itemList[i].style.display = "block";
    } else {
      itemList[i].style.display = "none";
    }
  }
});



//DROPDOWN FOR SETLISTS
var dropdownContentSet = document.getElementById("dropdown-content-Setlists");
var dropdownToggleSet = document.getElementById("dropdown-toggle-Setlists");
dropdownToggleSet.addEventListener("click", function(event) {
  event.stopPropagation();
  dropdownContentSet.classList.toggle("show");
});
dropdownContentSet.addEventListener("click", function(event) {
  event.stopPropagation();
});
window.addEventListener("click", function(event) {
  if (!event.target.matches("#dropdown-toggle-Setlists")) {
    if (dropdownContentSet.classList.contains("show")) {
      dropdownContentSet.classList.remove("show");
    }
  }
});
// Add event listeners to links inside the dropdown
// var dropdownLinks = dropdownContentSet.getElementsByTagName("a");
// for (var i = 0; i < dropdownLinks.length; i++) {
//   dropdownLinks[i].addEventListener("click", function() {
//     dropdownContentSet.classList.remove("show");
//   });
// }


// SEARCH BAR FOR SETLISTS
const searchInputSet = document.getElementById("searchSetInput");
const itemListSet = document.getElementById("Nsetlists").getElementsByTagName("a");
searchInputSet.addEventListener("input", function() {
  const searchTerm = searchInputSet.value.toLowerCase();

  for (let i = 0; i < itemListSet.length; i++) {
    const textContent = itemListSet[i].textContent.toLowerCase();

    // Check if the search term characters are found in the anchor tag's content
    if (textContent.includes(searchTerm)) {
      itemListSet[i].style.display = "block";
    } else {
      itemListSet[i].style.display = "none";
    }
  }
});



//DROPDOWN FOR SUBLINK1
var SublinkdropdownContent1 = document.getElementById("sublink-content1");
var SublinkdropdownToggle1 = document.getElementById("setlist-sublink-toggle1");
SublinkdropdownToggle1.addEventListener("click", function(event) {
  event.stopPropagation();
  SublinkdropdownContent1.classList.toggle("show");
});
SublinkdropdownContent1.addEventListener("click", function(event) {
  event.stopPropagation();
});
window.addEventListener("click", function(event) {
  if (!event.target.matches("#setlist-sublink-toggle1")) {
    if (SublinkdropdownContent1.classList.contains("show")) {
      SublinkdropdownContent1.classList.remove("show");
    }
  }
});


//DROPDOWN FOR SUBLINK2
var SublinkdropdownContent2 = document.getElementById("sublink-content2");
var SublinkdropdownToggle2 = document.getElementById("setlist-sublink-toggle2");
SublinkdropdownToggle2.addEventListener("click", function(event) {
  event.stopPropagation();
  SublinkdropdownContent2.classList.toggle("show");
});
SublinkdropdownContent2.addEventListener("click", function(event) {
  event.stopPropagation();
});
window.addEventListener("click", function(event) {
  if (!event.target.matches("#setlist-sublink-toggle2")) {
    if (SublinkdropdownContent2.classList.contains("show")) {
      SublinkdropdownContent2.classList.remove("show");
    }
  }
});

