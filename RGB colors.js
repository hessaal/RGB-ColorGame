var numsqaure=6;
var colors=[];
var pickedColor;
var msg=document.querySelector("#msg");
var h1=document.querySelector("h1");
var colorDisply=document.getElementById("picked");
var reset = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");
var sqarues = document.querySelectorAll(".square");

setcolor(numsqaure);

for(var i= 0; i< modeButton.length; i++){
modeButton[i].addEventListener("click", function(){
	modeButton[0].classList.remove("selected");
	modeButton[1].classList.remove("selected");
	this.classList.add("selected");
	
	if (this.textContent==="Easy"){
		numsqaure=3;
	}
	else{
		numsqaure=6;
	}

setcolor(numsqaure);
});}

reset.addEventListener("click", function(){
	setcolor(numsqaure);
});

for(var i=0; i< sqarues.length; i++){
sqarues[i].addEventListener("click", function(){
	var clickedColor=this.style.backgroundColor;
if(clickedColor===pickedColor){
		msg.textContent="Correct"
		reset.textContent="Play Again?"
changeColor(pickedColor);
h1.style.backgroundColor=pickedColor;
}
else
{
	this.style.backgroundColor="#232323";
	msg.textContent="Try Again"
}
});}


function setcolor(num){
	colors = generateRandomColor(num);
    pickedColor=picColor();
    colorDisply.textContent = pickedColor;
for(var i=0; i< sqarues.length; i++){
	if (colors[i]){
		sqarues[i].style.display="block";
        sqarues[i].style.backgroundColor=colors[i];}
else 
{
	sqarues[i].style.display="none";
}
}
h1.style.backgroundColor="steelblue";
msg.textContent=""
reset.textContent="New Colors"
}

function changeColor(color){
for(var i=0; i< sqarues.length; i++){
sqarues[i].style.backgroundColor=color;}
}

function picColor (){
 	var ranNum=Math.floor(Math.random()*colors.length);

 	return colors[ranNum];
 }

function generateRandomColor(num){
	var colorsArr=[];

for (var i = 0; i < num ; i++) {
	colorsArr.push(randomColor());
}
	return colorsArr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}



