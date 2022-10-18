import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitationsComponent } from './pages/invitations/invitations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvitationsRoutingModule } from './invitations.routing';
import { InvitationRowComponent } from './components/invitation-row/invitation-row.component';
import { InvitationListComponent } from './components/invitation-list/invitation-list.component';

@NgModule({
  declarations: [InvitationsComponent, InvitationRowComponent, InvitationListComponent],
  imports: [InvitationsRoutingModule, SharedModule],
})
export class InvitationsModule {}
