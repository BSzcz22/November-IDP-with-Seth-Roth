
let snowflakes = []; 

function setup() {
  createCanvas(500, 400);
  fill(240);
  noStroke();
}

function draw() {
  background('#282D3C');
  fill('cream')
  let time = frameCount / 200;

  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); 
  }

  for (let flake of snowflakes) {
    flake.update(time); 
    flake.display();
  }

  fill('red')
  rect(0,250,150,150)

  fill('maroon')
  triangle(0,250,150,250,75,200)
  
  fill('skyblue')
  rect(95,280,40,40)
  rect(20,280,40,40)
  rect(95,350,40,40)
  rect(20,350,40,40)

  fill('white')
  circle(300,365,70)
  circle(300,315,50)
  circle(300,280,40)
  
  circle(150,55,70)
  circle(200,55,95)
  circle(250,55,110)
  circle(300,60,80)
  circle(330,60,65)

  fill('orange')
  circle(300,282,6)

  fill('black')
  circle(293,275,5)
  circle(307,275,5)
  circle(300,305,5)
  circle(300,315,5)
  circle(300,325,5)

  rect(285,235,30,30)
  rect(277,255,45,13)
}


function snowflake() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0,40*PI);
  this.size = random(3,3);

 this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let omega = 0.05*time ; 
    let angle = omega * time + this.initialangle;
    this.posX = width/2 + this.radius * cos(angle);
    this.posY += pow(this.size, 0.8);
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    circle(this.posX, this.posY, this.size);
  };
}