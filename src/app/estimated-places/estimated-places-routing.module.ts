import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimatedPlacesPage } from './estimated-places.page';

const routes: Routes = [
  {
    path: '',
    component: EstimatedPlacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimatedPlacesPageRoutingModule {}
