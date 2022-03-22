import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserZoneComponent } from './components/user-zone/user-zone.component';
import { MessageNumComponent } from './components/message-num/message-num.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
  ],
  declarations: [MessageNumComponent, UserZoneComponent],
  exports: [
    CommonModule,
    MessageNumComponent,
    UserZoneComponent,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
  ],
})
export class SharedModule {}
