import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenewableservicesPageRoutingModule } from './renewableservices-routing.module';

import { RenewableservicesPage } from './renewableservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenewableservicesPageRoutingModule
  ],
  declarations: [RenewableservicesPage]
})
export class RenewableservicesPageModule {}
