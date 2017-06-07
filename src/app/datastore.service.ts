import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Station } from '../models/station';
import { City } from '../models/city';
import { Tour } from '../models/tour';
import { LOCS } from './app.mocklocations';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DatastoreService {
    getPath(): void{}
    // getLocations(): Promise<Location[]> {
    //   return Promise.resolve(LOCS);
    // }

    // URLs to web apis
    // private locationsUrl = 'api/locations';
    // private citiesUrl = 'api/cities';
    private tourUrl = 'http://127.0.0.1:5000/tour/';
    private citiesUrl = 'http://127.0.0.1:5000/cities';

    constructor(private http: Http) { }

    // getLocations(): Promise<Station[]> {
    //   return this.http.get(this.locationsUrl)
    //             .toPromise()
    //             .then(response => response.json().data as Station[])
    //             .catch(this.handleError);
    // }

    getCities(): Promise<City[]> {
      return this.http.get(this.citiesUrl)
                .toPromise()
                .then(response => response.json() as City[])
                .catch(this.handleError);
    }

    getTour(date: string, minute: number, city_id: number): Promise<any> {
      let params: URLSearchParams = new URLSearchParams();
      params.set('date', date);
      params.set('minute', minute.toString());
      params.set('city_id', city_id.toString());

      return this.http.get(this.tourUrl+date+","+minute+","+city_id)
                .toPromise()
                .then(response => response.json() as any)
                .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
    // getLocationsSlowly(): Promise<Location[]> {
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 second delay
    //   setTimeout(() => resolve(this.getLocations()), 2000);
    // });
}
