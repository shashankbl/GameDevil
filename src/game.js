import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new InputHandler(this.paddle);

    this.gameObjects = [this.ball, this.paddle];
  }

  update(deltaTime) {
    this.gameObjects.forEach((Object) => Object.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach((Object) => Object.draw(ctx));
  }
}
