import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  template: `
  <app-search></app-search>
  <app-results [weDataArray]="weathers"></app-results>`
})
export class WeatherContainer {
  constructor() {    
  }
  citySearch() {
    // TO BE IMPLMENTED
  }
}
