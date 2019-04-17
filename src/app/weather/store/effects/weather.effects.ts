import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom, concatMapTo } from 'rxjs/operators';
import * as WeatherActions from "../actions/weather.actions";
import { WeatherData, Weather } from "../../../model/weather";
import { WeatherService } from "../../weather.service";
import { AppState } from "../app.state";
import { of } from "rxjs/observable/of";
import { ActivatedRoute } from "@angular/router";

// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX @Effect()
@Injectable()
export class WeatherEffects {
    weatherData: WeatherData = {}
    @Effect()
    getWeather$ = this._actions$.pipe(
        ofType<WeatherActions.SearchCity>(WeatherActions.Search_City),
        switchMap((action) => this._weatherService.searchWeatherForCity(action.payload)),
        switchMap((weatherData: Weather) => {
            this.weatherData.city = weatherData.city.name;
            this.weatherData.am6 = weatherData.list.find(x => x.dt_txt.includes('06:00:00')).main.temp;
            this.weatherData.pm12 = weatherData.list.find(x => x.dt_txt.includes('12:00:00')).main.temp;
            this.weatherData.pm18 = weatherData.list.find(x => x.dt_txt.includes('18:00:00')).main.temp;
            this.weatherData.am12 = weatherData.list.find(x => x.dt_txt.includes('00:00:00')).main.temp;
            return of(new WeatherActions.SearchCitySuccess(this.weatherData));
        })
    );
    constructor(
        private _weatherService: WeatherService,
        private _actions$: Actions,
        private _store: Store<AppState>,
    ) { }
}