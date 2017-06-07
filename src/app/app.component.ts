import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit{
  title = 'TimeTravel Company';
  selectedStation: boolean;
  locations: Location[];

  constructor() {
    this.selectedStation = false;
  }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    // this.service.getLocations().then(locations => this.locations = locations);
  }
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