import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-carinsurance',
  templateUrl: './carinsurance.page.html',
  styleUrls: ['./carinsurance.page.scss'],
})
export class CarinsurancePage implements OnInit {

    constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
 dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
