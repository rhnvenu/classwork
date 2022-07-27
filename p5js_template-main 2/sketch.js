var student={
name: "Rohan",
grade: 8,
favorite_subject: "History",
marks: [101, 90, 94, 91, 97, 92]
}

var ball={
  X:20,
  Y:30,
  R:30,
  Xspeed:0,
  Yspeed:0,
  Color:["red","blue","yellow","green",]
}










function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  circle(ball.X,ball.Y,ball.R)
  fill(ball.Color[2])
  ball.Xspeed=1
  ball.X=ball.X+ball.Xspeed
}
