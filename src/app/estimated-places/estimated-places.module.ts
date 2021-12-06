import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimatedPlacesPageRoutingModule } from './estimated-places-routing.module';

import { EstimatedPlacesPage } from './estimated-places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimatedPlacesPageRoutingModule
  ],
  declarations: [EstimatedPlacesPage]
})
export class EstimatedPlacesPageModule {}
