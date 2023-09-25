function init() { var canvas = document.getElementById("canvas");

if (canvas.getContext) {

     var ctx = canvas.getContext("2d");

     ctx.lineWidth = 5; 
	 ctx.strokeStyle = "black"; 
	 ctx.fillStyle = "yellow"; 
	 ctx.beginPath();
	 ctx.moveTo(200, 100);
	 ctx.lineTo(220, 150);
	 ctx.lineTo(240, 100);
	 ctx.lineTo(260, 150);
	 ctx.lineTo(280, 100);
	 ctx.lineTo(220, 100);
	 ctx.closePath();
	 ctx.fill(); 
	 ctx.stroke();

     ctx.fillStyle = "blue";
     ctx.fillRect(400, 80, 500, 100);
     ctx.fillStyle = "black";
     ctx.fillRect(400, 180, 500, 100);
     ctx.fillStyle = "white";
     ctx.lineWidth = 1;

     ctx.strokeStyle = "black";
     ctx.strokeRect(400, 280, 500, 100)
     ctx.beginPath();
	 ctx.arc(200, 500, 100, 0, 2 * Math.PI);
	 ctx.lineWidth = '10';
	 ctx.stroke();


     }}
     onload=init;