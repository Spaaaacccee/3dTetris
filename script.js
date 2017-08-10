window.addEventListener('load', function(e) {
window.onstair = false;
window.orient = 0;
window.facing = "down";
window.called = false;
window.moveFinish = true;
menu();
});

function menu() {
	var group = document.createElement("div");
	group.id="group";
	var title = document.createElement("h1");
	title.innerHTML = "Cloud NINE";
	group.appendChild(title);
	var subtitle = document.createElement("h2");
	subtitle.innerHTML = "Version 0.000000000000134723 or whatever";
	group.appendChild(subtitle);
	var startbutton = document.createElement("button");
	startbutton.id = "startbutton";
	startbutton.innerHTML = "PLAY";
	startbutton.addEventListener("click",function(){init();document.querySelector("body").removeChild(group)});
	group.appendChild(startbutton);
	document.querySelector("body").appendChild(group);
}

function init() {
	blocks.createButtons();
	var body = document.querySelector("body");
			body.setAttribute("onkeydown","controls.keydownhandler(event)");
		body	.setAttribute("onkeyup","controls.keyuphandler(event)");
//functions
	level.parse("level0")
	character.gen(1,0)
for(i = 0;i < 64;i++) {var canvas = document.getElementById("canvas");

var block = document.createElement("div");
block.className = "block";
block.id = "block" + i;
block.innerHTML = i;
canvas.appendChild(block);

	//test world
	
	
};

}

var controls = {
	keydownhandler: function(e) {
		var unicode=e.keyCode? e.keyCode : e.charCode; // variable unicode contains key pressed
		console.log(unicode);
		switch(unicode) {
			case 37:
				controls.onPress("left");
				break;
			case 38:
				controls.onPress("up");
				break;
			case 39:
				controls.onPress("right");
				break;
			case 40:
				controls.onPress("down");
				break;
		}
	},
	keyuphandler: function(e) {
		var unicode=e.keyCode? e.keyCode : e.charCode; // variable unicode contains key pressed
		
		switch(unicode) {
			case 37:
				controls.onRelease("left");
				break;
			case 38:
				controls.onRelease("up");
				break;
			case 39:
				controls.onRelease("right");
				break;
			case 40:
				controls.onRelease("down");
				break;
		}
	},
	onPress: function(name) {
		if(window.moveFinish) {
		window.controls.loop = name;
		character.move(name);}
		var cube = document.querySelector("#controls > .cube" + name);
		console.log("cube" + name);
		if(cube.style.transform.length < 23) {
		cube.style.transform = cube.style.transform + " translateZ(-2vmin)"
		}
		
	},
	onRelease: function(name) {
		window.moveFinish = false;
		window.controls.loop = false;
		setTimeout(function(){window.moveFinish = true;},300);
		var cube = document.querySelector("#controls > .cube" + name);
		cube.style.transform = cube.style.transform.replace(/( ..........\(.*\))/,'');
	},
	checkLoop: function(direction) {
		if(window.controls.loop) {
			window.character.move(direction);
		}
		else {
			return;
		}
	},
};


