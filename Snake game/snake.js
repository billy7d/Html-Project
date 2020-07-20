let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");



let SnakeBody = function (id,x,y) {
    this.id = id            //dung de set dau voi duoi;
    this.x = x;
    this.y = y;
    this.dx = 23;
    this.dy = 0;
    this.width = 23;
    this.born =function () {
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.width);
        ctx.fillStyle = "blue";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    this.selectDirection = function () {
        if (this.id === 0){                         //iD 0 la dau ran.
            this.x = this.x + this.dx;
            this.y = this.y + this.dy;
        } else {                                    //iD khac 0 la vung than.
            this.x = snake[this.id - 1].x;
            this.y = snake[this.id - 1].y;
        }
    }
}

function directSnake(evt) {
    switch (evt.keyCode) {
        case 37:
            snake[0].x -= 23;
            snake[0].y = 0;
            break;
        case 38:
            snake[0].x = 0;
            snake[0].y -= 23;
            break;
        case 39:
            snake[0].x += 23;
            snake[0].y = 0;
            break;
        case 40:
            snake[0].x = 0;
            snake[0].y += 23;
            break;
    }
}

function gameInit() {


}



function moveSnake(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = snake.length-1; i >= 0 ; i--) {
        snake[i].selectDirection();
    }
    for (let i = 0; i <snake.length ; i++) {
        snake[i].born();
    }

    if (snake[0].x <= 0){

        alert("Game over");
        clearInterval(game);
    }
    if (snake[0].x >= canvas.width){

        alert("Game over");
        clearInterval(game);
    }
    if (snake[0].y <= 0){

        alert("Game over");
        clearInterval(game);
    }
    if (snake[0].y >= canvas.height){

        alert("Game over");
        clearInterval(game);
    }

}

let Food = function(){
    this.size = 23;
    this.x = (Math.floor(Math.random() * 23) + 1) *23;
    this.y = (Math.floor(Math.random() * 23) + 1) *23;
    this.born = function () {
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.size,this.size);
        ctx.stroke();
    }
}






let game = setInterval(moveSnake,1000/8);
window.addEventListener("keydown", directSnake);
window.onload

let snake =[];
snake[0] = new SnakeBody (0,300,300);
snake[1] = new SnakeBody (1,270,300);
snake[2] = new SnakeBody (2,240,300);