import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleModalYearPage } from './vehicle-modal-year.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleModalYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleModalYearPageRoutingModule {}
