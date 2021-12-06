import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  public segment: string = "openorders";
segmentChanged(ev: any) {
  this.segment = ev.detail.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
