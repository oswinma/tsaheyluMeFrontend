import { FileUploadModule } from 'ng2-file-upload';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserZoneComponent } from './components/user-zone/user-zone.component';
import { MessageNumComponent } from './components/message-num/message-num.component';
import { FavurlListComponent } from './components/favurl-list/favurl-list.component';
import { LoginZoneComponent } from './components/login-zone/login-zone.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeaderComComponent } from './components/header-com/header-com.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { UserBasicComponent } from './components/user-basic/user-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    UserZoneComponent,
    MessageNumComponent,
    FavurlListComponent,
    LoginZoneComponent,
    HeaderNavComponent,
    HeaderComComponent,
    UserBasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    FileUploadModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
