import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubServicesQuickLinksPage } from './sub-services-quick-links.page';

const routes: Routes = [
  {
    path: '',
    component: SubServicesQuickLinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubServicesQuickLinksPageRoutingModule {}
