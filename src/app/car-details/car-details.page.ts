import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarinsurancePage } from '../carinsurance/carinsurance.page';
import { CarvehicleinfoPage } from '../carvehicleinfo/carvehicleinfo.page';
import { CarlicensingPage } from '../carlicensing/carlicensing.page';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {
 async presentModal3() {
    const modal = await this.modalController.create({
      component: CarinsurancePage,
      cssClass: 'DetailModal'
    });
    return await modal.present();
  }
   async presentModal2() {
    const modal = await this.modalController.create({
      component: CarvehicleinfoPage,
      cssClass: 'DetailModal'
    });
    return await modal.present();
  }
   async presentModal1() {
    const modal = await this.modalController.create({
      component: CarlicensingPage,
      cssClass: 'DetailModal'
    });
    return await modal.present();
  }
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

}
