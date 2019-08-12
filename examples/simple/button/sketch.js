let gui;

// Create variable for your Button
let b;

function setup() {
  createCanvas(400, 400);
  gui = createGui();
  
  // Create Button
  b = createButton("Button", 100, 50, 200, 50);
}

function draw() {
  background(220);
  drawGui();
  
  if (b.pressed) {
    // Print a message when Button is pressed.
    print(b.label + " pressed.");
  }
  
  if (b.held) {
    // Draw an ellipse when Button is held.
    fill(255, 0, 0);
    ellipse(200, 300, 100);
  }
}

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}