import { Parachutist } from '../data/Parachutist';
import { Vector } from '../utils/types';
import { Airplane } from './Airplane';
import PARACHTIST_IMG from '../assets/parachutist.png';

export class ParachutistProcess {
  private parachutistList;

  constructor() {
    this.parachutistList = new Set<Parachutist>();
  }

  private getRandom(): boolean {
    return Math.floor(Math.random() * 500 + 1) > 499 ? true : false;
  }
  handleParachutist(airplane: Airplane): Set<Parachutist> {
    if (this.getRandom()) {
      const parachtistVector: Vector = {
        x: airplane.pos.x,
        y: airplane.pos.y - airplane.getHeight,
      };
      this.parachutistList.add(
        new Parachutist(50, 100, parachtistVector, 2, PARACHTIST_IMG),
      );
    }
    return this.parachutistList;
  }
  deleteParachutist(parachutist: Parachutist): void {
    this.parachutistList.delete(parachutist);
  }
}
