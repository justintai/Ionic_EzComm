import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsPageRoutingModule } from './maps-routing.module';

import { MapsPage } from './maps.page';

import { HMSSite } from '@hmscore/ionic-native-hms-site/ngx';
import { HMSMap } from '@hmscore/ionic-native-hms-map/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsPageRoutingModule
  ],
  declarations: [MapsPage],
  providers: [HMSSite, HMSMap]
})
export class MapsPageModule {}
