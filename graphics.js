function init() {
  id = setInterval(draw, 2000);
}

function draw() {
  var canvas = document.getElementById("surface");
  if (canvas.getContext) {
    var con = canvas.getContext("2d");

    // draw box
    con.fillStyle = "blue";
    con.strokeStyle = "rgb(255,0,0)";
    con.lineWidth = "15";
    con.fillRect(0, 0, 800, 600);
    con.strokeRect(0, 0, 800, 600);

    con.font = "40px Verdana";

    // add text
    var gradient = con.createLinearGradient(0, 0, 420, 0);
    gradient.addColorStop("0", "pink");
    gradient.addColorStop("0.5", "red");
    gradient.addColorStop("1.0", "green");
    con.strokeStyle = gradient;
    con.lineWidth = "2";
    con.strokeText("graphic design is my passion", 120, 300, 300);

    // add circle
    con.beginPath();
    con.arc(300, 250, 200, 0, Math.PI * 2, true);
    con.closePath();
    con.stroke();

    // add lines using loops
    con.strokeStyle = "pink";
    con.lineWidth = "4";
    for (var i = 0; i < 13; i++) {
      con.beginPath();
      con.lineJoin = "miter";
      con.moveTo(25 * i, 20);
      con.lineTo(100 + 25 * i, 50);
      con.lineTo(25 * i, 100);
      con.stroke();
    }
    for (var i = 0; i < 13; i++) {
      con.beginPath();
      con.lineJoin = "miter";
      con.moveTo(800 - 25 * i, 20);
      con.lineTo(700 - 25 * i, 50);
      con.lineTo(800 - 25 * i, 100);
      con.stroke();
    }

    //draw football
    con.save();
    con.strokeStyle = "black";
    con.lineWidth = "6";
    con.scale(1, 0.5);
    con.beginPath();
    con.arc(200, 300, 50, 0, 2 * Math.PI);
    con.stroke();
    con.fillStyle = "brown";
    con.fill();
    con.restore();

    con.beginPath();
    con.strokeStyle = "white";
    con.moveTo(175, 150);
    con.lineTo(225, 150);
    con.stroke();

    for (var i = 0; i < 8; i++) {
      con.beginPath();
      con.moveTo(175 + i * 7, 142);
      con.lineTo(175 + i * 7, 158);
      con.stroke();
    }

    // add image
    var pic = new Image();
    pic.src = "frog.png";
    con.drawImage(pic, 550, 150, 200, 200);

    // move and resize image
    con.save();
    con.scale(Math.random() + 0.5, Math.random() + 0.5);
    con.drawImage(
      pic,
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      200,
      200
    );
    con.restore();
  } // end if
} // end draw

function clicked() {
  var canvas = document.getElementById("surface");
  var con = canvas.getContext("2d");
  var pic = new Image();
  pic.src = "frog.png";
  con.drawImage(
    pic,
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    20,
    20
  );
}
