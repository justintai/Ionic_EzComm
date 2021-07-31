import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.page.html',
  styleUrls: ['./addorder.page.scss'],
})
export class AddorderPage implements OnInit {

  order_date;
  constructor() { 
  }

  ngOnInit() {
  }

  order_save()
  {
    console.log(this.order_date);
  }
}
