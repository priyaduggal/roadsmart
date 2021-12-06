import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleEnginePageRoutingModule } from './vehicle-engine-routing.module';

import { VehicleEnginePage } from './vehicle-engine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleEnginePageRoutingModule
  ],
  declarations: [VehicleEnginePage]
})
export class VehicleEnginePageModule {}
