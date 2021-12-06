import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubServicesPartPageRoutingModule } from './sub-services-part-routing.module';

import { SubServicesPartPage } from './sub-services-part.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubServicesPartPageRoutingModule
  ],
  declarations: [SubServicesPartPage]
})
export class SubServicesPartPageModule {}
