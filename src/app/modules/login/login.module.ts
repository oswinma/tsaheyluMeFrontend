import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginZoneComponent } from './pages/login-zone/login-zone.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
  declarations: [LoginZoneComponent],
  imports: [SharedModule, LoginRoutingModule],
  // entryComponents: [LoginZoneComponent],
})
export class LoginModule {}
