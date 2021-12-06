import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductfiltersPage } from './productfilters.page';

const routes: Routes = [
  {
    path: '',
    component: ProductfiltersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductfiltersPageRoutingModule {}
