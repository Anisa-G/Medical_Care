import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



declare var google;

@IonicPage()
@Component({
  selector: 'page-hospital-map',
  templateUrl: 'hospital-map.html',
})
export class HospitalMapPage {
  image: any;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  pos:any ={};
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.pos = this.navParams.data;
      console.log(this.pos)
      
    }
  

  ionViewDidLoad() {
    this.initMap();

  }

  initMap() {

    var location = this.pos;




    var infoWindow, map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: location

    });
    infoWindow = new google.maps.InfoWindow;

    this.image = 'assets/icon/custom-marker.png'
    var marker = new google.maps.Marker({
      position: location,
      icon: this.image,
      map: map
    });
    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });
    // Set destination, origin and travel mode.
    // var request = {
    //   destination: Durres,
    //   origin: Tirane,
    //   travelMode: 'DRIVING'
    // };
    // Pass the directions request to the directions service.
    var directionsService = new google.maps.DirectionsService();
  }
}
