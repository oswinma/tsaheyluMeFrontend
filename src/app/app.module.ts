import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderNavComponent } from './layout/header-nav/header-nav.component';
import { HeaderComComponent } from './layout/header-com/header-com.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],

  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderNavComponent,
    HeaderComComponent,
    AppComponent,
    ContentLayoutComponent
  ],

  bootstrap: [AppComponent],
})
export class AppModule {
}
