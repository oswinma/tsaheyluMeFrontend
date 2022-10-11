import { BasicRoutingModule } from './basic.routing';
import { UserBasicComponent } from './pages/user-basic/user-basic.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileUploadModule } from 'ng2-file-upload';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [UserBasicComponent, UserInfoComponent],

  imports: [SharedModule, FileUploadModule, BasicRoutingModule],
  entryComponents: [UserBasicComponent],
})
export class BasicModule {}
