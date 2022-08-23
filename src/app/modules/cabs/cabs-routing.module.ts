import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabsComponent } from './cabs.component';

const routes: Routes = [
  {
    path: '',
    component: CabsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabsRoutingModule { }
