class Enemy {
    constructor(x, y, width, height) {
        this.body = createSprite(x, y, width, height);
        this.body.addImage("Enemy", enemyImg);
        this.body.scale = 0.9;
    }

    display() {
        enemyBull = createSprite(this.body.x - 150, this.body.y - 15, 20, 20);
        enemyBull.velocityX = -4;
        enemyBull.addImage("EnemyBullet", eneBullImg);
        enemyBull.scale = 0.2;
        enemyBulletsGroup.add(enemyBull);
    }
}