// document.querySelector('button').addEventListener("click",handleClick);
//
// function handleClick(){
// alert("I am Clicked");
// }

//Detects Mouse Press
for ( var i =0; i<(document.querySelectorAll(".drum").length ); i++)
{
		document.querySelectorAll('button')[i].addEventListener("click",function (){
		// var audio = new Audio('sounds/tom-1.mp3');
		// audio.play();
		var buttonInnerHTML = this.innerHTML; // this fetches clicked button inner HTML
    SwitchVerifier(buttonInnerHTML);
		ButtonAnimantion(buttonInnerHTML);
    });
}


// Detects Keyboard Press
document.addEventListener("keydown", function(event) {

// console.log(event);
// alert("key was pressed");

SwitchVerifier(event.key);
ButtonAnimantion(event.key);

});


// Single Switch Logic

function SwitchVerifier(DataInput){

	switch (DataInput) {
		case "w":
		var tom1 = new Audio('sounds/tom-1.mp3');
		tom1.play();
		break;
		case "a":
		var tom2 = new Audio('sounds/tom-2.mp3');
		tom2.play();
		break;
		case "s":
		var tom3 = new Audio('sounds/tom-3.mp3');
		tom3.play();
		break;
		case "d":
		var tom4 = new Audio('sounds/tom-4.mp3');
		tom4.play();
		break;
		case "j":
		var snare = new Audio('sounds/snare.mp3');
		snare.play();
		break;
		case "k":
		var crash = new Audio('sounds/crash.mp3');
		crash.play();
		break;
		case "l":
		var kick = new Audio('sounds/kick-bass.mp3');
		kick.play();
		break;
		default:console.log("Something went wrong!");

	}
}

//button animation

function ButtonAnimantion(buttonSent){
	var activeButton = document.querySelector("."+buttonSent); // concatinating to use class querySelector
	//now adding the css style .pressed to this button using
	activeButton.classList.add("pressed");
	//adding delay to remove effect
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},100);
}
