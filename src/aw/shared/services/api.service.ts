import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedModule} from '../shared.module';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: SharedModule
})
export class ApiService {
  constructor(public httpClient: HttpClient) {}

  getCities(citiesIds: number[]): Observable<any[]> {
    return this.httpClient
      .get(
        `https://api.openweathermap.org/data/2.5/group?id=${citiesIds.join(',')}&units=metric&appid=${
          environment.openWeatherMapId
        }`
      )
      .pipe(map((data: any) => data.list));
  }

  getCityForecast(cityId: number): Observable<any[]> {
    return this.httpClient
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${environment.openWeatherMapId}`
      )
      .pipe(map((data: any) => data.list));
  }

  // https://api.openweathermap.org/data/2.5/forecast?id=703448&units=metric&appid=897be757577d830e1c3ce159e36e8dda
}
