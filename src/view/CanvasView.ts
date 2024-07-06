import { Boat } from '../data/Boat';
import { Airplane } from '../data/Airplane';

import { Life } from '../data/Life';
import { Parachutist } from '../data/Parachutist';
import { Score } from '../data/Score';
import { Vector } from '../utils/types';
import { Sea } from './Sea';

import SEA_IMG from '../assets/sea.png';

export class CanvasView {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private info: HTMLElement | null;
  private sea: Sea;

  public constructor(canvasName: string, info: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');
    this.info = document.querySelector(info);
    const seaVector: Vector = { x: 0, y: 550 };
    this.sea = new Sea(1080, 100, seaVector, SEA_IMG);
  }

  clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  getCanvasWithd(): number {
    return this.canvas.width;
  }

  drawGameOver(): void {
    this.clear();
    if (this.info) this.info.innerHTML = 'Game over!';
  }

  drawData(elem: Airplane | Sea | Boat | Parachutist | null) {
    if (!elem) return;

    this.context?.drawImage(
      elem.image,
      elem.pos.x,
      elem.pos.y,
      elem.getWidth,
      elem.getHeight,
    );
  }

  drawElem(elem: Score | Life) {
    if (elem.display) {
      elem.display.innerHTML = elem.name + elem.getScore.toString();
    }
  }

  drawElementsOnCanvas(
    airplane: Airplane,
    boat: Boat,
    parachutistList: Set<Parachutist>,
    score: Score,
    life: Life,
  ) {
    this.clear();
    this.drawData(this.sea);
    this.drawData(airplane);
    this.drawData(boat);
    this.drawElem(score);
    this.drawElem(life);

    for (const p of parachutistList) {
      this.drawData(p);
    }
  }
}
