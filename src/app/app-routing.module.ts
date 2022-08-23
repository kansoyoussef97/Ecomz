import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabsComponent } from './modules/cabs/cabs.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/cabs/cabs.module')
    .then(m => m.CabsModule),
  },
  {
    path: 'cabs',
    loadChildren: () => import('./modules/cabs/cabs.module')
    .then(m => m.CabsModule),
  },
  {
    path: 'customers',
    loadChildren: () => import('./modules/customers/customers.module')
    .then(m => m.CustomersModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
