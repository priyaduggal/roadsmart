import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  public segment: string = "allservices";
segmentChanged(ev: any) {
  this.segment = ev.detail.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
