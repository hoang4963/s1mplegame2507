function Hero(image, top, left, size , speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += speed;
        console.log('ok: ' + this.left);
    }
    this.setSpeed = function (speed) {
        this.speed = speed;
    }
    this.moveLeft = function () {
        this.left -= speed;
    }
    this.moveDown = function () {
        this.top += speed;
    }
    this.moveUp = function () {
        this.top -= speed;
    }

}

var hero = new Hero('khunglong.jpg', 20, 30, 200, 30);

function start(){
    if(hero.left < window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size){
        hero.moveRight();
        hero.moveDown();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();