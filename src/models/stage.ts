import { City } from './city';
import { Substage } from './substage';

export class Stage {
  private substages: Substage[];

  constructor(substages: Substage[]) {
    this.substages = substages;
  }
}