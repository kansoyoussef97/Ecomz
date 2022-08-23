import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabsRoutingModule } from './cabs-routing.module';
import { CabsComponent } from './cabs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CabsFormComponent } from './cabs-form/cabs-form.component';
import { EditCabsComponent } from './edit-cabs/edit-cabs.component';
import { NewCabsComponent } from './new-cabs/new-cabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CabsComponent,
    CabsFormComponent,
    EditCabsComponent,
    NewCabsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CabsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
  ]
})
export class CabsModule { }
