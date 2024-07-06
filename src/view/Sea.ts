import { Vector } from '../utils/types';

export class Sea {
  private seaImage: HTMLImageElement = new Image();

  public constructor(
    private width: number,
    private height: number,
    private position: Vector,
    image: string,
  ) {
    this.seaImage.src = image;
    this.width = width;
    this.height = height;
    this.position = position;
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
    return this.seaImage;
  }
}
