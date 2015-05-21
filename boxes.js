console.log("fuck you, shithead!");

/*
1. Find the secretBox on the page. 
Set the background color to white. 
Add an h1 tag that says, "secret box!"

1. Find all child divs of the first row. 
Set the class for each div to boxType3.
Child Selector (“parent > child”)

3. Make the last box in the last row disappear. 
(Hint, look into the dispaly style. 
Also, you should only get back one element 
from your selector.).
:last-child Selector

4. Change all red boxes to white.

5. Get the first two divs in the second row. 
Take away all styling from the divs.

6. Get all divs inside the container that are 
not row divs and are not the secret box div. 
Set the width of the divs to 2 pixels.
*/

$( "#secretBox" ).css("backgroundColor", "white");
//$( "#secretBox" ).append("secret box!");
$("#secretBox").css("background-color","white").html("<h1>secret box</h1>").css("color","black");
$( "#secretBox" ).css("color", "black");

$("#row1 div").removeClass("boxType1 boxType2 boxType3").addClass("boxType3");

$("#row4 div:last").hide();

$(".boxType1").css("backgroundColor", "white");

$("#row2 div:lt(2)").removeClass();

$("#container div").not(".row").not("#secretBox").width(2);

/*
1. Add an on click handler to the container div. 
Console log the x and y position of the click.

2. Add links inside all red box divs that take 
the user to galvanize. Then add an on click 
handler that alerts the user that you can never 
eave the page. Make sure the user won't leave 
the page after the alert!

3. For all box divs, add a click handler that adds 
an image of a cute puppy to the box. If the 
image is clicked again, remove the cute puppy.

4. Write a click handler on the conatainer div. 
The click handler should turn the container 
background to black and the background of the 
original div that was clicked to white. If the 
user original div that was clicked happened to 
be the container div, change the background of 
the container div to lime green. You should not 
use any selectors for this exercise. You can do 
it completely with what is given to you in the 
event callback.
*/

$("#container").cick(function(e) {
	console.log("X: " + e.pageX + " Y: " + e.pageY);
});

$("#row1 div").html"<a href='http://www.galvanize.com'>";
$("a").click(fucntion(event) {
	event.preventDefault();
	alert("You cannot leave!");
});

$(".box").click(function(e) {
	var el = $(this);
	if (el.children().length >= 1)
	{
		el.html('');
	} else {
		el.html('<img src= "http://images4.fanpop.com/image/photos/18700000/A-Gorgeous-Greyhound-Puppy-for-Sarah-sarahplove-18778098-338-465.jpg"></img>');
		el.children().width(150)
	};
});

$('#container').click(function(event){
	if(event.targe.id === 'container')
		$(this).css('backgroundColor', 'limegreen');
	else{
		$(this).css('backgroundColor', 'black');
		event.target.style.backgroundColor='white';
	}
});





