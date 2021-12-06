import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductfiltersPageRoutingModule } from './productfilters-routing.module';

import { ProductfiltersPage } from './productfilters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductfiltersPageRoutingModule
  ],
  declarations: [ProductfiltersPage]
})
export class ProductfiltersPageModule {}
