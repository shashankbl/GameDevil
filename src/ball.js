export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");
    this.position = { x: 10, y: 10 };
    this.speed = { x: 5, y: 3 };
    this.size = 30;
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.game = game;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (
      this.position.x > this.gameWidth - this.size - 5 ||
      this.position.x < 5
    ) {
      this.speed.x = -this.speed.x;
    }

    if (
      this.position.y > this.gameHeight - this.size - 5 ||
      this.position.y < 5
    ) {
      this.speed.y = -this.speed.y;
    }

    let bottomBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let leftSideOfPaddle = this.game.paddle.position.x;
    let rightSideOfPaddle =
      this.game.paddle.position.x + this.game.paddle.width;

    if (
      bottomBall >= topOfPaddle &&
      this.position.x >= leftSideOfPaddle &&
      this.position.x + this.size <= rightSideOfPaddle
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
