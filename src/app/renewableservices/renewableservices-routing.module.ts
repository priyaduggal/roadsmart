import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenewableservicesPage } from './renewableservices.page';

const routes: Routes = [
  {
    path: '',
    component: RenewableservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenewableservicesPageRoutingModule {}
