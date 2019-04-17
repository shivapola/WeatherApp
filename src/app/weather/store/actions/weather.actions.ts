import { Action } from '@ngrx/store';
import { WeatherData } from '../../../model/weather';


export const Search_City = '[Search] City'
export const Search_City_Success = '[Search] City Success'

export class SearchCity implements Action {
  public readonly type = Search_City;
  constructor(public payload: string) { }
}

export class SearchCitySuccess implements Action {
  readonly type = Search_City_Success;
  constructor(public payload: WeatherData) { }
}

export type WeatherActions = SearchCity | SearchCitySuccess
