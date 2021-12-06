import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangevehiclePage } from './changevehicle.page';

const routes: Routes = [
  {
    path: '',
    component: ChangevehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangevehiclePageRoutingModule {}
