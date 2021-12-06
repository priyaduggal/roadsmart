import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceEditPage } from './insurance-edit.page';

const routes: Routes = [
  {
    path: '',
    component: InsuranceEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceEditPageRoutingModule {}
