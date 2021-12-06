import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcart',
  templateUrl: './productcart.page.html',
  styleUrls: ['./productcart.page.scss'],
})
export class ProductcartPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private currentNumber = 1;
  private increment () {
    this.currentNumber++;
  }

 private decrement () {
	 if(this.currentNumber == 0)
	 {
      this.currentNumber = 0;
    }else
	 { this.currentNumber--;
    }
  }

}
