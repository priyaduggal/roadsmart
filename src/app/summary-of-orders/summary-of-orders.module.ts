import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryOfOrdersPageRoutingModule } from './summary-of-orders-routing.module';

import { SummaryOfOrdersPage } from './summary-of-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryOfOrdersPageRoutingModule
  ],
  declarations: [SummaryOfOrdersPage]
})
export class SummaryOfOrdersPageModule {}
