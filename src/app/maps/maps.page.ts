import { Component, OnInit } from '@angular/core';
import { 
  HMSSite, SearchService, SearchServiceFactory,
  TextSearchRequest, TextSearchResponse,
  NearbySearchRequest, NearbySearchResponse,
  DetailSearchRequest, DetailSearchResponse,
  QueryAutocompleteRequest, QueryAutocompleteResponse,
  QuerySuggestionRequest, QuerySuggestionResponse,
  SearchFilter, LocationType, HwLocationType
} from '@hmscore/ionic-native-hms-site/ngx';
import { HMSMap, CameraUpdateFactory, Color, HuaweiMap, LatLng, MarkerOptions } from '@hmscore/ionic-native-hms-map/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  address = this.route.snapshot.paramMap.get("id");
  private searchService: SearchService = null;
  private readonly apiKey = "CgB6e3x991tj6QIY2ZM0aWY9crhqEPGLCnMwH4t9LNVXgmMSQQEDTKJNGH2woZCd10QSp1425eSqpfmK3QMpOLL1";
  map: HuaweiMap;
  iniLat:any = 1.7327292;
  iniLng:any = 103.7006713;

  constructor(private route: ActivatedRoute, private hmsSite: HMSSite, private hmsMap: HMSMap) { 
    SearchServiceFactory.create(this.apiKey)
      .then(service => this.searchService = service)
      .catch(err => console.log('An error occurred.'));
  }

  ngOnInit() {
  }

  ionViewWillLeave() {
    if(this.map)
      this.map.hideMap();
  }
  
  ngOnDestroy() {
    if(this.map)
      this.map.destroyMap();
  }

  async ionViewWillEnter() {
    const mapOptions = {
      cameraPosition: {
          target: {lat: this.iniLat, lng: this.iniLng},
          zoom: 2
      }
    };
    this.map = await this.hmsMap.getMap('map-view', mapOptions);
    // await this.map.setMyLocationEnabled(true);
    await this.map.getUiSettings().setGestureScaleByMapCenter(true);
    await this.locationSearch();
  }

  initMap() {
    this.hmsMap.requestPermission();
    const mapOptions = {
      cameraPosition: {
        target: {
          lat: this.iniLat,
          lng: this.iniLng
        },
        zoom: 7
      }
    }
    this.hmsMap.getMap('map-view', mapOptions).then((map) => {
      this.map = map;
      console.log('Map Initialized!');
    }).catch(e => console.log('Map Initialize error: ' + JSON.stringify(e)));
  }


  // scrollStart(event) {
  //   console.log('logScrollStart : When Scroll Starts', event);
  // }

  // async scrolling(event) {
  //     console.log('logScrolling : When Scrolling', event);
  //     await this.map.scroll();
  // }

  // scrollEnd(event) {
  //     console.log('logScrollEnd : When Scroll Ends', event);
  // }

  async locationSearch() {
    const textSearchReq: TextSearchRequest = {
      children: false,
      query: this.address,
      location: {
        lat: this.iniLat,
        lng: this.iniLng,
      },
      radius: 50000,
      poiType: LocationType.ADDRESS,
      hwPoiType: HwLocationType.ADDRESS,
      countryCode: "MY",
      language: "en",
      pageIndex: 1,
      pageSize: 5
    };
    const response: any = await this.searchService.textSearch(textSearchReq);
    let obj = JSON.parse(response);
    let cameraLocation: any;

    if(obj.length != 0) {
      cameraLocation = obj.sites[0].location;

      try {
        await this.map.moveCamera(CameraUpdateFactory.newCameraPosition({
          target: {
            lat: cameraLocation.lat,
            lng: cameraLocation.lng
          },
          zoom: 15
        }));

        await this.map.addMarker({
          position: {
            lat: cameraLocation.lat,
            lng : cameraLocation.lng
        }});
      }
      catch(e) {
        console.error('error : ',e);
      }
    }
  }
}
