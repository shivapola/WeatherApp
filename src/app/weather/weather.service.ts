import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Weather, WeatherData } from '../model/weather';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class WeatherService {
  weatherData: WeatherData = {}
  url = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private httpClient: HttpClient) { }

  searchWeatherForCity(city): Observable<Weather> {
    const appId = '010721642521f31b0fbc8c3831d45951';
    const params = new HttpParams({
      fromString: 'q=' + city + '&cnt=8&units=' + 'metric' + '&APPID=' + appId 
    });
    
    return this.httpClient.get<Weather>(this.url,
      { params: params }
    );
  }



}
