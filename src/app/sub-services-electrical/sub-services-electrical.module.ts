import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubServicesElectricalPageRoutingModule } from './sub-services-electrical-routing.module';

import { SubServicesElectricalPage } from './sub-services-electrical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubServicesElectricalPageRoutingModule
  ],
  declarations: [SubServicesElectricalPage]
})
export class SubServicesElectricalPageModule {}
