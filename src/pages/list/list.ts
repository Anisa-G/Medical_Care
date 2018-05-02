import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//, ViewChild, OnInit, Renderer
//import { NavController, NavParams, CardContent } from 'ionic-angular';

import { HospitalMapPage } from '../hospital-map/hospital-map';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  //implements OnInit

  listExpanded = false;

  searchQuery: string = '';
  Cities: string[];


  // @ViewChild("cardC") CardContent: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.initializeHospitals();
    
  }
  initializeHospitals() {
    this.Cities = [
      'Tirana ',
      'Durres',
      'Berat',
      'Diber',
      'Shkoder',
      'Peshkopi',
      'Elbasan',
      'Kruje',
      'Saranda',
      'Vlora',
      'Gjirokaster',
      'Kukes',
      'Tropoje'
    ];
  }

  goHospital(){
    this.navCtrl.push(HospitalMapPage);
  }



  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeHospitals();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.Cities = this.Cities.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
  

}

