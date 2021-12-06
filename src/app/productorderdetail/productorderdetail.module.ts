import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductorderdetailPageRoutingModule } from './productorderdetail-routing.module';

import { ProductorderdetailPage } from './productorderdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductorderdetailPageRoutingModule
  ],
  declarations: [ProductorderdetailPage]
})
export class ProductorderdetailPageModule {}
