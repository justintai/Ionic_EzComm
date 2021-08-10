import { Component, OnInit } from '@angular/core';
// import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  // version: any = this.appVerison.getVersionNumber();
  versionNumber: string = "1.0.0";
  constructor() { }

  ngOnInit() {
  }

}
