import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
slideOpts1 = {
  slidesPerView: 1.2,
  spaceBetween: 10,
  speed: 400,
  loop:true,
  autoplay:false,
}
}
