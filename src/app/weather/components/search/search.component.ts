import { Component, ViewChild } from '@angular/core';
import * as WeatherActions from '../../store/actions/weather.actions'
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @ViewChild('f') searchForm: NgForm;

  constructor(private store: Store<AppState>,
    private route: ActivatedRoute) { }


  onsubmit = () => {
    const city = this.searchForm.value.city;
    if (city) {
      this.store.dispatch(new WeatherActions.SearchCity(city));
    }
  }
}
