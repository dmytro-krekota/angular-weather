import {NgModule} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [SharedModule]
})
export class NavbarModule {}
