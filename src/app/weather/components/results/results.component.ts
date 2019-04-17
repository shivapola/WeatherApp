import { Component, OnChanges, Input } from '@angular/core';
import { WeatherData } from '../../../model/weather';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
   @Input() weDataArray:WeatherData[];
   weathers : Observable<WeatherData[]>;
  constructor(private store: Store<AppState>) {
  this.weathers = store.select('weather');
  console.log(this.weathers);
  }
  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE  
  }
}


