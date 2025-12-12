var myCar;
var score = 0;
var coins = [];

var myGameArea = {
    canvas: null,
    start: function () {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    update: function () {
        this.clear();
        myCar.update();
        for (let i = 0; i < coins.length; i++) {
            coins[i].draw();
            if (coins[i].collected(myCar)) {
                score++;
                coins[i] = new Coin();
            }
        }
        this.context.fillStyle = "white";
        this.context.font = "20px Arial";
        this.context.fillText("Score: " + score, 10, 25);
    }
};

class Car {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speed = 0;
        this.angle = 0;
        this.maxSpeed = 3;
        this.acceleration = 0.1;
        this.friction = 0.05;
    }

    update() {
        const ctx = myGameArea.context;
        this.speed *= (1 - this.friction);
        if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
        if (this.speed < -this.maxSpeed) this.speed = -this.maxSpeed;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x < 0) this.x = 0;
        if (this.x > myGameArea.canvas.width - this.width) this.x = myGameArea.canvas.width - this.width;
        if (this.y < 0) this.y = 0;
        if (this.y > myGameArea.canvas.height - this.height) this.y = myGameArea.canvas.height - this.height;

        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.fillStyle = "#87CEEB";
        ctx.fillRect(-this.width / 2 + 5, -this.height / 2 + 3, this.width - 10, this.height - 6);
        ctx.fillStyle = "#333";
        ctx.fillRect(-this.width / 2 - 2, -this.height / 2 - 2, 4, 4);
        ctx.fillRect(this.width / 2 - 2, -this.height / 2 - 2, 4, 4);
        ctx.fillRect(-this.width / 2 - 2, this.height / 2 - 2, 4, 4);
        ctx.fillRect(this.width / 2 - 2, this.height / 2 - 2, 4, 4);
        ctx.restore();
    }

    accelerate() {
        this.speed += this.acceleration;
    }
    brake() {
        this.speed -= this.acceleration;
    }
    turnLeft() {
        if (this.speed !== 0) this.angle -= 0.1;
    }
    turnRight() {
        if (this.speed !== 0) this.angle += 0.1;
    }

    honk() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.type = "sawtooth";
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (error) {
            console.log("Не удалось воспроизвести сигнал");
        }
    }
}

class Coin {
    constructor() {
        this.size = 10;
        this.x = Math.random() * (myGameArea.canvas.width - this.size);
        this.y = Math.random() * (myGameArea.canvas.height - this.size);
    }

    draw() {
        const ctx = myGameArea.context;
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    collected(car) {
        let dx = (car.x + car.width / 2) - this.x;
        let dy = (car.y + car.height / 2) - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.size + car.width / 2;
    }
}

const keys = {
    up: false,
    down: false,
    left: false,
    right: false,
    honk: false
};

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
            keys.up = true;
            break;
        case "ArrowDown":
        case "s":
        case "S":
            keys.down = true;
            break;
        case "ArrowLeft":
        case "a":
        case "A":
            keys.left = true;
            break;
        case "ArrowRight":
        case "d":
        case "D":
            keys.right = true;
            break;
        case " ":
        case "h":
        case "H":
            if (!keys.honk) {
                keys.honk = true;
                myCar.honk();
            }
            break;
    }
});

document.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
            keys.up = false;
            break;
        case "ArrowDown":
        case "s":
        case "S":
            keys.down = false;
            break;
        case "ArrowLeft":
        case "a":
        case "A":
            keys.left = false;
            break;
        case "ArrowRight":
        case "d":
        case "D":
            keys.right = false;
            break;
        case " ":
        case "h":
        case "H":
            keys.honk = false;
            break;
    }
});

function gameLoop() {
    if (keys.up) myCar.accelerate();
    if (keys.down) myCar.brake();
    if (keys.left) myCar.turnLeft();
    if (keys.right) myCar.turnRight();
    myGameArea.update();
    requestAnimationFrame(gameLoop);
}

window.onload = () => {
    myGameArea.start();
    myCar = new Car(40, 20, "red", 240, 200);
    for (let i = 0; i < 5; i++) {
        coins.push(new Coin());
    }
    gameLoop();
};
