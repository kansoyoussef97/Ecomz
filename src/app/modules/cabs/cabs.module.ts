import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabsRoutingModule } from './cabs-routing.module';
import { CabsComponent } from './cabs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    CabsComponent
  ],
  imports: [
    CommonModule,
    CabsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class CabsModule { }
