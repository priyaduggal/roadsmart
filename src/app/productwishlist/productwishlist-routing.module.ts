import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductwishlistPage } from './productwishlist.page';

const routes: Routes = [
  {
    path: '',
    component: ProductwishlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductwishlistPageRoutingModule {}
