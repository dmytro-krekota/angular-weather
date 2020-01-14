import {ForecastData} from './forecast-data.interface';

export interface City {
  id: number;
  name: string;
  averageTemperature?: number;
  windSpeed?: number;
  forecast?: ForecastData[];
}
