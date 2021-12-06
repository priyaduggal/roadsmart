import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarlicensingPageRoutingModule } from './carlicensing-routing.module';

import { CarlicensingPage } from './carlicensing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarlicensingPageRoutingModule
  ],
  declarations: [CarlicensingPage]
})
export class CarlicensingPageModule {}
