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

$(document).ready(function(){
  $('.sub-btn').click(function(){
     $(this).next('.sub-menu').slideToggle();
     $(this).find('.dropdown').toggleClass('rotate');
  });

  $('.menu-btn').click(function(){
     $('.left-bar').addClass('active');
     $('menu-btn').css("visibility", "hidden");
  });
  $('.close-btn').click(function(){
     $('.left-bar').removeClass('active');
     $('menu-btn').css("visibility", "visible");
  });
});


function sortSongs() {
  var sortSelect = document.getElementById('sort-select');
  var selectedOption = sortSelect.value;

  var songList = document.getElementById('song-list');
  var songs = Array.from(songList.getElementsByClassName('song'));

  if (selectedOption === 'alphabetical') {
    songs.sort(function(a, b) {
      var titleA = a.innerText.toUpperCase();
      var titleB = b.innerText.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  } else if (selectedOption === 'joyful') {
    songs.sort(function(a, b) {
      var classA = a.classList.contains('joyful') ? 1 : 0;
      var classB = b.classList.contains('joyful') ? 1 : 0;
      return classB - classA;
    });
  } else if (selectedOption === 'solemn') {
    songs.sort(function(a, b) {
      var classA = a.classList.contains('solemn') ? 1 : 0;
      var classB = b.classList.contains('solemn') ? 1 : 0;
      return classB - classA;
    });
  } else if (selectedOption === 'christmas') {
    songs.sort(function(a, b) {
      var classA = a.classList.contains('christmas') ? 1 : 0;
      var classB = b.classList.contains('christmas') ? 1 : 0;
      return classB - classA;
    });
  } else if (selectedOption === 'filipino') {
    songs.sort(function(a, b) {
      var classA = a.classList.contains('filipino') ? 1 : 0;
      var classB = b.classList.contains('filipino') ? 1 : 0;
      return classB - classA;
    });
  } else if (selectedOption === 'english') {
    songs.sort(function(a, b) {
      var classA = a.classList.contains('english') ? 1 : 0;
      var classB = b.classList.contains('english') ? 1 : 0;
      return classB - classA;
    });
  } else if (selectedOption === 'hillsong') {
    songs.sort(function(a, b) {
      var classA = a.classList.contains('hillsong') ? 1 : 0;
      var classB = b.classList.contains('hillsong') ? 1 : 0;
      return classB - classA;
    });
  } else if (selectedOption === 'musikatha') {
    songs.sort(function(a, b) {
      var classA = a.classList.contains('musikatha') ? 1 : 0;
      var classB = b.classList.contains('musikatha') ? 1 : 0;
      return classB - classA;
    });
  } else if (selectedOption === 'donmoen') {
    songs.sort(function(a, b) {
      var classA = a.classList.contains('donmoen') ? 1 : 0;
      var classB = b.classList.contains('donmoen') ? 1 : 0;
      return classB - classA;
    });
  } else if (selectedOption === 'philwickham') {
    songs.sort(function(a, b) {
      var classA = a.classList.contains('philwickham') ? 1 : 0;
      var classB = b.classList.contains('philwickham') ? 1 : 0;
      return classB - classA;
    });
  } else if (selectedOption === 'planetshakers') {
    songs.sort(function(a, b) {
      var classA = a.classList.contains('planetshakers') ? 1 : 0;
      var classB = b.classList.contains('planetshakers') ? 1 : 0;
      return classB - classA;
    });
  }

  while (songList.firstChild) {
    songList.removeChild(songList.firstChild);
  }

  songs.forEach(function(song) {
    songList.appendChild(song);
  });
}

sortSongs();
