import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
items = [
  {week:'Sun', day:'16', active:false},
  {week:'Mon', day:'17', active:true},
  {week:'Tue', day:'18', active:false},
  {week:'Wed', day:'19', active:false},
  {week:'Thu', day:'20', active:false},
  {week:'Fri', day:'21', active:false},
  {week:'Sat', day:'22', active:false},
];
toggleClass(item){
  item.active = !item.active;
}
}
