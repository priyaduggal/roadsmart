import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarvehicleinfoPageRoutingModule } from './carvehicleinfo-routing.module';

import { CarvehicleinfoPage } from './carvehicleinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarvehicleinfoPageRoutingModule
  ],
  declarations: [CarvehicleinfoPage]
})
export class CarvehicleinfoPageModule {}
