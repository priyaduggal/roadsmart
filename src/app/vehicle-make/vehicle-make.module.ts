import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleMakePageRoutingModule } from './vehicle-make-routing.module';

import { VehicleMakePage } from './vehicle-make.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleMakePageRoutingModule
  ],
  declarations: [VehicleMakePage]
})
export class VehicleMakePageModule {}
