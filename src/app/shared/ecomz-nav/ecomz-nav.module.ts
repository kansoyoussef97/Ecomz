import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcomzNavComponent } from './ecomz-nav.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    EcomzNavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  exports: [
    EcomzNavComponent,
  ]
})
export class EcomzNavModule { }