var character = {
	gen:function(X,Y) {
		var canvas = document.querySelector("#canvas");
	var character = document.createElement("div");
		var face1 = document.createElement("div");
		var ZBlocks = document.getElementsByClassName("cube" + X + Y).length;
	var Z = ZBlocks * 10;
	character.className = "character";
		character.style.transform = "translateY(" + 10 * Y + "vmin)" + "translateX(" + 10 * X + "vmin)" + "translateZ(" + Z + "vmin)";
	canvas.insertBefore(character,canvas.childNodes[0]);
		face1.className = "face1";
	character.appendChild(face1);
},
	move:function(dir) {
		var character = document.querySelector(".character");
		if(!window.moveFinish) {window.controls.checkLoop(dir)} else {
			window.moveFinish = false;
		switch(dir) {
			case "up":
				
				//facing manager
				switch(window.facing) {
					case "up":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient+0)+"0deg)"
				orient = orient + 0;
						break;
					case "down":
					character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient+18)+"0deg)"
				orient = orient + 18;
						break;
					case "left":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient-9)+"0deg)"
				orient = orient - 9;
						break;
					case "right":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient+9)+"0deg)"
				orient = orient + 9;
						break;
				};
				window.character.logic("up");
				break;
			case "down":
				switch(window.facing) {
					case "up":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient-18)+"0deg)"
				orient = orient - 18;
						break;
					case "down":
					character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient+0)+"0deg)"
				orient = orient + 0;
						break;
					case "left":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient+9)+"0deg)"
				orient = orient + 9;
						break;
					case "right":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient-9)+"0deg)"
				orient = orient - 9;
						break;
				};
				window.character.logic("down");
				break;
				
			case "left":
				
						
				//facing manager
				switch(window.facing) {
					case "up":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient+9)+"0deg)"
				orient = orient + 9;
						break;
					case "down":
					character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient-9)+"0deg)"
				orient = orient - 9;
						break;
					case "left":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient-0)+"0deg)"
				orient = orient - 0;
						break;
					case "right":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient+18)+"0deg)"
				orient = orient + 18;
						break;
				};
				window.character.logic("left");
				break;
			case "right":
				
						
					switch(window.facing) {
					case "up":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient-9)+"0deg)"
				orient = orient - 9;
						break;
					case "down":
					character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient+9)+"0deg)"
				orient = orient + 9;
						break;
					case "left":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient-18)+"0deg)"
				orient = orient - 18;
						break;
					case "right":
						character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient+0)+"0deg)"
				orient = orient + 0	;
					
							break;
				};
					window.character.logic("right");
				break;
				
		};
		}
		
	},
	
	logic: function (direction) {
window.moveFinish = false;
		var character = document.querySelector(".character");
				var transformValue = character.style.transform;
				var values = transformValue.split(/[()]+/);
				console.log(values);
				var XPos = Number(values[3].substring(0,1));
				var YPos = Number(values[1].substring(0,1));
				var ZPos = Number(values[5].substring(0,1));
		
		function movement(Z) {
			
			switch(direction) {
			
			case "left":				
				var movement = "translateY("+(YPos)+"0vmin) translateX("+(XPos-1)+"0vmin) translateZ("+((ZPos*10)+Z)+"vmin)";
		break;
			case "up":
				var movement = "translateY("+(YPos-1)+"0vmin) translateX("+(XPos)+"0vmin) translateZ("+((ZPos*10)+Z)+"vmin)";
		break;
			case "down":
				var movement = "translateY("+(YPos+1)+"0vmin) translateX("+(XPos)+"0vmin) translateZ("+((ZPos*10)+Z)+"vmin)";
		break;
			case "right":
				var movement = "translateY("+(YPos)+"0vmin) translateX("+(XPos+1)+"0vmin) translateZ("+((ZPos*10)+Z)+"vmin)";
		break;
		
		}
			character.style.transform = movement;
			window.character.closeDoor();
		};
		
		switch(direction) {
			
			case "left":				
				var nextBlock1 = document.getElementsByClassName("cube" + (XPos - 1) + YPos)[ZPos + 1];
				var nextBlock = document.getElementsByClassName("cube" + (XPos - 1) + YPos)[ZPos];
				var ZBlocks = document.getElementsByClassName("cube" + (XPos - 1) + YPos).length;
		break;
			case "up":
				var nextBlock1 = document.getElementsByClassName("cube" + (XPos - 0) + (YPos-1))[ZPos + 1];
				var nextBlock = document.getElementsByClassName("cube" + (XPos - 0) + (YPos-1))[ZPos];
				var ZBlocks = document.getElementsByClassName("cube" + (XPos - 0) + (YPos-1)).length;
		break;
			case "down":
				var nextBlock1 = document.getElementsByClassName("cube" + (XPos - 0) + (YPos+1))[ZPos + 1];
				var nextBlock = document.getElementsByClassName("cube" + (XPos - 0) + (YPos+1))[ZPos];
				var ZBlocks = document.getElementsByClassName("cube" + (XPos - 0) + (YPos+1)).length;
		break;
			case "right":
				var nextBlock1 = document.getElementsByClassName("cube" + (XPos + 1) + YPos)[ZPos + 1];
				var nextBlock0 = document.getElementsByClassName("cube" + (XPos + 1) + YPos)[ZPos - 1];
				var ZBlocks = document.getElementsByClassName("cube" + (XPos + 1) + (YPos+0)).length;
				
		break;
		
		}
		window.facing = direction;
		if(onstair && nextBlock1 && nextBlock1.firstChild == "stairtop1") {
					//test if next block is also a stair
						movement(10);
						onstair = true;
				}

				else if(onstair && nextBlock) {
					//test if there is a block next while on stair
					movement(10);
				}
				
				else if (nextBlock && nextBlock.firstChild.className == "stairtop1") {
					//test if it is stair block
					//if it is move to half block
					movement(6.67);
					//set onstair to true
					onstair = true
					}
				
				else if (nextBlock0 && nextBlock0.firstChild.className == "stairtop1") {
					movement(-3.33);
					onstair = true
				}
				else if (ZBlocks == ZPos) {
					movement(0);
					onstair = false;
					
				} 
				else if(nextBlock && nextBlock.firstChild.className == "teleportertop") {
					setTimeout(function(){movement(0);},300)
					nextBlock.childNodes[3].className = "teleporterdooropen";
					setTimeout(function(){nextBlock.childNodes[3].className = "teleporterdoor";},600)
						setTimeout(function(){window.character.teleport(nextBlock.id)},1200)
					}
				else if (false) {
					//test for valid block in impossible space;
					}
				else {
					return false;
				};
				
				window.moveFinish = false;
		//actually finishes execution
	setTimeout(function() {
		window.moveFinish = true;
		controls.checkLoop(direction);},

				610)
	return;
	},
	
	teleport:function(origin) {
		//origin would be like"t1-t2"
		var aimid = origin.substring(3,5);
		var originid = origin.substring(0,2);
		var aim = document.getElementById(aimid + "-" + originid);
		var transformValue = aim.style.transform;
				var values = transformValue.split(/[()]+/);
				console.log(values);
				var XPos = Number(values[3].substring(0,1));
				var YPos = Number(values[1].substring(0,1));
				var ZPos = Number(values[5].substring(0,1));
		var character = document.querySelector(".character");
		character.firstChild.style.transform = "rotateX(-90deg) translateY(-7.5vmin) translateZ(-2.5vmin) rotateY("+(orient+18)+"0deg)"
				orient = orient + 18;
		window.facing = "right";
character.style.transition = "transform 0s linear"
		character.style.transform = "translateY("+(YPos)+"0vmin) translateX("+(XPos)+"0vmin) translateZ("+ZPos+"0vmin)";
		setTimeout(function(){character.style.transition = "transform 0.6s linear"} ,10);
		aim.childNodes[3].className = "teleporterdooropen";
		window.lastDoor = aim;
	},
	closeDoor: function() {
		if(window.lastDoor) {
		var door = window.lastDoor;
		setTimeout(function(){door.childNodes[3].className = "teleporterdoor";},600)}
	}
	
};

