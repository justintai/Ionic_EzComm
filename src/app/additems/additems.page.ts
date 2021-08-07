import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { ActionSheetController, Platform, ToastController, } from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Component({
  selector: 'app-additems',
  templateUrl: './additems.page.html',
  styleUrls: ['./additems.page.scss'],
})
export class AdditemsPage implements OnInit {

  mode = this.route.snapshot.paramMap.get("mode");
  id = this.route.snapshot.paramMap.get("id");

  title = {
    "1": "Add Item",
    "2": "Item Details",
    "3": "Edit Item",
  }

  page_title: string;
  items: Observable<any[]>;
  item = {};

  item_image: string = "./assets/svg/add_photo.svg";
  item_name: string;
  item_price: number = null;
  item_stock: number = null;
  item_min: number = null;
  item_promo: number = null;

  constructor(
    private db: DatabaseService,
    private route: ActivatedRoute, 
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private platform: Platform,
    private router: Router, 
    private camera: Camera
    ) { 
    this.page_title = this.title[this.mode];
  }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if(rdy) {
        this.items = this.db.getItems();
      }
    });

    if(this.mode == '2' || this.mode == '3'){
      this.db.getItem(this.id).then((data) => {
        this.item_name = data["name"];
        this.item_stock = data["stock"];
        this.item_price = data["price"];
        this.item_min = data["min_purc"];
        this.item_promo = data["promo_price"];
        this.item_image = data["image"];
      });
    }
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = "data:image/jpeg;base64," + imageData;
        this.item_image = base64Image;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  choosePhoto() {
    const gelleryOptions: CameraOptions = {
      quality: 50,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };
    this.camera.getPicture(gelleryOptions).then(
      (imgData) => {
        // console.log("image data =>  ", imgData);
        let base64Image = "data:image/jpeg;base64," + imgData;
        this.item_image = base64Image;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async changeImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Option",
      buttons: [
        {
          text: "Take Picture",
          icon: "camera",
          handler: () => {
            this.takePhoto();
          },
        },
        {
          text: "Choose from Gallery",
          icon: "albums",
          handler: () => {
            this.choosePhoto();
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancelled");
          },
        },
      ],
    });
    await actionSheet.present();
  }

  item_edit() {
    this.router.navigate(["/additems", { mode: 3, id: this.id}]);
  }

  async item_save() {
    if(this.item_name == null) {
      let toast = await this.toastController.create({
        mode: "ios",
        message: "Name cannot be empty!",
        duration: 1000,
      });
      await toast.present();
      return false;
    }

    if(this.item_price == null) {
      let toast = await this.toastController.create({
        mode: "ios",
        message: "Price cannot be empty!",
        duration: 1000,
      });
      await toast.present();
      return false;
    }

    if(this.item_stock == null || this.item_stock == 0) {
      let toast = await this.toastController.create({
        mode: "ios",
        message: "Stock cannot be empty!",
        duration: 1000,
      });
      await toast.present();
      return false;
    }

    if(this.item_stock%1 > 0) {
      let toast = await this.toastController.create({
        mode: "ios",
        message: "Stock cannot be decimal!",
        duration: 1000,
      });
      await toast.present();
      return false;
    }

    if((this.item_min == null || this.item_min == 0) && this.item_promo != null) {
      let toast = await this.toastController.create({
        mode: "ios",
        message: "Please enter Min. purchase for promotion price!",
        duration: 1000,
      });
      await toast.present();
      return false;
    }

    if((this.item_min != null && this.item_min != 0) && this.item_promo == null) {
      let toast = await this.toastController.create({
        mode: "ios",
        message: "Promotion price cannot be empty!",
        duration: 1000,
      });
      await toast.present();
      return false;
    }

    if(this.item_min!=null || this.item_min!=0) {
      if(this.item_min%1 > 0 || this.item_min==0) {
        let toast = await this.toastController.create({
          mode: "ios",
          message: "Min. pruchase cannot be decimal or 0!",
          duration: 1000,
        });
        await toast.present();
        return false;
      }
    }

    if(this.mode === '1') {
      let itemObj = {
        name: this.item_name,
        price: this.item_price,
        stock: this.item_stock,
        min_purc: this.item_min,
        promo: this.item_promo,
        img: this.item_image,
        date: this.db.getDate()
      }

      this.db.addItems(itemObj).then
      ((data) => {
        if(data["insertId"]) {
          this.router.navigate(["/tabs/tab2"], { replaceUrl: true });
        }
      });
    }
    else if(this.mode === '3') {
      let itemObj = {
        id: this.id,
        name: this.item_name,
        price: this.item_price,
        stock: this.item_stock,
        min_purc: this.item_min,
        promo: this.item_promo,
        img: this.item_image
      }

      this.db.updateItems(itemObj).then
      ((data) => {
        this.router.navigate(["/tabs/tab2"], { replaceUrl: true });
      })
      .catch((e) => {
        return "Error" + JSON.stringify(e);
      });
    }
  }

}
