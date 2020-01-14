import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedModule} from '../shared.module';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: SharedModule
})
export class ApiService {
  constructor(public httpClient: HttpClient) {}

  getCities(citiesIds: number[]): Observable<any> {
    return this.httpClient
      .get(
        `https://api.openweathermap.org/data/2.5/group?id=${citiesIds.join(
          ','
        )}&units=metric&appid=897be757577d830e1c3ce159e36e8dda`
      )
      .pipe(map((data: any) => data.list));
  }
}
