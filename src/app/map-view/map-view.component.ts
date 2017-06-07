import { Component, Input, OnInit } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapPolyline, SebmGoogleMapPolylinePoint } from 'angular2-google-maps/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { Station } from '../../models/station';
import { Tour } from '../../models/tour';
import { DatastoreService } from '../datastore.service';

import 'rxjs/add/operator/switchMap';
declare var $: any;

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
  providers: [DatastoreService]
})

export class MapViewComponent implements OnInit{
  selectedStation: number;
  locations: Station[];
  tour: any;
  private date: string;
  private minute: number;
  private city_id: number;

  constructor(
    private service: DatastoreService,
    private route: ActivatedRoute,
    private location: Location) {
    this.selectedStation = 1;
    // const id: Observable<string> = route.params.map(p => p.id);
    // console.log(id);
  }

  // getTour(): void {
  //   this.service.getTour(0,0).then(tour => this.tour = tour);
  // }

  ngOnInit(): void {
    // this.getTour();
    // this.getLocations();

    // console.log(this.route.queryParams['date']);
    // console.log(this.route.queryParams['minute']);
    // console.log(this.route.queryParams['city_id']);
    this.route.params.subscribe(params=>{this.date=params['date'];
                                         this.minute=params['minute'];
                                         this.city_id=params['city_id'];
                                         this.service.getTour(this.date, this.minute, this.city_id).then(tour=>{this.tour=tour;console.log(tour);});});
    // this.route.params
    // .switchMap((params: Params) => this.service.getTour(params['date'],+params['minute'],+params['city_id']))
    // .subscribe(tour => this.tour = tour);
  }

  goBack(): void {
    console.log(this.date);
    console.log(this.minute);
    console.log(this.city_id);

    this.location.back();
    console.log(this.tour);
  }

  // getLocations(): void {
  //   this.service.getLocations().then(locations => this.locations = locations);
  // }

  // getTour(): void {

  // }

// tourList = function() {
//   const fullArray = [];
//   for(let track of this.tour) {
//     console.log(track);
//     let result1 = this.locations.filter(item => item.name == track.fromStation)[0];
//     console.log(result1);
//     let result2 = this.locations.filter(item => item.name == track.toStation)[0];
//     console.log(result2);
//     fullArray.push({"stationFrom": result1.name, "cityFrom": result1.city, 
                      //  "latFrom": result1.lat, "lngFrom": result1.lng, 
                      //  "stationTo": result2.name, "cityTo": result2.city, 
                      //  "latTo": result2.lat,
//                     "lngTo": result2.lng, "length": track.length});
//   }
//   console.log(fullArray[1]);
//   return fullArray;
// }
}