import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Sentry from '@sentry/angular';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
  ],

  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    ContentLayoutComponent,
    LeftNavComponent,
    MenuComponent,
    DefaultLayoutComponent,
  ],

  bootstrap: [AppComponent],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
})
export class AppModule {}
