var firstp = document.querySelector(".one");
var secondp = document.querySelector(".two");
var thirdp = document.querySelector(".three");
var fourthp = document.querySelector(".four");
var fifthp = document.querySelector(".five");
var sixthp = document.querySelector(".six");
var seventhp = document.querySelector(".seven");
var eighthp = document.querySelector(".eight");
var ninethp = document.querySelector(".nine");
var tenthp = document.querySelector(".ten");
var eleventhp = document.querySelector(".eleven");
var twelvthp = document.querySelector(".twelve");
var thirteenthp = document.querySelector(".thirteen");
var fourteenthp = document.querySelector(".fourteen");
var fifteenthp = document.querySelector(".fifteen");
var sixteenthp = document.querySelector(".sixteen");
var seventeenthp = document.querySelector(".seventeen");
var eighteenthp = document.querySelector(".eighteen");
var tiles = document.querySelector(".tiles");

var logobutton = document.getElementById("logobutton");
var helpbuttons = document.getElementsByClassName("helpbutton");
var firstbutton = helpbuttons[2];
var secondbutton = helpbuttons[3];
var thirdbutton = helpbuttons[4];
var fourthbutton = helpbuttons[5];
var fifthbutton = helpbuttons[6];
var sixthbutton = helpbuttons[7];
var seventhbutton = helpbuttons[8];
var eighthbutton = helpbuttons[12];
var ninethbutton = helpbuttons[13];
var tenthbutton = helpbuttons[14];
var eleventhbutton = helpbuttons[15];
var twelvthbutton = helpbuttons[16];
var thirteenthbutton = helpbuttons[17];
var fourteenthbutton = helpbuttons[20];
var fifteenthbutton = helpbuttons[21];
var sixteenthbutton = helpbuttons[22];
var seventeenthbutton = helpbuttons[23];
var eighteenthbutton = helpbuttons[24];
var html = document.body;

function toggle(button, img) {
  html.addEventListener("click", function (event) {
    if (button.contains(event.target)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
  // ting.style.display = "block";
  // console.log('click')
}

// window.addEventListener('click', function() {
//   if (ting.style.display = "block");{
//     ting.style.display='none'
//   }
// })
