import { Boat } from './data/Boat';
import { Airplane } from './data/Airplane';
import { SkydiveController } from './controller/SkydiveController';
import { Vector } from './utils/types';

import BOAT_IMG from './assets/boat.png';
import AIRPLANE_IMG from './assets/plane.png';
import { CanvasView } from './view/CanvasView';

export class SkyDiveGame {
  canvas: HTMLCanvasElement | null;
  private SkydiveController: SkydiveController;

  private canvasView: CanvasView;

  public constructor() {
    this.canvas = document.querySelector('#playField');
    this.canvasView = new CanvasView('#playField', '#info');

    const boatVector: Vector = { x: 300, y: 500 };
    const airplaneVector: Vector = { x: 1080, y: 10 };
    this.SkydiveController = new SkydiveController(this.canvasView, 3);

    this.SkydiveController.setAirplane(
      new Airplane(150, 50, airplaneVector, 2, AIRPLANE_IMG),
    );
    this.SkydiveController.setBoat(new Boat(10, 200, 50, boatVector, BOAT_IMG));

    this.SkydiveController.start();
  }
}
