let ctx = document.getElementById("canvas").getContext("2d");

let Snake = function () {
    this.snakeSpeed = 10;
    this.bodyLarge = 20;

    this.snakeMove = function () {

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
    this.size = 20;

    this.foodMove = function () {
        ctx.beginPath();
        ctx.rect((Math.floor(Math.random()*600) + 20),(Math.floor(Math.random()*600) + 20),this.size,this.size);
        ctx.stroke();
    }
    this.foodBorn = function () {

    }
}