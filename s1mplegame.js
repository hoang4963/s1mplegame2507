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
        console.log('ok: ' + this.left + '  ' + this.top );
    }
    this.setSpeed = function(speed) {
        this.speed = speed;
    }
    this.moveLeft = function() {
        this.left -= speed;
        console.log('ok: ' + this.left + '  ' + this.top );
    }
    this.moveDown = function() {
        this.top += speed;
        console.log('ok: ' + this.left + '  ' + this.top );
    }
    this.moveUp = function() {
        this.top -= speed;
        console.log('ok: ' + this.left + '  ' + this.top );
    }

}

var hero = new Hero('khunglong.jpg', 20, 30, 200, 60);

function start(){
    if(hero.left < window.innerWidth - hero.size && hero.top === 20){
        hero.moveRight();
    }
    else if (hero.left > 0 && hero.top < 600)
    {
        hero.moveDown();
    }
    else if (hero.left > 0 && hero.top > 230) {
        hero.moveLeft()
    }
    else if ( hero.left < 230 && hero.top > 0) {
        hero.moveUp()
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

start();