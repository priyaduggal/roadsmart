import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.page.html',
  styleUrls: ['./viewdetail.page.scss'],
})
export class ViewdetailPage implements OnInit {
  public segment: string = "insurance";
  segmentChanged(ev: any) {
  this.segment = ev.detail.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
