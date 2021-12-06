import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.page.html',
  styleUrls: ['./vendor-profile.page.scss'],
})
export class VendorProfilePage implements OnInit {
  public segment: string = "estimate";
  segmentChanged(ev: any) {
  this.segment = ev.detail.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
