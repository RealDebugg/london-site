//Ändra stilen av headern när du scrollar
window.onscroll = function() {onScrollFunction()};

var header = document.getElementById("myHeader");
var background = document.getElementById("hBG");
var tDiv = document.getElementById("myDivider");
var sticky = header.offsetTop;

function onScrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header-bg-scroll");
    tDiv.classList.add("hDivider-scroll");
  } else {
    header.classList.remove("header-bg-scroll");
    tDiv.classList.remove("hDivider-scroll");
  }
}

//Blockera right click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Kopierad kod, aktiverar laddnings skärmen
$('body').append('<div style="" id="loadingDiv"><div class="spinner"><div class="bar1"></div><div class="bar2"></div><div class="bar3"></div><div class="bar4"></div><div class="bar5"></div><div class="bar6"></div><div class="bar7"></div><div class="bar8"></div><div class="bar9"></div><div class="bar10"></div><div class="bar11"></div><div class="bar12"></div></div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
}

// Stoppa användare i firefox från att dra bilder till en ny flik
$(document).on("dragstart", function(e) {
     if (e.target.nodeName.toUpperCase() == "IMG") {
         return false;
     }
});

// Återställ formuläret när informationen skickas
function ResetForm() {
  $("#hotel").val("");
  $("#name").val("");
  $("#check-in").val("");
  $("#check-out").val("");
  $("#adults").val("1");
  $("#child").val("0");
}

function closeWinner() {
  ResetForm()
  $("#bg-page").fadeOut();
    setTimeout(function(){ 
      $("#i-got-ur-personal-info-mate").css("display", "none");
      $("#race-form-lmao").css("display", "block"); 
    }, 100);
}

// När du skickar formuläret, ändra layout
$("#race-form-lmao").submit(function( event ) {
  $("#race-form-lmao").fadeOut();
  event.preventDefault();
  setTimeout(function(){ $("#i-got-ur-personal-info-mate").fadeIn(); }, 500);
  ResetForm();
});


// ESC stänger vin resa menyn 
document.onkeyup = function (data) {
  if (data.which == 27) { // Escape key
    $("#bg-page").fadeOut();
    setTimeout(function(){ 
      $("#i-got-ur-personal-info-mate").css("display", "none");
      $("#race-form-lmao").css("display", "block"); 
    }, 100);
  }
};

// Ändra popup innehåll och öppna popupen, stänga formuläret om det är öppet
function CallDOCInfo(titleInfo, stringInfo) {
  $("#bg-page").css("display", "none");
  $("#bg-popup").fadeIn();
  document.getElementById("popup-title").innerHTML = titleInfo;
  document.getElementById("popup-desc").innerHTML = stringInfo;
}

// Stäng popup;en och återställ innehållet
function closePopup() {
  $("#bg-popup").fadeOut();
  document.getElementById("popup-title").innerHTML = "";
  document.getElementById("popup-desc").innerHTML = "";
}

// Get IE or Edge browser version
var version = detectIE();

function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    $("#page-loaded").css("display", "none");
    $("#browser-not-supported").css("display", "block");
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    $("#page-loaded").css("display", "none");
    $("#browser-not-supported").css("display", "block");
  }

  // other browser
  return false;
}

/* Använd "typed.js" för att animera titel texten*/
var typed = new Typed('.typed', {
  strings: ["Welcome to <br> London", "Welcome to <br> the best city ever", "Welcome to <br> a city full of life", "Welcome to <br> a city worth visiting", "Welcome to <br> a city with innovation", "Welcome to <br> a city for the riches", "Welcome to <br> London"],
  typeSpeed: 100,
  backSpeed: 70,
  showCursor: true
});