export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;

    this.width = 150;
    this.height = 20;

    this.maxSpeed = 8;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 5
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = +this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#f00";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.position.x += this.speed;

    if (this.position.x < 5) this.position.x = 5;
    if (this.position.x + this.width > this.gameWidth - 5)
      this.position.x = this.gameWidth - this.width - 5;
  }
}
