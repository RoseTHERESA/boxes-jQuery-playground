// Exercise 1
/*
$(function() {
  alert("Ready for DOM manipulation!");
});

$(document).ready(function() {
  alert("Ready for DOM manipulation!");
});
//*/

$(function() {

/* Exercise 2
1.
$("#secretBox").css("backgroundColor","white").css("color", "black").html("<h1>secret box</h1>");
2.
$("#row1 div").attr("class", "box boxType3");
or
$("#row1 div").removeClass("boxType1 boxType2 boxType3");
$("#row1 div").addClass("boxType3");
or
$("#row1 div").removeClass();
$("#row1 div").addClass("box boxType3");
3.
$("#row4 div:last").css("display", "none");
4.
$(".boxType1").css("backgroundColor", "white");
5.
$("#row2 div:lt(2)").removeClass();
6.
$("#container div").not(".row").not("#secretBox").width(2);
*/

/* Exercise 3
1.
$("#container").click(function(e) {  console.log(e.pageX, e.pageY) });
2.
$(".boxType1").html('<a href="http://www.galvanize.com">Galvanize!</a>');
$("a").click(function(e) {
   e.preventDefault();
   alert("You can never leave this page");
});
3.

$(".box").click(function(e) {
  var el = $(this);
  
  if (el.children().length >= 1) {
    el.html('');
  } else {
    el.html('<img src="http://www.mrwallpaper.com/wallpapers/Cute-Puppy-Kitten.jpg"></img>');
    el.children().width(150)
  }
});
4.
$("#container").click(function(e) {
   if (this === e.target) {
      $(e.target).css("backgroundColor", "rgb(128,255,0)");
   } else {
      $(this).css("backgroundColor","black");
      $(e.target).css("backgroundColor", "white");
   }
});
*/
});
