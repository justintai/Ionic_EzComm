import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.page.html',
  styleUrls: ['./vieworder.page.scss'],
})
export class VieworderPage implements OnInit {

  order_date;
  constructor() { 
  }

  ngOnInit() {
  }

  order_save() {
    console.log(this.order_date);
  }

  order_undo() {
  }

}
