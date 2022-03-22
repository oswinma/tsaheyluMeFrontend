import { AdminRoutingModule } from './admin.routing';
import { UserBasicComponent } from './pages/user-basic/user-basic.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [UserBasicComponent],

  imports: [SharedModule, FileUploadModule, AdminRoutingModule],
  entryComponents: [UserBasicComponent],
})
export class AdminModule {}
