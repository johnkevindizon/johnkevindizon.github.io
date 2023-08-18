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

function toggleDropdownSongs(){
  var dropdown1 = document.getElementById("song-list");
  var dropdown2 = document.getElementById("setlistsss");
  var active_1 = document.getElementById("dropdown-toggle");
  var active_2 = document.getElementById("activee4");
  
  // if (dropdown1.style.left ==="-100%") {
  //   dropdown1.style.left = "0";
  //   dropdown2.style.left = "-100%";
  // } else {
  //   dropdown1.style.left = "-100%";
  //   dropdown2.style.left = "-100%";
  // }

  if (active_1.style.color === "rgb(2, 247, 255)") {
    active_1.style.color = "white";
    active_2.style.color = "white";
    
  } else {
    active_1.style.color = "rgb(2, 247, 255)";
    active_2.style.color = "white";
    
  }
}
function toggleDropdownSets(){
  var dropdown3 = document.getElementById("setlistsss");
  var dropdown4 = document.getElementById("song-list");
  var active_3 = document.getElementById("activee4");
  var active_4 = document.getElementById("activee4");
    dropdown4.style.left = "-100%";

  if (dropdown3.style.left ==="-100%") {
    dropdown3.style.left = "0";
    dropdown4.style.left = "-100%";
  } else {
    dropdown3.style.left = "-100%";
    dropdown4.style.left = "-100%";
  }

  if (active_3.style.color === "white") {
    active_3.style.color = "rgb(2, 247, 255)";
  } else {
    active_3.style.color = "white";
  }
}



//DROPDOWN

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



//DROPDOWN

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
var dropdownLinks = dropdownContentSet.getElementsByTagName("a");
for (var i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].addEventListener("click", function() {
    dropdownContentSet.classList.remove("show");
  });
}


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
