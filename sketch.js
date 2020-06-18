var userImg, bomberImg, tankImg, enemyImg;
var user, bomber, tank;
var bg;
var bullImg, tankBullImg, bombImg, eneBullImg;
var bulletsGroup, enemyBulletsGroup;
var enemy1, enemy2, enemy3;
var flag, enemyBull;
var score = 0;

function preload() {
    userImg = loadImage("images/user.png");
    bomberImg = loadImage("images/user bomb.png");
    tankImg = loadImage("images/user tank.png");
    enemyImg = loadImage("images/enemy.png");

    bg = loadImage("images/bg2.jpg");

    bullImg = loadImage("images/gunBullet.png");
    tankBullImg = loadImage("images/tank bullet.png");
    bombImg = loadImage("images/bomb.png");
    eneBullImg = loadImage("images/gunBullet3.png");
}

function setup() {
    var canvas = createCanvas(1400, 700);
    user = new Player();

    enemy1 = new Enemy(1200, 100, 20, 20);
    enemy2 = new Enemy(1200, 350, 20, 20);
    enemy3 = new Enemy(1200, 600, 20, 20);

    bulletsGroup = new Group();
    enemyBulletsGroup = new Group();

    flag = 3;
}

function draw() {
    background(bg);

    textSize(20);
    fill("red");
    text("SCORE: " + score, 80, 80);

    user.display();

    user.playerMove();
    user.playerCollide();

    if (bulletsGroup.isTouching(enemy1.body)) {
        enemy1.body.destroy();
        enemy1.body.lifetime = 0;
    }

    if (bulletsGroup.isTouching(enemy2.body)) {
        enemy2.body.destroy();
    }

    if (bulletsGroup.isTouching(enemy3.body)) {
        enemy3.body.destroy();
    }

    if (enemyBulletsGroup.isTouching(user.body)) {
        user.body.destroy();
    }

    if (frameCount % 180 === 0) {
        if (enemy1.body.lifetime !== 0) {
            enemy1.display();
        }
    }

    if (frameCount % 230 === 0) {
        enemy2.display();
    }

    if (frameCount % 280 === 0) {
        enemy3.display();
    }

    drawSprites();
}

function keyPressed() {
    if (keyCode === 32) {
        var bullet = createSprite(user.body.x + 105, user.body.y - 50, 20, 20);
        bullet.velocityX = 12;
        if (flag === 3) {
            bullet.addImage("GunBullet", bullImg);
            bullet.scale = 0.2;
        }

        if (flag === 2) {
            bullet.addImage("TankBullet", tankBullImg);
            bullet.scale = 0.4;
            bullet.x = user.body.x + 60;
            bullet.y = user.body.y - 5;;
        }

        if (flag === 1) {
            bullet.addImage("BombBullet", bombImg);
            bullet.scale = 0.2;
        }

        bulletsGroup.add(bullet);
    }
}

