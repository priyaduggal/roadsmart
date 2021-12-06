import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleEnginePage } from './vehicle-engine.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleEnginePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleEnginePageRoutingModule {}
