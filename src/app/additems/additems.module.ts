import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditemsPageRoutingModule } from './additems-routing.module';

import { AdditemsPage } from './additems.page';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditemsPageRoutingModule
  ],
  declarations: [AdditemsPage],
  providers: [Camera]
})
export class AdditemsPageModule {}
