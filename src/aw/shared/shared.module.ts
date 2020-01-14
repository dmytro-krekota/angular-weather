import {NgModule} from '@angular/core';
import {MATERIAL_MODULES} from './material-modules';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [...MATERIAL_MODULES, HttpClientModule],
  exports: [...MATERIAL_MODULES]
})
export class SharedModule {}
