import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  type: string;
  pending_order = [];
  complete_order = [];
  cancel_order = [];

  constructor(private router: Router, private db: DatabaseService, private alertController: AlertController) {
    this.db.updateItemEvent.subscribe((data) => {
      this.loadData();
    });
    this.loadData();
  }

  ngOnInit() {
    this.type = 'pending';
  }

  loadData() {
    this.db.buffOrders(2).then((data) => {
      console.log(data);
      this.pending_order = data;
    });
    this.db.buffOrders(1).then((data) => {
      this.complete_order = data;
    });
    this.db.buffOrders(0).then((data) => {
      this.cancel_order = data;
    });
    // this.db.getOrders().subscribe((data) => {
    //   console.log(data);
    //   this.pending_order = data;
    // });
    // this.db.getOrders().subscribe((data) => {
    //   this.complete_order = data;
    // });
    // this.db.getOrders().subscribe((data) => {
    //   this.cancel_order = data;
    // });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  addOrder() {
    this.router.navigate(["/addorder", { mode: 1}]);
  }

  async cancelOrder(id) {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Are you sure to cancel this order?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: () => {
            this.db.updateStatus(id, 0);
          }
        }
      ]
    });
    await alert.present();
  }

  async undoOrder(id) {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Are you sure to revert this order?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: () => {
            this.db.updateStatus(id, 2);
          }
        }
      ]
    });
    await alert.present();
  }

}
