class Enemy {
    constructor(life, name, level) {
        this.life = life;
        this.name = name;
        this.level = level;
    }
    getInfo() {
        console.log(this.name, this.life, this.level);
    }
}

const enemy1 = new Enemy(30, 'jon', 10);

console.log(enemy1);

class Dragon extends Enemy {
    constructor(life, name, level, damage) {
        super(life, name, level);
        this.damage = damage;
    }
}

const Red = new Dragon(100, 'Red', 1000, 500);

console.log(Red);

console.log(enemy1.name);
Red.getInfo();