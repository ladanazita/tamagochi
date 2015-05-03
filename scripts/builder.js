addEventListener('DOMContentLoaded', initCanvas);
function initCanvas() {
	var ctx;
	var canvas = document.getElementById('screen');
		if (screen.getContext) {
			ctx = canvas.getContext('2d');
			ctx.fillStyle = "rgb(200,0,0)";
		}

	var canvas = document.getElementById("screen");
	canvas.addEventListener('mousemove', function(evt){
		var position = getMousePos(canvas, evt);
	});
	canvas.addEventListener('click', function(evt){
		var position = getMousePos(canvas, evt);
		console.log('x:' + position.x + ' , y:' + position.y);
	})

}
function getMousePos(canvas, evt) { // get canvas and event to return the cordinates
    var rect = canvas.getBoundingClientRect();
    
    return {
      x: Math.round(evt.clientX - rect.left),
      y: Math.round(evt.clientY - rect.top)
    };
}
