import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material';
import {ChartsModule} from 'ng2-charts';

import {SharedModule} from '../shared/shared.module';
import {CitiesComponent} from './cities/cities.component';
import {ForecastChartComponent} from './forecast-chart/forecast-chart.component';

@NgModule({
  declarations: [CitiesComponent, ForecastChartComponent],
  exports: [CitiesComponent],
  imports: [SharedModule, BrowserModule, MatCardModule, ChartsModule]
})
export class CitiesModule {}
