import { WeatherData } from "../../model/weather";

export interface AppState{
    readonly weather: WeatherData[];
}