import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';
import { EcomzNavModule } from './shared/ecomz-nav/ecomz-nav.module';
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EcomzNavModule,
    MatSnackBarModule,
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorsInterceptor,
        multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
