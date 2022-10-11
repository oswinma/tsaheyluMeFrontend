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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RightNavComponent } from './layout/right-nav/right-nav.component';
import * as Sentry from '@sentry/angular';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { Router } from '@angular/router';

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
    HeaderNavComponent,
    HeaderComComponent,
    AppComponent,
    ContentLayoutComponent,
    RightNavComponent,
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
