import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductcheckoutPage } from './productcheckout.page';

const routes: Routes = [
  {
    path: '',
    component: ProductcheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductcheckoutPageRoutingModule {}
