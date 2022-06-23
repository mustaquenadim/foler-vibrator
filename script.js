const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

function vibrate () {
	window.navigator.vibrate([10000]);
	audio.play();
}