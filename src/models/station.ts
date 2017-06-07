export class Station {
  city: string;
  station: string;
  lat: number;
  lng: number;

  constructor(city: string, station: string, lat: number, lng: number) {
    this.city = city;
    this.station = station;
    this.lat = lat;
    this.lng = lng;
  }
}