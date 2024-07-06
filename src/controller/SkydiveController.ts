import { Boat } from '../data/Boat';
import { Airplane } from '../data/Airplane';
import { CanvasView } from '../view/CanvasView';
import { Life } from '../data/Life';
import { Score } from '../data/Score';
import { ParachutistProcess } from '../data/ParachutistProcess';

export class SkydiveController {
  private canvasView: CanvasView;

  private score: Score;
  private life: Life;
  private boat!: Boat;
  private airplane!: Airplane;

  private parachutistProcess: ParachutistProcess;

  public constructor(canvasView: CanvasView, life: number) {
    this.canvasView = canvasView;
    this.score = new Score();
    this.life = new Life(life);

    this.parachutistProcess = new ParachutistProcess();
  }

  setBoat(boat: Boat) {
    this.boat = boat;
  }
  setAirplane(airplane: Airplane) {
    this.airplane = airplane;
  }

  start(): void {
    this.gameLoop();
  }

  setGameOver(): void {
    this.canvasView.drawGameOver();
  }

  gameLoop() {
    this.canvasView.drawElementsOnCanvas(
      this.airplane,
      this.boat,
      this.parachutistProcess.handleParachutist(this.airplane),
      this.score,
      this.life,
    );

    this.checkMoveAirplane();
    this.checkMoveBoat();
    if (!this.checkParachutists()) return;

    requestAnimationFrame(() => this.gameLoop());
  }
  checkParachutists() {
    if (this.life.getScore == 0) {
      this.setGameOver();
      return false;
    }
    for (const p of this.parachutistProcess.handleParachutist(this.airplane)) {
      if (
        p.pos.y + 50 > this.boat.pos.y &&
        p.pos.x >= this.boat.pos.x - this.boat.getWidth / 2 &&
        p.pos.x <= this.boat.pos.x + this.boat.getWidth / 2
      ) {
        this.parachutistProcess.deleteParachutist(p);
        this.score.addScore();
      } else if (
        p.pos.y + 50 > this.boat.pos.y &&
        p.pos.x <= this.boat.pos.x + this.boat.getWidth &&
        p.pos.x >= this.boat.pos.x - this.boat.getWidth / 2
      ) {
        this.parachutistProcess.deleteParachutist(p);
        this.life.decreaseLife();
      } else {
        p.moveparachutist();
      }
    }
    return true;
  }

  private checkMoveAirplane() {
    if (this.airplane.pos.x + this.airplane.getWidth > 0)
      this.airplane.moveAirplane();
    else this.airplane.pos.x = 1080;
  }

  private checkMoveBoat() {
    if (
      (this.boat.isMovingLeft && this.boat.pos.x > 0) ||
      (this.boat.isMovingRight &&
        this.boat.pos.x < this.canvasView.getCanvasWithd() - this.boat.getWidth)
    )
      this.boat.moveBoat();
  }
}
