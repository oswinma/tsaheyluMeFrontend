import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyRoutingModule } from './verify-routing.module';
import { VerifyComponent } from './verify.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VerifyComponent],
  imports: [SharedModule, VerifyRoutingModule],
})
export class VerifyModule {}
