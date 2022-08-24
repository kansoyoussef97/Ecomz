import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { NewCustomersComponent } from './new-customers/new-customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ConfirmationDialogModule } from 'src/app/shared/confirmation-dialog/confirmation-dialog.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersFormComponent,
    NewCustomersComponent,
    EditCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressBarModule,
    ConfirmationDialogModule,
    LoaderModule,
  ]
})
export class CustomersModule { }
