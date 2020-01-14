import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AwComponent} from './aw.component';
import {SharedModule} from './shared/shared.module';
import {NavbarModule} from './navbar/navbar.module';
import {CitiesModule} from './cities/cities.module';

@NgModule({
  declarations: [AwComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, NavbarModule, CitiesModule],
  bootstrap: [AwComponent]
})
export class AwModule {}
