let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");









let Snake = function (id) {
    this.id = id;
    this.bodyLarge = 23;            // bang 1 box trong game.
    this.snakeBody = [];        //mang the hien toa do x,y cua ran.
    this.initialLength = 3;
    this.x = 230;                   // set vi tri ban dau cho snake.
    this.y = 230;
    this.dX = 23;                // set huong di chuyen dau tien cua snake.
    this.dY = 0;

    this.drawSnake = function () {
         ctx.beginPath();
         ctx.fillStyle='black';
         ctx.rect(this.x,this.y,this.bodyLarge,this.bodyLarge);
         ctx.fill();
         ctx.closePath();
        }
    this.moveDirection =function () {
        if (this.id === 0){
            this.x = this.x + this.dX;
            this.y = this.y + this.dY;
        } else {
            this.x = (this.id -1).x;
            this.y = (this.id -1).y;
        }
    }
}

function keyCode(evt){
    switch (evt.keyCode) {
        case 37:
            snake[0].x = snake[0].x - 23;
            snake[0].y = 0;
        case 38:
            snake[0].x = 0;
            snake[0].y -= 23 ;
        case 39:
            snake[0].x += 23;
            snake[0].y = 0;
        case 40:
            snake[0].x += 23;
            snake[0].y = 0;
    }
}





let snake[0] = new Snake(0);
snake[0].drawSnake();











