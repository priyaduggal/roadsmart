import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-productfilters',
  templateUrl: './productfilters.page.html',
  styleUrls: ['./productfilters.page.scss'],
})
export class ProductfiltersPage implements OnInit {
  MytypeValue : string ;
  MybrandsValue : string ;
customAlertOptions: any = {
    header: 'Filter By Type',
    translucent: true
  };
  customAlertOptions2: any = {
    header: 'Filter By Brands',
    translucent: true
  };
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
