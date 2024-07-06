import { Vector } from '../utils/types';

export class Parachutist {
  private parachtistImage: HTMLImageElement = new Image();

  public constructor(
    private width: number,
    private height: number,
    private position: Vector,
    private speed: number,
    image: string,
  ) {
    this.parachtistImage.src = image;
    this.width = width;
    this.height = height;
    this.position = position;
    this.speed = speed;
  }

  moveparachutist(): void {
    this.pos.y += this.speed;
  }

  get getWidth(): number {
    return this.width;
  }
  get getHeight(): number {
    return this.height;
  }
  get pos(): Vector {
    return this.position;
  }
  get image(): HTMLImageElement {
    return this.parachtistImage;
  }
  get getSpeed(): number {
    return this.speed;
  }
}
