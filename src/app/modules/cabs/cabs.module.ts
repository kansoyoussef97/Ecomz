import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabsRoutingModule } from './cabs-routing.module';
import { CabsComponent } from './cabs.component';


@NgModule({
  declarations: [
    CabsComponent
  ],
  imports: [
    CommonModule,
    CabsRoutingModule
  ]
})
export class CabsModule { }
