import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-edit',
  templateUrl: './insurance-edit.page.html',
  styleUrls: ['./insurance-edit.page.scss'],
})
export class InsuranceEditPage implements OnInit {
  public segment: string = "insurance";
  segmentChanged(ev: any) {
  this.segment = ev.detail.value;
  }
  ngOnInit() {}
  MyproviderValue : string ;
  MycoverValue : string ;
  MystatusValue : string ;
  customAlertOptions: any = {
    header: ' Select Provider',
    translucent: true
  };
  customAlertOptions1: any = {
    header: ' Select Cover',
    translucent: true
  };  customAlertOptions2: any = {
    header: ' Select Status',
    translucent: true
  };
  constructor() { 
  this.MyproviderValue = "provider1" ;
  this.MycoverValue = "cover1" ;
  this.MystatusValue = "status1" ;
  
  }
}
