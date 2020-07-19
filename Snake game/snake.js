let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let gameOver = false;
let box = 23;





let Snake = function () {
    this.bodyLarge = 23;  // bang 1 box trong game.
    this.snakeBody = [];        //mang the hien toa do x,y cua ran.
    this.initialLength = 3;
    this.x = 10;           // set vi tri ban dau cho snake.
    this.y = 10;
    this.dx = box;          // set huong di chuyen dau tien cua snake.
    this.dy = 0;

    this.snakeMove = function (evt) {
        switch (evt.keyCode) {
            case 37:
                this.dx = -box;
                this.dy = 0;
                break;
            case 38:
                this.dx = 0;
                this.dy = -box;
                break;
            case 39:
                this.dx = +box;
                this.dy = 0;
                break;
            case 40:
                this.dx = 0;
                this.dy = +box;
                break;
        }
        // this.x += this.dx;     // moi lan lap se di chuyen snake theo + dx, dy.
        // this.y += this.dx;

        this.snakeBody.unshift({x: this.x, y: this.y});              //them vao dau 1 ptu va bot o duoi di 1 ptu de ran dchuyen
        if (this.snakeBody.length > this.initialLength) {
            this.snakeBody.pop();
        }

    }

    this.snakeEat = function () {

    }
    this.snakeBorn = function () {
        // for (i = 0; i < this.snakeBody.length; i++) {

            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.fillRect(10 * this.bodyLarge, 10 * this.bodyLarge
                ,this.bodyLarge,this.bodyLarge);

            ctx.strokeRect(10 * this.bodyLarge, 10 * this.bodyLarge
                ,this.bodyLarge,this.bodyLarge);
            ctx.strokeStyle = "black";
        // }
    }
}


// let Food = function () {
//     this.size = 23;
//     this.appleDirect = {x:10,y:10};
//
//     this.foodMove = function () {
//         ctx.beginPath();
//         ctx.rect(Math.floor(Math.random() * 600) + 20,Math.floor(Math.random() * 600) + 20,
//             this.size,this.size);
//         ctx.stroke();
//     }
//     this.foodBorn = function () {
//
//     }
// }


window.onload = function() {


    document.addEventListener("keydown", snake.snakeMove);

    setInterval(init,900/8);
}
let snake = new Snake();
function init() {
    snake.snakeMove();
    snake.snakeBorn();

}

