import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubServicesPartPage } from './sub-services-part.page';

const routes: Routes = [
  {
    path: '',
    component: SubServicesPartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubServicesPartPageRoutingModule {}
