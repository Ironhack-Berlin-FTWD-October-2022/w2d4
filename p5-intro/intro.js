// (2) preload() preloads all assets (images, sound, ...)
// If we want to show an image in P5, we first have to preload the image
function preload() {
    console.log("preload")
    
	playerImage = loadImage("./gustavo.png")
}

// setup() gets called after preload() and before draw()
// It is used to setup the html canvas
function setup() {
    console.log("setup")
    
	createCanvas(1000, 600)
}

let x = 200
let y = 200
let direction = 2

(2)
let playerImage
let playerX = 200
let playerY = 200

// This is the main draw function
// It gets called all the time by p5
function draw() {
	console.log("draw")

	// Draw a rectangle
	// Arguments: x, y, width, height
	fill("blue")
	stroke(color(0, 0, 255))
	rect(x, y, 100, 100)
    
	// Draw a line
	// Arguments: startX, startY, endX, endY
	line(0, 300, 1000, 300)

	// Clear the canvas 
	clear()

    // Draw a circle
    // Arguments: x, y, size
    circle(x, y, 100)

    // Move the circle horizontally
	x += direction
	if (x > 1000 - 50 || x <= 50) {
		// console.log("hits the wall")
		// Change direction
		direction = -direction
	}

    // p5 provides you with different values like mouse coordinates or the frame count
    // console.log(mouseX)
    // console.log(mouseY)
    // console.log(frameCount)

    clear()
	fill("red")
    stroke("red")
	circle(mouseX, mouseY, 100)

	// (2) Render an image
	// Arguments: img, x, y, width, height
    clear()
	image(playerImage, playerX, playerY, 100, 100)
}

// (2) This function is called when a key is pressed
// Move the player
function keyPressed() {
	// p5 gives you the keyCode
	console.log(keyCode)

	if (keyCode === 39) {
		playerX += 10
	}

    if (keyCode === 37) {
        playerX -= 10
    }
}
