import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductorderdetailPage } from './productorderdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ProductorderdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductorderdetailPageRoutingModule {}
