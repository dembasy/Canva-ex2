var c = document.getElementById('mon_canvas');
var ctx = c.getContext('2d');

//Toit
ctx.beginPath();
ctx.moveTo(70, 150);
ctx.lineTo(320, 150);
ctx.lineTo(195, 25);
ctx.closePath();
ctx.fillStyle = '#D7823D';
ctx.fill();

//Façade
ctx.beginPath();
ctx.closePath();
ctx.fillStyle = '#A1D8E6';
ctx.fillRect(70, 150, 250, 400);

//Fenêtre
ctx.beginPath();
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(90, 175, 40, 40);
ctx.closePath();

//Fenêtre
ctx.beginPath();
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(255, 175, 40, 40);
ctx.closePath();

//Porte
ctx.beginPath();
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(160, 325, 60, 90);
ctx.closePath();
