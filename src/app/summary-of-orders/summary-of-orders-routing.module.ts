import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryOfOrdersPage } from './summary-of-orders.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryOfOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryOfOrdersPageRoutingModule {}
