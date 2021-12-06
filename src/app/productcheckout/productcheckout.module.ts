import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductcheckoutPageRoutingModule } from './productcheckout-routing.module';

import { ProductcheckoutPage } from './productcheckout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductcheckoutPageRoutingModule
  ],
  declarations: [ProductcheckoutPage]
})
export class ProductcheckoutPageModule {}
