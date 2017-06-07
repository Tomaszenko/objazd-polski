import { Station } from './station';

export class Train {
  private name: string;
  private startStation: Station;
  private endStation: Station;

  constructor(name: string, startStation: Station, endStation: Station) {
    this.name = name;
    this.startStation = startStation;
    this.endStation = endStation;
  }

  getName(): string {
      return this.name;
  }

  getStartStation(): Station {
      return this.startStation;
  }

  getEndStation(): Station {
      return this.endStation;
  }

}