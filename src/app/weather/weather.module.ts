import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';

// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
import { weatherreducer } from './store/reducers/weather.reducer';
import { WeatherEffects } from './store/effects/weather.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,HttpClientModule,FormsModule,
    StoreModule.forRoot({ weather:weatherreducer}),
    EffectsModule.forRoot([WeatherEffects])
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
