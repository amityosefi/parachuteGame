import { Vector } from '../utils/types';

export class Boat {
  private boatImage: HTMLImageElement = new Image();
  private moveLeft: boolean;
  private moveRight: boolean;

  public constructor(
    private speed: number,
    private width: number,
    private height: number,
    private position: Vector,
    image: string,
  ) {
    this.boatImage.src = image;
    this.width = width;
    this.height = height;
    this.position = position;
    this.speed = speed;
    this.moveLeft = false;
    this.moveRight = false;

    // keyboard listener
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  get isMovingLeft(): boolean {
    return this.moveLeft;
  }

  get isMovingRight(): boolean {
    return this.moveRight;
  }

  handleKeyUp = (e: KeyboardEvent): void => {
    if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') this.moveLeft = false;
    if (e.code === 'ArrowRight' || e.key === 'ArrowRight')
      this.moveRight = false;
  };

  handleKeyDown = (e: KeyboardEvent): void => {
    if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') this.moveLeft = true;
    if (e.code === 'ArrowRight' || e.key === 'ArrowRight')
      this.moveRight = true;
  };

  moveBoat(): void {
    if (this.moveLeft) this.pos.x -= this.speed;
    if (this.moveRight) this.pos.x += this.speed;
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
    return this.boatImage;
  }
  get getSpeed(): number {
    return this.speed;
  }
}
