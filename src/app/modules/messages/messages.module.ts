import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './pages/messages/messages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessagesRoutingModule } from './messages.routing';

@NgModule({
  declarations: [MessagesComponent],
  imports: [SharedModule, MessagesRoutingModule],
})
export class MessagesModule {}
