import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangevehiclePageRoutingModule } from './changevehicle-routing.module';

import { ChangevehiclePage } from './changevehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangevehiclePageRoutingModule
  ],
  declarations: [ChangevehiclePage]
})
export class ChangevehiclePageModule {}
