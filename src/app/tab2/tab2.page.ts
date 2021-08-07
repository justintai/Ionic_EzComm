import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  itemsList = [];

  constructor(private router: Router, private db: DatabaseService, private alertController: AlertController) {
    this.db.updateItemEvent.subscribe((data) => {
      this.loadData();
    });
    this.loadData();
  }

  addItems() {
    this.router.navigate(["/additems", { mode: 1}]);
  }

  loadData() {
    this.db.getItems().subscribe((data) => {
      console.log(data);
      this.itemsList = data;
    });
  }

  async item_delete(id) {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Are you sure to delete?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: () => {
            this.db.deleteItems(id);
          }
        }
      ]
    });
    await alert.present();
  }
}
