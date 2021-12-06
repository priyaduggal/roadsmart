import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleModalYearPageRoutingModule } from './vehicle-modal-year-routing.module';

import { VehicleModalYearPage } from './vehicle-modal-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleModalYearPageRoutingModule
  ],
  declarations: [VehicleModalYearPage]
})
export class VehicleModalYearPageModule {}
