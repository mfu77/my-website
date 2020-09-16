document.addEventListener("DOMContentLoaded",function(){
	this.forms[0].switch.addEventListener("change",function(){
		this.removeAttribute("class");
	});
});

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
	isPlaying ? myAudio.pause() : myAudio.play();
}

myAudio.onplaying = function() {
	isPlaying = true;
};
myAudio.onpause = function() {
	isPlaying = false;
};