import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarinsurancePage } from './carinsurance.page';

const routes: Routes = [
  {
    path: '',
    component: CarinsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarinsurancePageRoutingModule {}
