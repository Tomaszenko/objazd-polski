import { Station } from './station';
import { Train } from './train';

export class Substage {
  private stationFrom: Station;
  private stationTo: Station;
  private departure: Date;
  private arrival: Date;
  private train: Train;

  constructor(stationFrom: Station, stationTo: Station, departure: Date, arrival: Date, train: Train) {
    this.stationFrom = stationFrom;
    this.stationTo = stationTo;
    this.departure = departure;
    this.arrival = arrival;
    this.train = train;
  }
}