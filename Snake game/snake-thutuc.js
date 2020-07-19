let canvas = document.getElementById("canvas");
let ctx= canvas.getContext("2d");
let gameOver = false;

let snakeDefaultSize = 3;
let snakeLarge = 23;
let gridBox = snakeLarge;
let snakeBody = [];
let snakeX =  10;
let snakeY = 10;
let dX = box;
let dY = 0;

function render() {
    snakeX = snakeX + dX;
    snakeY = snakeY + dY;

    if (snakeX < 0) {
        gameOver = true;
    }
    if (snakeX >= canvas.width) {
        gameOver = true;
    }
    if (snakeY < 0) {
        gameOver = true;
    }
    if (snakeY > canvas.height) {
        gameOver = true;
    }
    //set snake body
    snakeBody.unshift({x: snakeX, y: snakeY});
    if (snakeBody.length > snakeDefaultSize) {
        snakeBody.pop();
    }
    for (i = 0; i < snakeBody.length; i++) {
        ctx.beginPath();
        ctx.fillRect(snakeBody[i].x, snakeBody[i].y, gridBox, gridBox);

    }
}
function drawSnake() {
    for (i = 0; i < snakeBody.length; i++) {
        ctx.beginPath();
        ctx.fillRect(snakeBody[i].x,snakeBody[i].y,gridBox,gridBox);
    }
}

drawSnake();

setInterval(render,1000/8);