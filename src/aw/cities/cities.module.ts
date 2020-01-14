import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {CitiesComponent} from './cities/cities.component';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [CitiesComponent],
  exports: [CitiesComponent],
  imports: [SharedModule, BrowserModule, MatCardModule]
})
export class CitiesModule {}
