import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleModelPageRoutingModule } from './vehicle-model-routing.module';

import { VehicleModelPage } from './vehicle-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleModelPageRoutingModule
  ],
  declarations: [VehicleModelPage]
})
export class VehicleModelPageModule {}
