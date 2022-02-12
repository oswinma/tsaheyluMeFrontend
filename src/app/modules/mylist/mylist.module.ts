import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavurlListComponent } from './pages/favurl-list/favurl-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MylistRoutingModule } from './mylist.routing';

@NgModule({
  declarations: [FavurlListComponent],
  imports: [SharedModule, InfiniteScrollModule, MylistRoutingModule],
})
export class MylistModule {}
