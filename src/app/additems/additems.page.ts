import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.page.html',
  styleUrls: ['./additems.page.scss'],
})
export class AdditemsPage implements OnInit {

  now = new Date();
  today = this.now.toISOString();

  constructor() { }

  ngOnInit() {
  }

}
