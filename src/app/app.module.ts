import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DatastoreService } from './datastore.service';
import { MapViewComponent } from './map-view/map-view.component';
import { ChoiceViewComponent } from './choice-view/choice-view.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DatepickerModule } from 'ngx-bootstrap';
import { TimepickerModule} from 'ngx-bootstrap';
import * as moment from 'moment';

const appRoutes: Routes = [
    {
        path: 'tour',
        children: [
            {
                path: ':date',
                children: [
                    {
                        path: ':minute',
                        children: [
                            { path: '', pathMatch: 'full', redirectTo: '/choice'},
                            {
                                path: ':city_id',
                                component: MapViewComponent
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: 'choice',
        component: ChoiceViewComponent
    },
    {
        path: '',
        redirectTo: '/choice',
        pathMatch: 'full'
    },
]

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    ChoiceViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwzavTjuGbqxruWJkWYLuqMblTrXQ9RqE'
    }),
    RouterModule.forRoot(appRoutes),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  providers: [DatastoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
