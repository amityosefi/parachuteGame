import { Vector } from '../utils/types';

export class Airplane {
  private airplaneImage: HTMLImageElement = new Image();

  public constructor(
    private width: number,
    private height: number,
    private position: Vector,
    private speed: number,
    image: string,
  ) {
    this.airplaneImage.src = image;
    this.width = width;
    this.height = height;
    this.position = position;
    this.speed = speed;
  }

  moveAirplane(): void {
    this.pos.x -= this.speed;
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
    return this.airplaneImage;
  }
  get getSpeed(): number {
    return this.speed;
  }
}
