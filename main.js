music_left="";
music_right="";

function preload(){
 music_left=loadSound("Music_Left.mp3")
 music_right=loadSound("Music_Right.mp3")
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
}
function draw() {
	image(video ,0 ,0 ,600 ,500)
}
function play()
{
	
}

