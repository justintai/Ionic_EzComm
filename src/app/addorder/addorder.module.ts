import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddorderPageRoutingModule } from './addorder-routing.module';

import { AddorderPage } from './addorder.page';
import { HMSScan } from '@hmscore/ionic-native-hms-scan/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddorderPageRoutingModule
  ],
  declarations: [AddorderPage],
  providers:[HMSScan]
})
export class AddorderPageModule {}
