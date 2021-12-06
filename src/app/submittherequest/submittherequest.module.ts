import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmittherequestPageRoutingModule } from './submittherequest-routing.module';

import { SubmittherequestPage } from './submittherequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmittherequestPageRoutingModule
  ],
  declarations: [SubmittherequestPage]
})
export class SubmittherequestPageModule {}
