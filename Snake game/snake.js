let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let snake = new Snake();
let food = new Food();
let gameOver = false;
document.addEventListener("keydown", snake.snakeMove);





let Snake = function () {
    this.bodyLarge = 23;
    this.snakeBody = [];
    this.StartPos = {x: 10, y: 10};
    this.Direct = {x:0, y:0};        //Direction of the snake;
    
    this.snakeMove = function (evt) {
        switch (evt.keyCode) {
            case 37:
                this.Direct = {x:-1,y:0};
                break;
            case 38:
                this.Direct = {x:0,y:-1};
                break;
            case 39:
                this.Direct = {x:+1,y:0};
                break;
            case 40:
                this.Direct = {x:0,y:1};
                break;
        }
        this.StartPos.x += this.Direct.x;     //move snake to new position
        this.StartPos.x += this.Direct.x;
    }

    this.snakeEat = function () {

    }
    this.snakeBorn = function () {
        ctx.beginPath();
        ctx.rect(300,300,this.bodyLarge,this.bodyLarge);
        ctx.stroke();
    }
}


let Food = function () {
    this.size = 23;
    this.appleDirect = {x:10,y:10};

    this.foodMove = function () {
        ctx.beginPath();
        ctx.rect(Math.floor(Math.random() * 600) + 20,Math.floor(Math.random() * 600) + 20,
            this.size,this.size);
        ctx.stroke();
    }
    this.foodBorn = function () {
        
    }
}

//viet them chuc nang dap tuong vao chet
//dap vao duoi  chet.


