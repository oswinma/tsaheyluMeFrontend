import { FriendsRoutingModule } from './friends.routing';
import { NgModule } from '@angular/core';
import { FriendsComponent } from './pages/friends/friends.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactcardComponent } from './components/contactcard/contactcard.component';
import { GroupcircleComponent } from './components/groupcircle/groupcircle.component';

@NgModule({
  declarations: [FriendsComponent, ContactcardComponent, GroupcircleComponent],
  imports: [SharedModule, FriendsRoutingModule],
})
export class FriendsModule {}