var blocks = {
teleporter:function(X,Y,id) {
	var canvas = document.querySelector("#canvas");
	//find number of blocks of the coordinate
var ZBlocks = document.getElementsByClassName("cube" + X + Y).length;
	var Z = ZBlocks * 10;
		
var cube = document.createElement("div");
cube.className = "cube" + X + Y;

var left = document.createElement("div");
left.className = "teleporterleft";

var right = document.createElement("div");
right.className = "teleporterright";


var top = document.createElement("div");
top.className = "teleportertop";
	
var door = document.createElement("div");
door.className = "teleporterdoor";
cube.id = id;
	canvas.appendChild(cube);
cube.appendChild(top);
cube.appendChild(left);
cube.appendChild(right);
cube.appendChild(door);
cube.style.transform = "translateY(" + 10 * Y + "vmin)" + "translateX(" + 10 * X + "vmin)" + "translateZ(90vmin)";
	setTimeout(function() {
	cube.style.transform = "translateY(" + 10 * Y + "vmin)" + "translateX(" + 10 * X + "vmin)" + "translateZ(" + Z + "vmin)";
},10)
	return cube;
},
createButtons:function() {
	
	var controls = document.createElement("div");
	controls.id = "controls";
	document.querySelector("body").appendChild(controls);
	
	function createButton(name) {
		
var canvas = document.querySelector("#controls");

var cube = document.createElement("div");
cube.className = "cube" + name;
cube.setAttribute("onmousedown","controls.onPress('"+name+"')");
		cube.setAttribute("onmouseup","controls.onRelease('"+name+"')");
		cube.setAttribute("ontouchstart","controls.onPress('"+name+"')");
		cube.setAttribute("ontouchend","controls.onRelease('"+name+"')");


var left = document.createElement("div");
left.className = "cubeleft";

var right = document.createElement("div");
right.className = "cuberight";


var top = document.createElement("div");
top.className = "cubetop";

		switch(name) {
			case "up":
				var transform = "translateY(-12vmin)";
				break;
				case "down":
				var transform = "translateY(12vmin)";
				break;
				case "left":
				var transform = "translateX(-12vmin)";
				break;
				case "right":
				var transform = "translateX(12vmin)";
				break;
		}
		cube.style.transform = transform;
	canvas.appendChild(cube)
cube.appendChild(top);
cube.appendChild(left);
cube.appendChild(right);
	return cube;
	}
	createButton("up");
	createButton("down");
	createButton("left");
	createButton("right");
	
},
drop: function(X,Y) {
	var canvas = document.querySelector("#canvas");
	//find number of blocks of the coordinate
var ZBlocks = document.getElementsByClassName("cube" + X + Y).length;
	var Z = ZBlocks * 10;
		
var cube = document.createElement("div");
cube.className = "cube" + X + Y;

var left = document.createElement("div");
left.className = "cubeleft";

var right = document.createElement("div");
right.className = "cuberight";


var top = document.createElement("div");
top.className = "cubetop";

	canvas.appendChild(cube);
cube.appendChild(top);
cube.appendChild(left);
cube.appendChild(right);
cube.style.transform = "translateY(" + 10 * Y + "vmin)" + "translateX(" + 10 * X + "vmin)" + "translateZ(90vmin)";
	setTimeout(function() {
	cube.style.transform = "translateY(" + 10 * Y + "vmin)" + "translateX(" + 10 * X + "vmin)" + "translateZ(" + Z + "vmin)";
},10)
	return cube;
},
createGeneric: function(X,Y) {
var canvas = document.querySelector("#canvas");

var cube = document.createElement("div");
cube.className = "cube" + X + Y;

var left = document.createElement("div");
left.className = "cubeleft";

var right = document.createElement("div");
right.className = "cuberight";


var top = document.createElement("div");
top.className = "cubetop";

	canvas.insertBefore(cube,canvas.childNodes[0]);
cube.appendChild(top);
cube.appendChild(left);
cube.appendChild(right);
cube.style.transform = "translateY(" + 10 * Y + "vmin)" + "translateX(" + 10 * X + "vmin)" + "translateZ(90vmin)";
setTimeout(function() {
	cube.style.transform = "translateY(" + 10 * Y + "vmin)" + "translateX(" + 10 * X + "vmin)" + "translateZ(0vmin)";
},10)
	return cube
},
drop: function(X,Y) {
	var canvas = document.querySelector("#canvas");
	//find number of blocks of the coordinate
var ZBlocks = document.getElementsByClassName("cube" + X + Y).length;
	var Z = ZBlocks * 10;
		
var cube = document.createElement("div");
cube.className = "cube" + X + Y;

var left = document.createElement("div");
left.className = "cubeleft";

var right = document.createElement("div");
right.className = "cuberight";


var top = document.createElement("div");
top.className = "cubetop";

	canvas.appendChild(cube);
cube.appendChild(top);
cube.appendChild(left);
cube.appendChild(right);
cube.style.transform = "translateY(" + 10 * Y + "vmin)" + "translateX(" + 10 * X + "vmin)" + "translateZ(90vmin)";
	setTimeout(function() {
	cube.style.transform = "translateY(" + 10 * Y + "vmin)" + "translateX(" + 10 * X + "vmin)" + "translateZ(" + Z + "vmin)";
},10)
	return cube;
},
test:function() {
	var cube = blocks.createGeneric(1,7);
	cube.style.opacity = "0.4";
},
genAll:function() {
	//create div with large surface.
		var canvas = document.querySelector("#canvas");
	//find number of blocks of the coordinate
var ZBlocks = document.getElementsByClassName("cube").length;
	var Z = ZBlocks * 10;
		
var cube = document.createElement("div");
cube.className = "ground";
	canvas.insertBefore(cube,canvas.childNodes[0]);
cube.style.transform = "translateY(" + 10 * 0 + "vmin)" + "translateX(" + 10 * 0 + "vmin)" + "translateZ(90vmin)";
	setTimeout(function() {
	cube.style.transform = "translateY(" + 10 * 0 + "vmin)" + "translateX(" + 10 * 0 + "vmin)" + "translateZ(" + 0 + "vmin)";
},10)
	return cube;
},
stairs:function(X,Y,Dir) {
		var canvas = document.querySelector("#canvas");
	//find number of blocks of the coordinate
var ZBlocks = document.getElementsByClassName("cube" + X + Y).length;
	var Z = ZBlocks * 10;
		
var cube = document.createElement("div");
cube.className = "cube" + X + Y;

var left = document.createElement("div");
left.className = "stairleft1";

var right = document.createElement("div");
right.className = "stairright1";


var top = document.createElement("div");
top.className = "stairtop1";
	
	var left2 = document.createElement("div");
left2.className = "stairleft2";

var right2 = document.createElement("div");
right2.className = "stairright2";


var top2 = document.createElement("div");
top2.className = "stairtop2";
	
	var left3 = document.createElement("div");
left3.className = "stairleft3";

var right3 = document.createElement("div");
right3.className = "stairright3";


var top3 = document.createElement("div");
top3.className = "stairtop3";

	canvas.appendChild(cube);
cube.appendChild(top);
cube.appendChild(left);
cube.appendChild(right);

	cube.appendChild(top2);
cube.appendChild(left2);
cube.appendChild(right2);
	cube.appendChild(top3);
cube.appendChild(left3);
cube.appendChild(right3);

cube.style.transform = "translateY(" + 10 * Y + "vmin)" + "translateX(" + 10 * X + "vmin)" + "translateZ(90vmin)";
	setTimeout(function() {
	cube.style.transform = "translateY(" + 10 * Y + "vmin)" + "translateX(" + 10 * X + "vmin)" + "translateZ(" + Z + "vmin)";
},10)
	return cube;
},
}

var canvas = {
	changeView: function() {
		var canvas = document.getElementById("canvas");
		switch(canvas.className) {
			case "view0":
				canvas.className = "view1";
				break;
			case "view1":
				canvas.className = "view2";
				break;
			case "view2":
				canvas.className = "view0";
				break;
				
		}
	}
}

var level = {
	parse: function(level) {
		//http request file
		var request = new XMLHttpRequest();
		request.open("GET","./assets/json/"+level+".json",false);
		request.send(null);
		var levelObject = JSON.parse(request.responseText);
		console.log(levelObject);
		//parse it
		//loop generation
		for(i=0;i < levelObject.blocks.length;i++) {
			switch(levelObject.blocks[i][0]) {
				case "bl":
					blocks.drop(levelObject.blocks[i][1],levelObject.blocks[i][2]);
					break;
				case "tp":
					blocks.teleporter(levelObject.blocks[i][1],levelObject.blocks[i][2],levelObject.blocks[i][3]);
					break;
				case "st":
					blocks.stairs(levelObject.blocks[i][1],levelObject.blocks[i][2],levelObject.blocks[i][3]);
					break;
			}
		}
	},
}