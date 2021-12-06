import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleModelPage } from './vehicle-model.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleModelPageRoutingModule {}
