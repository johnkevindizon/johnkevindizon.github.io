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



// SORTS THE SONGS ALPHABETICALLY
function sortSongListAlphabetically() {
  var songList = document.getElementById("Nsonglists");
  var songs = Array.from(songList.children);
  songs.sort(function (a, b) {
    var textA = a.textContent.trim().toLowerCase();
    var textB = b.textContent.trim().toLowerCase();
    return textA.localeCompare(textB);
  });

  songs.forEach(function (song) {
    songList.appendChild(song);
  });
}
sortSongListAlphabetically();



// UNIVERSAL SUBLINK
function initializeSublinkDropdown(toggleId, contentId) {
  var dropdownContent = document.getElementById(contentId);
  var dropdownToggle = document.getElementById(toggleId);

  dropdownToggle.addEventListener("click", function(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  dropdownContent.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  window.addEventListener("click", function(event) {
    if (!event.target.matches("#" + toggleId)) {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    }
  });
}
initializeSublinkDropdown("setlist-sublink-toggle1", "sublink-content1");
initializeSublinkDropdown("setlist-sublink-toggle2", "sublink-content2");
initializeSublinkDropdown("setlist-sublink-toggle3", "sublink-content3");
initializeSublinkDropdown("setlist-sublink-toggle4", "sublink-content4");
