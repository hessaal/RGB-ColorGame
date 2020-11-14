var numofrows = 2;
var colors = [];
var pickedColor;
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var colorDisply = document.getElementById("picked");
var reset = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");
var sqarues = [];

start(numofrows);

for(var i= 0; i< modeButton.length; i++){
modeButton[i].addEventListener("click", function(){
	modeButton[0].classList.remove("selected");
	modeButton[1].classList.remove("selected");
	modeButton[2].classList.remove("selected");
	this.classList.add("selected");
	if (this.textContent === "Easy"){
		numofrows = 1;
	}
	else if (this.textContent === "Medium"){
		numofrows = 2;
	}
	else{
		numofrows = 3;
	}
start(numofrows);
});
}


reset.addEventListener("click", function(){
	start(numofrows);
});

document.addEventListener("click", function(event){
	if (event.target.tagName === "TD"){
	var clickedColor = event.target.style.backgroundColor;
    if(clickedColor === pickedColor){
		msg.textContent = "Correct";
		msg.classList.add("bigger");
		reset.textContent = "Play Again?";
    changeColor(pickedColor);
    h1.style.backgroundColor = pickedColor;
    h2.style.backgroundColor = pickedColor;
}
    else{
	event.target.style.backgroundColor="#232323";
	msg.textContent = "Try Again"
}}
});


function start(numofrows){
colors = generateRandomColor(numofrows*3);
pickedColor = colors[random (colors.length)];
colorDisply.textContent = pickedColor;
createsquers(numofrows);
setcolor();
h1.style.backgroundColor = "steelblue";
h2.style.backgroundColor = "steelblue";
msg.textContent = ""
msg.classList.remove("bigger");
reset.textContent = "New Colors"
}


function createsquers(numofrows){
	document.getElementById("table").innerHTML="";
	sqarues=[];
	for (i=0;i<numofrows;i++){;
	  row = document.createElement("tr");
	  for (j=0;j<3;j++){
	  square = document.createElement("td");
	  sqarues.push(square);
	  row.appendChild(square);
	}
    document.getElementById("table").appendChild(row);
}
}

 function setcolor(){
for(var i=0; i< sqarues.length; i++){
        sqarues[i].style.backgroundColor = colors[i];
    }
}

function generateRandomColor(num){
	var colorsArr=[];

for (var i = 0; i < num ; i++) {
	colorsArr.push(randomColor());
}
	return colorsArr;
}

function randomColor(){
	var r = random (256);
	var g = random (256);
	var b = random (256);
	return "rgb("+r+", "+g+", "+b+")";
}

function random (max){
 	var ranNum=Math.floor(Math.random()*max);
 	return ranNum;
 }

function changeColor(color){
for(var i=0; i< sqarues.length; i++){
sqarues[i].style.backgroundColor=color;}
}