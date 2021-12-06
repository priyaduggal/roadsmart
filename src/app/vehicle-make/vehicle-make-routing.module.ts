import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleMakePage } from './vehicle-make.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleMakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleMakePageRoutingModule {}
