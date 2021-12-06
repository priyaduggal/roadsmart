import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductcartPage } from './productcart.page';

const routes: Routes = [
  {
    path: '',
    component: ProductcartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductcartPageRoutingModule {}
