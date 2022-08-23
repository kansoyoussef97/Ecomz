import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabsComponent } from './cabs.component';
import { EditCabsComponent } from './edit-cabs/edit-cabs.component';
import { NewCabsComponent } from './new-cabs/new-cabs.component';

const routes: Routes = [
  {
    path: '',
    component: CabsComponent,
  },
  {
    path: 'new',
    component: NewCabsComponent,
  },
  {
    path: 'edit/:id',
    component: EditCabsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabsRoutingModule { }
