function load(){

if(!document.getElementById("canvas").getContext) return;
var ctx = document.getElementById("canvas").getContext('2d');

function printtext(text) {
	ctx.save();
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.restore();
	for(var ltext = text.toLowerCase().replace(/[^a-z\n]/gm,' '), len = text.length, i = 0, x = 0, y = 64;i < len; i++) {
		i==0 && console.log(ltext);
		if(/[a-z]/.test(ltext[i])) printalpha(ltext[i], x, y);
		if(/ /.test(ltext[i])) {
			//ctx.translate(x,y);
			ctx.save();
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(x,y,32,-64);
			ctx.restore();
			//ctx.translate(-x,-y);
		}
		if(ltext[i] == '\n') x = -32, y += 64;
		x += 32;
		console.log("x:"+x+",y:"+y+"");
	}
}

var map = [
[ 0, 0,2,0,false],
[-1,-1,3,0,false],
[ 0,-1,3,0,false],
//[ 0,-1,1,1, true],
[ 0, 0,1,1,false],
[ 0,-1,1,1,false],
//[-1, 0,1,1, true],
[ 0, 0,2,2,false],
[ 0, 0,4,2,false],
[ 1, 1,4,2,false],
[ 1, 1,2,4,false],
[ 1, 2,3,0,false],
[ 0, 0,3,0,false],
[ 2, 0,3,0,false],
[ 0, 0,3,2,false],
[-1,-1,4,2,false],
[-1,-1,2,4,false],
[ 0, 0,2,4,false],
[ 1, 1,3,0,false],
//[ 0, 0,1,1, true],
[-1, 1,3,0,false],
[ 1,-1,3,0,false],
[ 1, 1,1,1,false],
[ 2, 0,1,1,false],
[-1, 0,3,0,false],
[-1, 0,1,1,false],
[ 0, 0,0,0,false]
];

var la = new Map([
[0,[ 2,-0,2,-5,0,-5,0,1,0,3,1,3,-1,-0,-1,1,-1,2,-1,-3,-13,-12,4,-9,27,-39 ]],
[1,[ 2,-0,2,-5,0,-5,0,1,0,3,2,3,-1,-0,-2,1,-2,2, 0,-4, -4,-15,4,-4,27,-39 ]],
[2,[ 2,-0,2,-5,0,-5,0,1,0,3,1,3,-1,-0,-1,1,-1,2,-1,-3, -2,2,4,9,27,-39 ]],
]);

var ra = new Map([
[0,[0,3,-4,3,-4,-0,1,-0,1,-0,1,3,0,-3,3,-3,3,-3,0,-1,11,-11,-7,-8,8,-39]],
[1,[-1,3,-5,3,-5,-0,1,-0,3,1,2,4,0,-3,2,-3,3,-3,-2,-2,2,-14,-7,-4,8,-39]],
[2,[-1,3,-4,3,-4,-0,1,-0,2,-0,1,3,0,-3,3,-3,3,-3,-2,1,4,3,-7,8,8,-39]],
]);

var rl = new Map([
[0,[1,-0,2,-0,2,-2,4,-0,-1,-0,-3,1,-1,3,-2,-0,-3,-1,-5,-1,0,-0,4,6,-3,6,11,-15]],
[1,[1,-0,2,-0,2,-2,4,-0,-1,-0,-3,1,-1,3,-2,-0,-3,-1,-5,-1,0,-0,0,-0,-3,12,11,-15]],
[2,[1,-0,2,-0,2,-2,4,-0,-1,-0,-3,1,-1,3,-2,-0,-3,-1,-5,-1,0,-0,0,-0,0,12,11,-15]],
[3,[1,-0,2,-0,2,-2,4,-0,-1,-0,-3,1,-1,3,-2,-0,-3,-1,-5,-1,0,-0,4,4,-3,4,11,-15]],
[4,[0,1,0,2,2,2,0,4,0,-1,-1,-3,-3,-1,0,-2,1,-3,1,-5,0,-0,0,-0,-8,-0,11,-15]],
]);

var ll = new Map([
[0,[-1,-0,-2,-2,-1,-3,-5,1,4,-2,8,-0,6,2,0,-0,0,-0,0,-0,0,-0,-4,6,3,6,16,-16]],
[1,[-1,-0,-2,-2,-1,-3,-5,1,4,-2,8,-0,6,2,0,-0,0,-0,0,-0,0,-0,0,-0,3,12,16,-16]],
[2,[-1,-0,-2,-2,-1,-3,-5,1,4,-2,8,-0,6,2,0,-0,0,-0,0,-0,0,-0,0,-0,0,12,16,-16]],
[3,[-1,-0,-2,-2,-1,-3,-5,1,4,-2,8,-0,6,2,0,-0,0,-0,0,-0,0,-0,-4,4,3,4,16,-16]],
[4,[0,1,-2,2,-3,1,1,5,-2,-4,0,-8,2,-6,0,-0,0,-0,0,-0,0,-0,0,-0,8,-0,16,-16]],
]);

function printalpha(c, x, y) {
	printlimb(map.get(c), x, y);
}

function printlimb(arr, x, y) {
	if(arr[4]) {
		ctx.translate(x+32,y-64);
		ctx.rotate(180 * Math.PI / 180);
	} else {
		ctx.translate(x, y);
	}

	if(arr[1] != -1) dprint(la.get(arr[1]).slice(), false);
	//body and eye
	ctx.beginPath();
	ctx.moveTo(1, -14);
	ctx.bezierCurveTo(7, -30, 7, -38, 5, -46);
	ctx.lineTo(8, -48);
	ctx.bezierCurveTo(22, -50, 26, -46, 28, -36);
	ctx.bezierCurveTo(31, -21, 20, -12, 1, -14);
	ctx.closePath();

	ctx.moveTo(12, -21);
	ctx.bezierCurveTo(20, -24, 23, -28, 22, -34);
	ctx.bezierCurveTo(21, -40, 19, -41, 15, -42);
	ctx.bezierCurveTo(16, -29, 14, -25, 12, -21);

	ctx.save();
	ctx.fillStyle = "#ff0000";
	ctx.fill();
	ctx.restore();

	ctx.moveTo(16, -43);
	ctx.bezierCurveTo(20, -42, 23, -41, 24, -35);
	ctx.bezierCurveTo(25, -29, 23, -25, 12, -21);
	ctx.moveTo(5, -17);
	ctx.bezierCurveTo(11, -33, 11, -41, 8, -48);
	ctx.moveTo(5, -17);
	ctx.bezierCurveTo(20, -16, 23, -19, 25, -21);
	ctx.moveTo(1, -14);
	ctx.lineTo(5, -17);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(11, -42);
	ctx.bezierCurveTo(11, -48, 17, -48, 17, -43);
	ctx.bezierCurveTo(17, -38, 11, -37, 11, -42);
	ctx.closePath();

	ctx.moveTo(18, -40);
	ctx.bezierCurveTo(18, -46, 23, -47, 23, -42);
	ctx.bezierCurveTo(23, -38, 18, -35, 18, -40);
	ctx.closePath();

	ctx.save();
	ctx.fillStyle = "#ffffff";
	ctx.fill();
	ctx.restore();

	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(13, -40);
	ctx.bezierCurveTo(13, -42, 14, -44, 16, -44);
	ctx.bezierCurveTo(17, -44, 18, -42, 16, -40);
	ctx.bezierCurveTo(15, -39, 13, -38, 13, -40);
	ctx.closePath();

	ctx.moveTo(19, -39);
	ctx.bezierCurveTo(19, -41, 20, -43, 22, -43);
	ctx.bezierCurveTo(23, -43, 23, -41, 22, -39);
	ctx.bezierCurveTo(21, -37, 19, -37, 19, -39);
	ctx.closePath();
	ctx.fill();

	//
	if(arr[0] != -1) dprint(ra.get(arr[0]).slice(), false);
	dprint(rl.get(arr[2]).slice(), true);
	dprint(ll.get(arr[3]).slice(), true);

	if(arr[4]) {
		ctx.rotate(-180 * Math.PI / 180);
		ctx.translate(-(x+32),-(y-64));
	} else {
		ctx.translate(-x, -y);
	}
}

function dprint(data, isfoot) {
	var origy = data.pop();
	var y = origy;
	var origx = data.pop();
	var x = origx;
	var cp1x = 0, cp1y = 0, cp2x = 0, cp2y = 0;
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(x, y);
	y += data.pop();
	x += data.pop();
	ctx.lineTo(x, y);
	y += data.pop();
	x += data.pop();
	ctx.lineTo(x, y);
	y += data.pop();
	x += data.pop();
	ctx.moveTo(x, y);
	ctx.lineWidth = 1.5;
	ctx.stroke();
	ctx.restore();

	ctx.beginPath();
	origx = x, origy = y;
	ctx.moveTo(origx, origy);
	if(isfoot) {
		y = data.pop() + origy;
		x = data.pop() + origx;
		cp2y = data.pop() + origy;
		cp2x = data.pop() + origx;
		cp1y = data.pop() + origy;
		cp1x = data.pop() + origx;
		ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
		origx = x, origy = y;
		y = data.pop() + origy;
		x = data.pop() + origx;
		cp2y = data.pop() + origy;
		cp2x = data.pop() + origx;
		cp1y = data.pop() + origy;
		cp1x = data.pop() + origx;
		ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
		y += data.pop();
		x += data.pop();
		ctx.lineTo(x, y);
		origx = x, origy = y;
		y = data.pop() + origy;
		x = data.pop() + origx;
		cp2y = data.pop() + origy;
		cp2x = data.pop() + origx;
		cp1y = data.pop() + origy;
		cp1x = data.pop() + origx;
		ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	} else {
		y = data.pop() + origy;
		x = data.pop() + origx;
		cp2y = data.pop() + origy;
		cp2x = data.pop() + origx;
		cp1y = data.pop() + origy;
		cp1x = data.pop() + origx;
		ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
		origx = x, origy = y;
		y = data.pop() + origy;
		x = data.pop() + origx;
		cp2y = data.pop() + origy;
		cp2x = data.pop() + origx;
		cp1y = data.pop() + origy;
		cp1x = data.pop() + origx;
		ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
		origx = x, origy = y;
		y = data.pop() + origy;
		x = data.pop() + origx;
		cp2y = data.pop() + origy;
		cp2x = data.pop() + origx;
		cp1y = data.pop() + origy;
		cp1x = data.pop() + origx;
		ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	}
		ctx.closePath();

		ctx.save();
		ctx.fillStyle = "#ffffff";
		ctx.fill();
		ctx.restore();

		ctx.stroke();
}

window.addEventListener ('resize', resize, false);
function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
  var minSize = Math.min(canvas.width * 2, canvas.height);
  var scaleFactor = Math.floor(minSize / 64);
  ctx.scale(scaleFactor, scaleFactor);
}
resize();

  var pos = 0;
  function update(timestamp) {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     printlimb(map[pos], 0, 64);
     pos = (pos + 1) % map.length;
     //window.requestAnimationFrame(update);
  }
  setInterval(update, 200);
  //window.requestAnimationFrame(update);
}
document.addEventListener("DOMContentLoaded", load);
