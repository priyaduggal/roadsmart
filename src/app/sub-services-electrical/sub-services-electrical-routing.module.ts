import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubServicesElectricalPage } from './sub-services-electrical.page';

const routes: Routes = [
  {
    path: '',
    component: SubServicesElectricalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubServicesElectricalPageRoutingModule {}
