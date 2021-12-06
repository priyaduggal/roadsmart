import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductwishlistPageRoutingModule } from './productwishlist-routing.module';

import { ProductwishlistPage } from './productwishlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductwishlistPageRoutingModule
  ],
  declarations: [ProductwishlistPage]
})
export class ProductwishlistPageModule {}
