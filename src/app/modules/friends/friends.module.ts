import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FriendsRoutingModule } from './friends.routing';
import { NgModule } from '@angular/core';
import { FriendsComponent } from './pages/friends/friends.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { GroupcircleComponent } from './components/groupcircle/groupcircle.component';

@NgModule({
  declarations: [
    FriendsComponent,
    ContactCardComponent,
    GroupcircleComponent,
    ContactListComponent,
  ],
  imports: [SharedModule, FriendsRoutingModule],
})
export class FriendsModule {}
