import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-carvehicleinfo',
  templateUrl: './carvehicleinfo.page.html',
  styleUrls: ['./carvehicleinfo.page.scss'],
})
export class CarvehicleinfoPage implements OnInit {
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
