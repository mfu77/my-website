document.addEventListener("DOMContentLoaded",function(){
	this.forms[0].switch.addEventListener("change",function(){
		this.removeAttribute("class");
	});
});

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 