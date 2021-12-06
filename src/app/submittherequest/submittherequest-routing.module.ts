import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmittherequestPage } from './submittherequest.page';

const routes: Routes = [
  {
    path: '',
    component: SubmittherequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmittherequestPageRoutingModule {}
