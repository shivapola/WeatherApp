import { WeatherData } from "../../../model/weather";
import * as WeatherActions from "../actions/weather.actions";

export function weatherreducer(state: WeatherData[] = [], action: WeatherActions.WeatherActions) {
    switch (action.type) {
        case WeatherActions.Search_City_Success:
            return [...state, action.payload];

        default:
            return state;
    }
}