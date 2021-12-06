import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarinsurancePageRoutingModule } from './carinsurance-routing.module';

import { CarinsurancePage } from './carinsurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarinsurancePageRoutingModule
  ],
  declarations: [CarinsurancePage]
})
export class CarinsurancePageModule {}
