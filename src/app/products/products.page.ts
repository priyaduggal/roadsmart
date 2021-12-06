import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductfiltersPage } from '../productfilters/productfilters.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ProductfiltersPage,
      cssClass: 'FiltersModal'
    });
    return await modal.present();
  }
}
