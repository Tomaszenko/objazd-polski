import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePickerComponent } from 'ngx-bootstrap/datepicker';
import { TimepickerComponent } from 'ngx-bootstrap/timepicker';
import { DatastoreService } from '../datastore.service';
import { City } from '../../models/city';
import 'moment/locale/pl';
import * as moment from 'moment';

@Component({
  selector: 'app-choice-view',
  templateUrl: './choice-view.component.html',
  styleUrls: ['./choice-view.component.css'],
  providers: [DatastoreService]
})

export class ChoiceViewComponent implements OnInit {

  public dt: Date = new Date();
  public hour: number = 0;
  public minutes: number = 0;
  public minDate: Date = void 0;
  public selectedCity: number;
  public cities: City[];

  constructor(
    private router: Router,
    private service: DatastoreService) { }

  ngOnInit() {
    moment.locale('pl');
    this.getCities();
  }

  // getTime(): number {
  //   return this.dt.
  // }

  selectCity(num): void {
    console.log("W SELEKCIE: "+num);
    this.selectedCity = num;
  }


  dateToString(): string {
    console.log(this.dt.getFullYear());
    return (this.dt.getFullYear().toString()) + (this.dt.getMonth().toString())
    + (this.dt.getDate().toString());
  }

  getCities(): void {
    this.service.getCities().then(cities => {this.cities = cities;console.log(cities);});
  }

  redirect(): void {
    console.log(this.selectedCity);
    console.log(this.dt);
    let data = new Date(this.dt);
    console.log(this.dt instanceof Date);
    // console.log(this.dt.getFullYear());
    this.router.navigate(['/tour', data.getFullYear().toString()+'-'+(data.getMonth()+1)+'-'+(data.getDate().toString()), +(60*this.hour+this.minutes), +(this.selectedCity)]);
  }
}