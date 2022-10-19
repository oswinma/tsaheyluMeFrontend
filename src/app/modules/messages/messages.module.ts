import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './pages/messages/messages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessagesRoutingModule } from './messages.routing';
import { MessageRowComponent } from './components/message-row/message-row.component';
import { MessageListComponent } from './components/message-list/message-list.component';

@NgModule({
  declarations: [MessagesComponent, MessageRowComponent, MessageListComponent],
  imports: [SharedModule, MessagesRoutingModule],
})
export class MessagesModule {}
