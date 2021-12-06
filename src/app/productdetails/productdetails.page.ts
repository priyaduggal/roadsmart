import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {
 slideOpts = {
    initialSlide: 1,
	 slidesPerView: 1,
	  spaceBetween: 0,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
  }
    
  currentNumber = 0;
  increment () {
    this.currentNumber++;
  }

 decrement () {
	 if(this.currentNumber == 0)
	 {
      this.currentNumber = 0;
    }else
	 { this.currentNumber--;
    }
  }

}
