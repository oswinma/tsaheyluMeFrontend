import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitationsComponent } from './pages/invitations/invitations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvitationsRoutingModule } from './invitations.routing';

@NgModule({
  declarations: [InvitationsComponent],
  imports: [InvitationsRoutingModule, SharedModule],
})
export class InvitationsModule {}
