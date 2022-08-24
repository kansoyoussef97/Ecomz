import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { NewCustomersComponent } from './new-customers/new-customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
  },
  {
    path: 'new',
    component: NewCustomersComponent,
  },
  {
    path: 'edit/:id',
    component: EditCustomersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
