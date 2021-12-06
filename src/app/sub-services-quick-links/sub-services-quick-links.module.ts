import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubServicesQuickLinksPageRoutingModule } from './sub-services-quick-links-routing.module';

import { SubServicesQuickLinksPage } from './sub-services-quick-links.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubServicesQuickLinksPageRoutingModule
  ],
  declarations: [SubServicesQuickLinksPage]
})
export class SubServicesQuickLinksPageModule {}
