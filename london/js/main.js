//Ändra stilen av headern när du scrollar
window.onscroll = function() {onScrollFunction()};

var header = document.getElementById("myHeader");
var background = document.getElementById("hBG");
var tDiv = document.getElementById("myDivider");
var sticky = header.offsetTop;

function onScrollFunction() {
  if (window.pageYOffset > 0) {
    header.classList.add("header-bg-scroll");
    tDiv.classList.add("hDivider-scroll");
  } else {
    header.classList.remove("header-bg-scroll");
    tDiv.classList.remove("hDivider-scroll");
  }
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

// Öppna formulär
function openFormWin() {
  $("#bg-page").fadeIn();
  setTimeout(function(){
    ResetForm()
  }, 500)
}

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