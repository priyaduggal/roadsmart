import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductcartPageRoutingModule } from './productcart-routing.module';

import { ProductcartPage } from './productcart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductcartPageRoutingModule
  ],
  declarations: [ProductcartPage]
})
export class ProductcartPageModule {}
