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
    this.db.getOrders().subscribe((data) => {
      this.pending_order = data.filter((each) => {
        if (each.status == 2) {
          return each;
        }
      });
      this.complete_order = data.filter((each) => {
        if (each.status == 1) {
          return each;
        }
      });
      this.cancel_order = data.filter((each) => {
        if (each.status == 0) {
          return each;
        }
      });
    })
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  addOrder() {
    this.router.navigate(["/addorder", { mode: 1}]);
  }

  async cancelOrder(id, item_id, stock, qty) {
    stock = stock + qty;
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
            this.db.updateStatus(id, 0, item_id, stock);
          }
        }
      ]
    });
    await alert.present();
  }

  async undoOrder(id, item_id, stock, qty) {
    stock = stock - qty;
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
            this.db.updateStatus(id, 2, item_id, stock);
          }
        }
      ]
    });
    await alert.present();
  }

}
