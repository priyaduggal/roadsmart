import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  public segment: string = "messages";
  segmentChanged(ev: any) {
  this.segment = ev.detail.value;
  }
  MymessageValue : string ;
  customAlertOptions: any = {
    header: ' Select',
    translucent: true
  };
  constructor() { this.MymessageValue = "message2" ;}

  ngOnInit() {
  }

}
